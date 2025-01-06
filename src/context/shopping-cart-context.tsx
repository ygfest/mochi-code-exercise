"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  uuid: number;
  quantity: number;
};

type ShoppingCartContextType = {
  handleOpenCart: () => void;
  handleCloseCart: () => void;
  getItemQuantity: (uuid: number) => number;
  increaseCartQuantity: (uuid: number) => void;
  decreaseCartQuantity: (uuid: number) => void;
  removeFromCart: (uuid: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  isOpen: boolean;
};

const ShoppingCartContext = createContext<ShoppingCartContextType | undefined>(
  undefined
);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

// ShoppingCartProvider Component
export const ShoppingCartProvider = ({
  children,
}: ShoppingCartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCart = () => setIsOpen(true);
  const handleCloseCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  const getItemQuantity = (uuid: number): number =>
    cartItems.find((item) => item.uuid === uuid)?.quantity || 0;

  const increaseCartQuantity = (uuid: number) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item.uuid === uuid)) {
        return [...currItems, { uuid, quantity: 1 }];
      }
      return currItems.map((item) =>
        item.uuid === uuid ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decreaseCartQuantity = (uuid: number) => {
    setCartItems((currItems) => {
      const existingItem = currItems.find((item) => item.uuid === uuid);
      if (!existingItem) return currItems;
      if (existingItem.quantity === 1) {
        return currItems.filter((item) => item.uuid !== uuid);
      }
      return currItems.map((item) =>
        item.uuid === uuid ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const removeFromCart = (uuid: number) => {
    setCartItems((currItems) => currItems.filter((item) => item.uuid !== uuid));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        handleOpenCart,
        handleCloseCart,
        cartItems,
        cartQuantity,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
