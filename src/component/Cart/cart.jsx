import React, { Fragment } from "react";
import styles from "./cart.scss";
import Button from "../button/button";
import { getImage } from "../utility/util";
import classnames from "classnames";
const Cart = ({ cartItem, setOpenCart, setCartItem }) => {
  return (
    <div>
      <div className={styles.backdrop}></div>

      <div
        className={styles.cart}
        onBlur={() => {
          // setOpenCart(false);
        }}
      >
        {renderCart(cartItem, setOpenCart, setCartItem)}
      </div>
    </div>
  );
};
export default Cart;

const renderCart = (cartItem, setOpenCart, setCartItem) => {
  return (
    <Fragment>
      <div>
        <div className="d-flex justify-content-between">
          <h3 className="p-2">{`My Cart (${Object.keys(cartItem).length})`}</h3>
          <h3 className="p-2" onClick={() => setOpenCart(false)}>
            {"X"}
          </h3>
        </div>
        <div className={styles.scrollableContainer}>
          {Object.keys(cartItem).map(item => (
            <div className={classnames("d-flex p-3")}>
              <img className={styles.imgHolder} src={getImage(item)} />
              <div className=" ms-2 d-flex flex-column">
                <h4>{cartItem[item].name}</h4>
                <div className="d-flex align-items-center justify-content-between">
                  <Button
                    className={classnames(
                      styles.qtyButton,
                      "rounded-circle me-3"
                    )}
                    label="-"
                  />
                  <p className="m-0">{cartItem[item].quantity}</p>
                  <Button
                    className={classnames(
                      styles.qtyButton,
                      "rounded-circle ms-3"
                    )}
                    label="+"
                    onClick={() => {
                      setCartItem({
                        ...cartItem,
                        [item]: {
                          ...cartItem[item],
                          quantity: cartItem[item].quantity + 1
                        }
                      });
                    }}
                  />
                  <p className="m-0"> {`X  Rs ${cartItem[item].price}  `}</p>
                  <p className="m-0">{`Rs ${parseInt(cartItem[item].price) *
                    parseInt(cartItem[item].quantity)}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
