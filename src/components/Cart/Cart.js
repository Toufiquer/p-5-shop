import React from "react";
import { deleteAllCart } from "../utilities/manageDB";
import "./Cart.css";
const Cart = ({ cart, updateCart }) => {
  let totalItem = cart.reduce((acc, curr) => {
    acc += curr.quantity;
    return acc;
  }, 0);
  let totalShopping = cart.reduce((acc, curr) => {
    acc += curr.price * curr.quantity;
    return acc;
  }, 0);
  return (
    <div className="cart">
      <div className="cart-container">
        <h3>Total Item: {totalItem}</h3>
        <h3>Total Shopping: ${totalShopping}</h3>
        <h3>Tax: ${(totalShopping * 0.1).toFixed(2)}</h3>
        <h2>Grand Total: ${(totalShopping + totalShopping * 0.1).toFixed(2)}</h2>
        <button
          onClick={() => {
            deleteAllCart();
            updateCart();
          }}
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
};

export default Cart;
