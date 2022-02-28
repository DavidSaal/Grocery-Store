import React from "react";
import "./Card.css";

const storeProduct = (product, setBadge) => {
  let shoppingCartProducts = JSON.parse(
    localStorage.getItem("shoppingCartProducts")
  );
  if (shoppingCartProducts) {
    shoppingCartProducts.push(product);
    localStorage.setItem(
      "shoppingCartProducts",
      JSON.stringify(shoppingCartProducts)
    );
    setBadge(shoppingCartProducts.length);
  } else {
    localStorage.setItem("shoppingCartProducts", JSON.stringify([product]));
    setBadge(1);
  }
};

const Card = (props) => {
  const { name, price, product, setBadge } = props;
  return (
    <div className="card p-2 h-100">
      <div className="card-body text-center mb-4">
        <img src={props.image} alt="Product"></img>
        <h5 className="card-title pt-5 text-left">${price}</h5>
        <p className="card-text text-secondary">{name}</p>
        <button
          className="btn p-0"
          onClick={() => storeProduct(product, setBadge)}
        >
          <div className="input-group">
            <div className="btn btn-sm btn-add">Add to cart</div>
            <div className="btn btn-sm btn-plus plus"></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
