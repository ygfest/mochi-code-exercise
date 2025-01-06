"use client";

import { useShoppingCart } from "@/context/shopping-cart-context";
import { formatCurrency } from "@/utilities/formatCurrency";

type ProductsContainerProps = {
  uuid: number;
  name: string;
  price: string;
};

const ProductsContainer = ({ uuid, name, price }: ProductsContainerProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(uuid);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center gap-4 w-full max-w-md border border-gray-200 hover:shadow-xl transition">
      <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center">
        <span className="text-gray-400">No Image Available</span>
      </div>

      <div className="flex flex-col items-center w-full text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-md text-green-600 font-bold mt-1">
          {formatCurrency(price)}
        </p>
      </div>

      <div className="w-full mt-4">
        {quantity === 0 ? (
          <button
            className="w-full bg-[#6D41E8] text-white py-2 rounded-md hover:bg-[#5A35B9] transition"
            onClick={() => increaseCartQuantity(uuid)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-400 transition"
                onClick={() => decreaseCartQuantity(uuid)}
              >
                -
              </button>
              <p className="text-sm text-gray-700">{`${quantity} in cart`}</p>
              <button
                className="bg-[#6D41E8] text-white py-2 px-4 rounded-md hover:bg-[#5A35B9] transition"
                onClick={() => increaseCartQuantity(uuid)}
              >
                +
              </button>
            </div>
            <button
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              onClick={() => removeFromCart(uuid)}
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
