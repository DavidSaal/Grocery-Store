import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartCard from "../ShoppingCartCard";
import "./ShoppingCart.css";

const ShoppingCart = ({ hideModal, setBadge }) => {
  let shoppingCartProducts = JSON.parse(
    localStorage.getItem("shoppingCartProducts")
  );

  const navigate = useNavigate();
  const [isCheckOut, setIsCheckOut] = useState(false);

  const handleCheckOut = () => {
    setIsCheckOut(true);
    setTimeout(() => {
      setIsCheckOut(false);
      hideModal();
      navigate("/profile");
    }, 5000);
  };

  return (
    <div
      className="modal-dialog modal-dialog-scrollable fade1"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title fs-4" id="exampleModalLabel">
            Your Shopping Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={hideModal}
            disabled={isCheckOut}
          ></button>
        </div>
        <div className="modal-body list-group">
          {shoppingCartProducts?.map((product, index) => (
            <ShoppingCartCard
              key={index}
              product={product}
              setBadge={setBadge}
              isCheckOut={isCheckOut}
            />
          ))}
        </div>
        <div className="modal-footer justify-content-center">
          <button
            type="button"
            className="btn btn-light w-100 shadow-sm border fs-4 checkout"
            disabled={isCheckOut}
            onClick={handleCheckOut}
          >
            Checkout <i className="creditCard"></i>
          </button>
        </div>
        {isCheckOut && (
          <div class="payment-no-refresh pb-4">
            <div class="payment-loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h4>Processing</h4>
            <p>Please do not press 'Back' or 'Refresh' button.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
