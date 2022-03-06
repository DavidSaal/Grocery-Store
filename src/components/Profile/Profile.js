import React, { useCallback, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/auth";
import EventBus from "../../common/EventBus";
import "./Profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  if (!currentUser) {
    return <Navigate to={process.env.PUBLIC_URL} />;
  }

  return (
    <div>
      <div className="my-account" />
      <div className="content d-flex">
        <nav className="woocommerce-MyAccount-navigation">
          <ul>
            <li className="navigation-link is-active">
              <a href="https://cartsy.redq.io/furniture/my-account/">
                <span className="dashicons dashicons-dashboard"></span> Account
                details{" "}
              </a>
            </li>
            <li className="navigation-link">
              <a href="https://cartsy.redq.io/furniture/my-account/orders/">
                <span className="dashicons dashicons-cart"></span> Orders{" "}
              </a>
            </li>
            <li className="navigation-link">
              <a href="https://cartsy.redq.io/furniture/my-account/edit-address/">
                <span className="dashicons dashicons-admin-users"></span>{" "}
                Addresses{" "}
              </a>
            </li>
            <li className="navigation-link">
              <a
                href="/login"
                className="h6 fs-7 me-4 text-decoration-none text-reset"
                onClick={logOut}
              >
                Logout
              </a>
            </li>
          </ul>
        </nav>
        <div className="container">
          <h3>
            <strong>{currentUser.username}</strong> Profile
          </h3>
          <p>
            <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)}{" "}
            ...{" "}
            {currentUser.accessToken.substr(
              currentUser.accessToken.length - 20
            )}
          </p>
          <p>
            <strong>Id:</strong> {currentUser.id}
          </p>
          <p>
            <strong>Email:</strong> {currentUser.email}
          </p>
          <strong>Authorities:</strong>
          <ul>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
