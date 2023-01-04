import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import { getItem } from "../utilities/manageDB";
import { searchProducts } from "../utilities/searchProducts";
import "./Shopping.css";
const Shopping = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const showCart = (products) => {
    let cartItem = getItem();
    const getStoredProducts = searchProducts(cartItem, products);
    setCart(getStoredProducts);
  };
  useEffect(() => {
    showCart(products);
  }, [products]);
  return (
    <div className="shopping">
      <Products showCart={showCart} products={products}></Products>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shopping;
