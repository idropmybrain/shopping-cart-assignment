import React from "react";
import styles from "./cart.scss";
import Button from "../button/button";
import { getImage } from "../utility/util";

const Cart = ({ cartItem }) => {
  return (
    <div>
      <div
        className={styles.cart}
        onBlur={() => {
          setOpenCart(false);
        }}
      >
        {renderCart(cartItem)}
      </div>
    </div>
  );
};
export default Cart;

const renderCart = cartItem => {
  return (
    <div>
      <h3>{`My Cart (${Object.keys(cartItem).length})`}</h3>
      <div>
        {Object.keys(cartItem).map(item => (
          <div className="d-flex p-3">
            <img className={styles.imgHolder} src={getImage(item)} />
            <div className=" ms-2 d-flex flex-column">
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
