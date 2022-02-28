import React from "react";
import "./ShoppingCartCard.css";

const deleteProductCart = (productId, setBadge) => {
  let shoppingCartProducts = JSON.parse(
    localStorage.getItem("shoppingCartProducts")
  );
  if (shoppingCartProducts) {
    shoppingCartProducts = shoppingCartProducts.filter(
      (product) => productId !== product.id
    );
    localStorage.setItem(
      "shoppingCartProducts",
      JSON.stringify(shoppingCartProducts)
    );
    setBadge(shoppingCartProducts.length);
  }
};

const ShoppingCartCard = (props) => {
  const { product, setBadge, isCheckOut } = props;
  return (
    <div className="list-group-item shadow-sm">
      <div className="d-flex justify-content-between">
        <h5>{product.title}</h5>
        <img
          src={product.image.replace("312x231", "90x90")}
          alt="Product"
        ></img>
      </div>
      <small className="fw-bold fs-6">${(product.id / 10000).toFixed(2)}</small>
      <button
        className="btn trash"
        onClick={() => deleteProductCart(product.id, setBadge)}
        disabled={isCheckOut}
      ></button>
    </div>
  );
};

export default ShoppingCartCard;
