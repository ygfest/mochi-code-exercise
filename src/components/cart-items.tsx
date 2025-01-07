"use client";

import { useShoppingCart } from "@/context/shopping-cart-context";
import productLists from "@/data/products.json";
import { formatCurrency } from "@/utilities/formatCurrency";

const CartItems = () => {
  const { removeFromCart, cartItems, handleCloseCart, isOpen } =
    useShoppingCart();

  return (
    <>
      {isOpen && cartItems.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-full md:max-w-lg right-0 top-0 bottom-0 shadow-lg overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={handleCloseCart}
              >
                &times;
              </button>
            </div>

            <div className="p-4 space-y-4">
              {cartItems.map(({ uuid, quantity }) => {
                const item = productLists.find(
                  (product) => product.uuid === uuid
                );
                if (item == null) return null;

                const price = parseFloat(item.price);
                return (
                  <div
                    key={uuid}
                    className="flex items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800">
                        {item.name}
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
                        className="mt-2 px-3 py-1 text-sm text-red-600 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition"
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
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">Total</h3>
                  <p className="text-xl font-bold text-gray-900">
                    {formatCurrency(
                      cartItems.reduce((total, cartItem) => {
                        const product = productLists.find(
                          (product) => product.uuid === cartItem.uuid
                        );
                        const productPrice = product
                          ? parseFloat(product.price)
                          : 0;
                        return total + productPrice * cartItem.quantity;
                      }, 0)
                    )}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
