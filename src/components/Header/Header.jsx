import React, { useState, useCallback, useEffect } from "react";
import MyAccount from "../MyAccount";
import Modal from "../Modal";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/auth";
import EventBus from "../../common/EventBus";
import { useLocation } from "react-router-dom";

const Header = (props) => {
  const { badge, setBadge, setMenu } = props;
  const { user: currentUser } = useSelector((state) => state.auth);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [modal, setModal] = useState({ show: false });
  const [login, setLogin] = useState(false);

  const location = useLocation();

  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  const changeModalType = (modalType) =>
    setModal({ show: true, type: modalType });

  const hideModal = () => setModal({ show: false });

  return (
    <div>
      {modal.show && (
        <Modal
          modalType={modal.type}
          changeModalType={changeModalType}
          hideModal={hideModal}
        />
      )}
      <nav className="navbar shadow-sm p-3 border-bottom">
        <div className="container-fluid">
          <div className="d-inline-flex">
            <div className="menu mt-2 ms-2" onClick={() => setMenu()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p className="display-6 ms-4 mt-3 text-dark">Grocery Store</p>
            <p className="display-6 ms-2 fs-6 text-dark mt-4">By David Saal</p>
          </div>
          <div className="d-flex">
            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
            {currentUser ? (
              <div>
                <Link
                  to={"/profile"}
                  className="h6 fs-7 me-4 text-decoration-none text-reset"
                >
                  {currentUser.username}
                </Link>
                <a
                  href="/"
                  className="h6 fs-7 me-4 text-decoration-none text-reset"
                  onClick={logOut}
                >
                  Logout
                </a>
              </div>
            ) : (
              <div>
                <a
                  href="#/"
                  className="h6 fs-7 me-4 text-decoration-none text-reset"
                  onClick={() => changeModalType("login")}
                >
                  Login
                </a>
              </div>
            )}
            {location.pathname === "/" ? (
              <button
                className="btn shoppingCart"
                onClick={() => changeModalType("shoppingCart")}
              >
                <div className="badge-notification rounded-pill bg-danger">
                  {badge}
                </div>
              </button>
            ) : (
              <Link to={"/"} className="btn store" />
            )}
          </div>
        </div>
      </nav>
      <MyAccount />
    </div>
  );
};

export default Header;
