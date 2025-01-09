"use client";

import { useShoppingCart } from "@/context/shopping-cart-context";
import productLists from "@/data/products.json";
import { formatCurrency } from "@/utilities/formatCurrency";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const CartItems: React.FC = () => {
  const { removeFromCart, cartItems, handleCloseCart, isOpen } =
    useShoppingCart();

  useEffect(() => {
    if (cartItems.length === 0) {
      handleCloseCart();
    }
  }, [cartItems, handleCloseCart]);

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = productLists.find((product) => product.uuid === cartItem.uuid);
    const productPrice = item ? parseFloat(item.price) : 0;
    return total + productPrice * cartItem.quantity;
  }, 0);

  let discountedPrice = totalPrice;
  let discountApplied = "None";
  if (totalPrice > 100) {
    discountedPrice = totalPrice - totalPrice * 0.2;
    discountApplied = "20% off on total greater than $100";
  } else if (totalPrice > 50) {
    discountedPrice = totalPrice - totalPrice * 0.15;
    discountApplied = "15% off on total greater than $50";
  } else if (totalPrice > 20) {
    discountedPrice = totalPrice - totalPrice * 0.1;
    discountApplied = "10% off on total greater than $20";
  }

  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`bg-white w-[360px] md:w-[460px] md:max-w-[460px] top-0 bottom-0 shadow-xl rounded-lg overflow-hidden transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-xl font-semibold text-gray-800">
              Your Shopping Cart
            </h2>
            <button
              className="text-gray-500 hover:text-gray-800 text-2xl"
              onClick={handleCloseCart}
            >
              &times;
            </button>
          </div>

          <div className="p-4 space-y-6">
            {cartItems.map(({ uuid, quantity }, index) => {
              const item = productLists.find(
                (product) => product.uuid === uuid
              );
              if (!item) return null;

              const price = parseFloat(item.price);
              return (
                <div
                  key={uuid}
                  className="flex items-center justify-between gap-6 border-b border-gray-200 pb-4"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {index + 1}. {item.name}
                    </h4>
                    {quantity > 1 && (
                      <p className="text-sm text-gray-500">
                        Quantity: x{quantity}
                      </p>
                    )}
                    <p className="text-sm text-gray-800">
                      {formatCurrency(price)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="text-lg font-bold text-gray-900">
                      {formatCurrency(price * quantity)}
                    </p>
                    <button
                      className="mt-2 px-4 py-2 text-sm text-red-600 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition"
                      onClick={() => removeFromCart(uuid)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-300">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Total:
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(totalPrice)}
                  </p>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Discount Applied:
                  </h3>
                  <p className="text-md font-normal text-gray-500">
                    {discountApplied}
                  </p>
                </div>

                <div className="flex justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Discounted Price:
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(discountedPrice)}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  className="w-full py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/60 transition"
                  onClick={() => alert("Proceeding to checkout")}
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(CartItems), { ssr: false });
