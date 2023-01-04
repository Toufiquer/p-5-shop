const searchProducts = (ids, allProducts) => {
  let allStoredProducts = [];
  if (allProducts.length > 1) {
    for (let curr in ids) {
      let item = allProducts.find((item) => item.id === curr);
      item.quantity = ids[curr];
      allStoredProducts.push(item);
    }
  }
  return allStoredProducts;
};

export { searchProducts };
