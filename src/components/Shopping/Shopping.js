import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { showCart } from "../utilities/manageDB";
import "./Shopping.css";
const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const updateCart = () => {
    const getStoredProducts = showCart(products);
    setCart(getStoredProducts);
  };
  useEffect(() => {
    const getStoredProducts = showCart(products);
    setCart(getStoredProducts);
  }, [products]);
  return (
    <div className="shopping">
      <Products updateCart={updateCart} products={products}></Products>
      <Cart updateCart={updateCart} cart={cart}></Cart>
    </div>
  );
};

export default Shopping;
