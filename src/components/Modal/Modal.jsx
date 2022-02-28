import React from "react";
import "./Modal.css";
import ShoppingCart from "../ShoppingCart";
import Login from "../Login";
import Register from "../Register";

const Modal = ({ modalType, changeModalType, hideModal }) => {
  return (
    <div className="modal1" onClick={hideModal}>
      {(() => {
        switch (modalType) {
          case "shoppingCart":
            return <ShoppingCart hideModal={hideModal} />;
          case "login":
            return (
              <Login changeModalType={changeModalType} hideModal={hideModal} />
            );
          case "register":
            return (
              <Register
                changeModalType={changeModalType}
                hideModal={hideModal}
              />
            );
          default:
        }
      })()}
    </div>
  );
};

export default Modal;
