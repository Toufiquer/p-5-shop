import React from "react";
import Product from "../Product/Product";
import "./Products.css";
const Products = ({ products, showCart }) => {
  let newProducts = [...products];
  newProducts.length = 12;
  return (
    <div className="products">
      {newProducts.map((product) => (
        <Product products={products} showCart={showCart} product={product} key={product.id}></Product>
      ))}
    </div>
  );
};

export default Products;
