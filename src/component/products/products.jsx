import React, { Fragment } from "react";
import styles from "./products.scss";
import Button from "../button/button";
import classnames from "classnames";
import ProductsData from "../../../dataStore/products.json";
import Categories from "../../../dataStore/categories.json";
import { useHistory, useLocation } from "react-router-dom";
let query = null;
const Products = ({ cartItem, setCartItem }) => {
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  query = useQuery();
  let searchString = query.get("search");
  console.log(searchString);
  return (
    <div className={classnames(styles.productContainer)}>
      <div
        className={classnames(styles.productScroll, "container fluid d-flex")}
      >
        <div
          className={classnames(styles.categorySection, "d-flex flex-column")}
        >
          <div className={classnames(styles.stickey)}>
            {Categories.filter(item => item.enabled && item).map(item => (
              <Fragment>
                <p
                  className="px-3 fw-bold mb-0 "
                  onClick={() => history.push(`category?search=${item.id}`)}
                >
                  {item.name}
                </p>
                <hr />
              </Fragment>
            ))}
          </div>
        </div>

        <div className={classnames(styles.productSection, "d-flex flex-wrap")}>
          {ProductsData.filter(item =>
            searchString !== null
              ? item.category === searchString && item
              : item
          ).map(item => renderProducts(item, cartItem, setCartItem))}
        </div>
      </div>
    </div>
  );
};

const renderProducts = (item, cartItem, setCartItem) => {
  return (
    <div className={classnames(styles.product, "m-2 ")}>
      <h5 className="fw-bold p-2">{item.name}</h5>
      <div>
        <img className={styles.productImg} src={item.imageURL} />
        <p className={classnames(styles.productDescription, "fw-bold m-2 p-2")}>
          {item.description}
        </p>
        <div className="px-2 mb-2 d-flex justify-content-between align-items-center">
          <h4 className="m-0">{`MRP Rs.${item.price}`}</h4>
          <Button
            label={"Buy Now"}
            onClick={() => {
              setCartItem(
                cartItem.hasOwnProperty(item.id)
                  ? {
                      ...cartItem,
                      [item.id]: {
                        ...item,
                        quantity: cartItem[item.id].quantity + 1
                      }
                    }
                  : { ...cartItem, [item.id]: { ...item, quantity: 1 } }
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
