import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ products }) => {
  let newProducts = [...products];
  newProducts.length = 12;
  return (
    <div className="products">
      {newProducts.map((product) => (
        <Product product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
