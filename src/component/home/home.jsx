import React from "react";
import styles from "./home.scss";
import Card from "../card/card";
import Categories from "../../../dataStore/categories.json";
import classnames from "classnames";
import Button from "../button/button";
import { useHistory } from "react-router-dom";
import Baby from "../../images/category/baby.png";
import Beverages from "../../images/category/beverages.png";
import BakeryCakesDairy from "../../images/category/bakery.png";
import Beauty from "../../images/category/Beauty.png";
import Fruit from "../../images/category/fruit-and-veg.png";

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
      <img className={classnames(styles.img)} src={getImage(item.key)} />
    </div>
  );
};

const getImage = key => {
  let dataArray = {
    baby: Baby,
    beverages: Beverages,
    "bakery-cakes-dairy": BakeryCakesDairy,
    "beauty-hygiene": Beauty,
    "fruit-and-veg": Fruit
  };

  return dataArray[key];
};

export default Home;
