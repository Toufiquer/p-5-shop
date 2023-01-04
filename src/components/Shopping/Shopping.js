import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shopping.css";
const Shopping = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shopping">
      <Products products={products}></Products>
      <Cart></Cart>
    </div>
  );
};

export default Shopping;
