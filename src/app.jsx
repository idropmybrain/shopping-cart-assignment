import React, { Component, Fragment, useState } from "react";
// import Button from "./component/button/button";
// import styles from "./styles/main.scss";
// import FancyButton from "./component/fancy-button/fancy-button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./component/Header/header";
import Home from "./component/home/home";
import Products from "./component/products/products";

export default function App() {
  const [cartItem, setCartItem] = useState({});

  return (
    <Router>
      <div>
        <nav>
          <Header setCartItem={setCartItem} cartItem={cartItem} />
        </nav>
        <Switch>
          <Route path="/category">
            <Products setCartItem={setCartItem} cartItem={cartItem} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
