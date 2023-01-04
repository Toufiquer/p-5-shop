import React from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shopping.css";
const Shopping = () => {
  return (
    <div className="shopping">
      <Products></Products>
      <Cart></Cart>
    </div>
  );
};

export default Shopping;
