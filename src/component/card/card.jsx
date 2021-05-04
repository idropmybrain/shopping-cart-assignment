import React, { Component, Fragment } from "react";
import styles from "./card.scss";
import classnames from "classnames";

const Card = ({ children }) => {
  return <div className={classnames(styles.card, "d-flex")}>{children}</div>;
};

export default Card;
