import React from "react";
import styles from "./home.scss";
import Card from "../card/card";
import Categories from "../../../dataStore/categories.json";
import classnames from "classnames";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
var history = null;
const Home = () => {
  history = useHistory();
  return (
    <div className="container">
      {Categories.filter(item => item.enabled && item).map((item, index) => {
        return <Card data={item}>{designHome(item, index % 2 === 0)}</Card>;
      })}
    </div>
  );
};

const designHome = (item, direction) => {
  console.log("item: ", item);
  return (
    <div
      className={classnames("d-flex justify-content-between ", styles["w-100"])}
    >
      {direction ? renderImage(item) : null}
      {renderDetails(item)}
      {!direction ? renderImage(item) : null}
    </div>
  );
};

const renderDetails = item => {
  return (
    <div className={styles.details}>
      <h2 className="fw-bold">{item.name}</h2>
      <h5 className="fw-bold">{item.description}</h5>
      <Button
        label={`Explore ${item.key}`}
        onClick={() => {
          history.push(`/category?search=${item.id}`);
        }}
      />
    </div>
  );
};

const renderImage = item => {
  return (
    <div>
      <img className={classnames(styles.img)} src={item.imageUrl} />
    </div>
  );
};

export default Home;
