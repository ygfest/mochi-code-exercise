import CartItems from "@/components/cart-items";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Mochi Checkout System | Cart",
  description:
    "A Mochi Software Engineering Intern Application Assesssment Test built by Stefano San Esteban",
};

const ShoppingCart = () => {
  return (
    <div>
      <CartItems />
    </div>
  );
};

export default ShoppingCart;
