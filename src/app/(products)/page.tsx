import ProductsContainer from "./components/products-display-container";
import productLists from "@/data/products.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mochi Checkout System | Products",
  description:
    "A Mochi Software Engineering Intern Application Assesssment Test built by Stefano San Esteban",
};

const Products = () => {
  return (
    <div className="p-6 bg-background">
      <main className="container mx-auto px-6 pt-[5rem]">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Products Showcase
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productLists.map((item) => (
            <ProductsContainer {...item} key={item.uuid} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;
