import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Button from "../button/button";
import CartIcon from "../../images/cart.svg";
import Cart from "../Cart/cart";

import classnames from "classnames";
import styles from "./header.scss";

import { useState } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("authToken") ? (
        <Component {...rest} />
      ) : (
        <Redirect to="/register" />
      )
    }
  />
);

export default function Header({ cartItem, setCartItem }) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(
    localStorage.getItem("authToken") || false
  );

  const [openCart, setOpenCart] = useState(false);

  const logout = () => {
    localStorage.removeItem("authToken");
    setIsUserLoggedIn(false);
  };

  return (
    <div className={styles.shadow}>
      <div className="d-flex flex-row navigation-bar justify-content-between">
        <div className="d-flex">
          <div className="p-3 ">
            <Link to="/" className="links text-dark">
              Home
            </Link>
          </div>
          <div className="p-3">
            <Link to="/category" className="links text-dark">
              Products
            </Link>
          </div>
        </div>
        {!openCart && (
          <div
            className="rounded-circle me-3 d-flex align-items-center bg-gray"
            onClick={() => {
              setOpenCart(!openCart);
            }}
          >
            <img src={CartIcon} style={{ height: "40px", width: "40px" }} />
            {Object.keys(cartItem).length > 0 &&
              `${Object.keys(cartItem).length} item${
                Object.keys(cartItem).length > 1 ? "s" : ""
              }`}
          </div>
        )}
        {openCart && (
          <Cart
            cartItem={cartItem}
            setOpenCart={setOpenCart}
            setCartItem={setCartItem}
          />
        )}
      </div>
    </div>
  );
}
