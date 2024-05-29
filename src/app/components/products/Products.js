"use client";
import React, { useState } from "react";
import Image from "next/image";
import AddCartBtn from "../AddCartBtn/AddCartBtn";

const Products = ({ products = [] }) => {
  const [cartItem, setCartItems] = useState([]);
  return (
    <>
      {products.map((product, index) => (
        <div className="product" key={`${product.id}`}>
          <h5>{product.title}</h5>
          <Image
            alt="bsbgrs"
            src={product.image}
            height="300"
            width="300"
            priority={true}
          />
          <AddCartBtn addToCart={() => setCartItems([...cartItem, product])} />
        </div>
      ))}
    </>
  );
};

export default Products;
