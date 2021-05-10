import React from "react";
import styles from "./cart.scss";
import Button from "../button/button";
import { getImage } from "../utility/util";
import classnames from "classnames";
const Cart = ({ cartItem, setOpenCart }) => {
  return (
    <div>
      <div
        className={styles.cart}
        onBlur={() => {
          // setOpenCart(false);
        }}
      >
        {renderCart(cartItem, setOpenCart)}
      </div>
    </div>
  );
};
export default Cart;

const renderCart = (cartItem, setOpenCart) => {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <h3 className="p-2">{`My Cart (${Object.keys(cartItem).length})`}</h3>
        <h3 className="p-2" onClick={() => setOpenCart(false)}>
          {"X"}
        </h3>
      </div>
      <div>
        {Object.keys(cartItem).map(item => (
          <div className="d-flex p-3">
            <img className={styles.imgHolder} src={getImage(item)} />
            <div className=" ms-2 d-flex flex-column">
              <h4>{cartItem[item].name}</h4>
              <div className="d-flex align-items-center">
                <Button
                  className={classnames(
                    styles.qtyButton,
                    "rounded-circle me-3"
                  )}
                  label="+"
                />
                <p>{cartItem[item].quantity}</p>
                <Button
                  className={classnames(
                    styles.qtyButton,
                    "rounded-circle ms-3"
                  )}
                  label="-"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
