import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Store from "./components/Store";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";

import Header from "./components/Header";

const App = () => {
  const [badge, setBadge] = useState(
    JSON.parse(localStorage.getItem("shoppingCartProducts"))?.length || 0
  );
  const [menu, setMenu] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  return (
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Header
        badge={badge}
        setBadge={setBadge}
        setMenu={() => setMenu(!menu)}
      />
      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="/user" element={<BoardUser />} />
        <Route path="/mod" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />
      </Routes>
      {/* <AuthVerify logOut={logOut}/> */}
    </Router>
  );
};

export default App;
