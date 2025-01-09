import type { Metadata } from "next";
import "../globals.css";
import TopNavComponent from "@/components/top-nav";
import { ShoppingCartProvider } from "@/context/shopping-cart-context";
import ShoppingCart from "../(cart)/shopping-cart";

export const metadata: Metadata = {
  title: "Mochi Excercise Checkout System",
  description:
    "A Mochi Software Engineering Intern Application Assesssment Test built by Stefano San Esteban",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ShoppingCartProvider>
      <TopNavComponent />
      <ShoppingCart />
      {children}
    </ShoppingCartProvider>
  );
}
