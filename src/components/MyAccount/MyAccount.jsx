import React from "react";
import { usersDB } from "../../services/axiosService";
import * as S from "./style";
import "./style.css";
import signUpImage from "../../images/signup-image.jpg";
import signInImage from "../../images/signin-image.jpg";

function click(event) {
  document.getElementById("login-form").classList.toggle("d-none");
  document.getElementById("register-form").classList.toggle("d-none");
  event.preventDefault();
}

const user = {
  name: "asdsadasd1",
  email: "asdsad@gmail.com",
  password: "12312123",
};

const createUser = (event) => {
  event.preventDefault();
  usersDB.post("/users", user).then(
    (response) => {
      console.log("Success: ", response);
    },
    (error) => {
      console.log(error);
    }
  );
};

const loginUser = (event) => {
  event.preventDefault();
  usersDB.post("/users/login", user).then(
    (response) => {
      console.log("Success: ", response);
    },
    (error) => {
      console.log(error);
    }
  );
};

const MyAccount = () => {
  return (
    <S.MyAccount>
      <div id="demo-modal1" className="modal">
        <section className="signup d-none" id="register-form">
          <div className="container">
            <a type="button" className="btn-close" href="#"></a>
            <div className="signup-content">
              <div className="signup-form">
                <h1 className="form-title fw-bold">Sign up</h1>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      autoComplete="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="pass"
                      id="pass"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="re-pass">
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="re_pass"
                      id="re_pass"
                      placeholder="Repeat your password"
                      autoComplete="repeat-password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label htmlFor="agree-term" className="label-agree-term">
                      <span></span>I agree all statements in{" "}
                      <a href="window.location" className="term-service">
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="form-submit"
                      value="Register"
                      onClick={createUser}
                    />
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={signUpImage} alt="sing up" />
                </figure>
                <a
                  href="window.location"
                  className="signup-image-link"
                  onClick={click}
                >
                  I am already member
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sign-in" id="login-form">
          <div className="container">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src={signInImage} alt="sing up" />
                </figure>
                <a
                  href="window.location"
                  className="signup-image-link"
                  onClick={click}
                >
                  Create an account
                </a>
              </div>

              <div className="signin-form">
                <h1 className="form-title">Sign In</h1>
                <form method="POST" className="register-form" id="login-form">
                  <div className="form-group">
                    <label htmlFor="your_name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="your_name"
                      id="your_name"
                      placeholder="Your Name"
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="your_pass">
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="your_pass"
                      id="your_pass"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label htmlFor="remember-me" className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit"
                      value="Log in"
                      onClick={loginUser}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </S.MyAccount>
  );
};

export default MyAccount;
