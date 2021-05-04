import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Button from "../button/button";

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
            {Object.keys(cartItem).length}
          </div>
        )}
        {openCart && (
          <div>
            <div className={styles.openCart}>{renderCart(cartItem)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

const renderCart = cartItem => {
  return (
    <div>
      <h3>{`My Cart (${Object.keys(cartItem).length})`}</h3>
      <div>
        {Object.keys(cartItem).map(item => (
          <div className="d-flex">
            <img
              className={styles.imgHolder}
              src={cartItem[item].imageURL}
              alt="no image"
            />
            <div className="d-flex flex-column">
              <h4>{cartItem[item].name}</h4>
              <div className="d-flex">
                <Button label="+" />
                <p>{cartItem[item].quantity}</p>
                <Button label="-" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
