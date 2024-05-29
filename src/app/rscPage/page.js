import React from "react";
import Products from "../components/products/Products.js";

export async function getProducts() {
  const data = await fetch("https://fakestoreapi.com/products", {
    cache: "no-cache",
  });
  const products = await data.json();

  return products;
}
const page = async () => {
  const productsData = await getProducts().catch((er) => []);

  return (
    <div className="products-container">
      <Products products={productsData} />
    </div>
  );
};

export default page;
