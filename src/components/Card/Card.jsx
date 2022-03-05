import React from "react";
import "./Card.css";
import { setProducts } from "../utils";

const Card = ({ name, price, product, image, setBadge }) => {
  return (
    <div className="card p-2 h-100">
      <div className="card-body text-center mb-4">
        <img src={image} alt="Product"></img>
        <h5 className="card-title pt-5 text-left">${price}</h5>
        <p className="card-text text-secondary">{name}</p>
        <button
          className="btn p-0"
          onClick={() => setProducts(product, setBadge)}
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
