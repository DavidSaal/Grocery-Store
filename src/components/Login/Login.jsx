import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/auth";
import signInImage from "../../images/signin-image.jpg";

import "./Login.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = ({ changeModalType, hideModal }) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(username, password))
        .then(() => {
          hideModal();
          navigate("/profile");
          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  if (isLoggedIn) {
    hideModal();
    navigate("/profile");
  }

  return (
    <div className="mt-5 fade1">
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={signInImage} alt="sing up" />
            </figure>
            <a
              href="#/"
              className="signup-image-link"
              onClick={() => changeModalType("register")}
            >
              Create an account
            </a>
          </div>

          <div className="signin-form">
            <h1 className="form-title">Sign In</h1>
            <Form onSubmit={handleLogin} ref={form}>
              <div className="form-group">
                <label htmlFor="username">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                  autoComplete="on"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                  autoComplete="on"
                />
              </div>
              <div className="form-group form-button">
                <button className="form-submit" disabled={loading}>
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
