import React from "react";
import { addToCart, removeFromCart } from "../utilities/manageDB";
import "./Product.css";
const Product = ({ updateCart, product: { name, id, img, price, ratings } }) => {
  return (
    <div className="product">
      <img src={img} alt={name} />
      <div className="details">
        <h4>Name: {name}</h4>
        <hr />
        <p>Price: ${price}</p>
        <p>Rating: {ratings}</p>
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            addToCart(id);
            updateCart();
          }}
          className="add"
        >
          Add
        </button>
        <button
          onClick={() => {
            removeFromCart(id);
            updateCart();
          }}
          className="remove"
        >
          Remove{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
