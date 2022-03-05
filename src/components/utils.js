export const getProducts =
  JSON.parse(localStorage.getItem("shoppingCartProducts")) || [];

export const setProducts = (product, setBadge) => {
  const products = getProducts;
  products.push(product);
  localStorage.setItem("shoppingCartProducts", JSON.stringify(products));
  setBadge(products.length);
};
