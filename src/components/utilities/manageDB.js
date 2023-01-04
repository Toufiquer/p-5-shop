import { searchProducts } from "./searchProducts";

const getItem = () => {
  let item = localStorage.getItem("shoppingCart");
  if (item) {
    item = JSON.parse(item);
  } else {
    item = {};
  }
  return item;
};
const setItem = (item) => {
  localStorage.setItem("shoppingCart", JSON.stringify(item));
};
const deleteAllCart = () => {
  localStorage.removeItem("shoppingCart");
};
const addToCart = (id) => {
  let cartItem = getItem();
  if (cartItem[id]) {
    cartItem[id] += 1;
  } else {
    cartItem[id] = 1;
  }
  setItem(cartItem);
};

const removeFromCart = (id) => {
  let cartItem = getItem();
  if (cartItem[id] === 1) {
    delete cartItem[id];
  }
  if (cartItem[id] && cartItem[id] > 0) {
    cartItem[id] -= 1;
  }
  setItem(cartItem);
};
const showCart = (products) => {
  let cartItem = getItem();
  const getStoredProducts = searchProducts(cartItem, products);
  return getStoredProducts;
};
export { getItem, addToCart, removeFromCart, deleteAllCart, showCart };
