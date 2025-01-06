"use client";

import Image from "next/image";
import React from "react";
import { useShoppingCart } from "@/context/shopping-cart-context";
import { MdOutlineShoppingCart } from "react-icons/md";

const TopNavComponent: React.FC = () => {
  const { cartQuantity, handleOpenCart } = useShoppingCart();

  return (
    <nav className="fixed top-0 z-20 bg-white shadow-md w-full border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <Image
            src="/images/mochi-logo.png"
            alt="Mochi Logo"
            width={90}
            height={30}
          />
          <p className="text-lg font-semibold text-gray-800">
            Mochi Checkout System
          </p>
        </div>
        <div>
          {cartQuantity > 0 && (
            <button
              className="relative flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full hover:bg-primary hover:text-white transition"
              onClick={handleOpenCart}
              aria-label="Open Shopping Cart"
            >
              <MdOutlineShoppingCart className="text-2xl" />
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                {cartQuantity}
              </span>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavComponent;
