import React from "react";
import styles from "./button.scss";
import classnames from "classnames";
const Button = ({ className, label, onClick }) => (
  <button className={classnames(styles.button, className)} onClick={onClick}>
    {label}
  </button>
);

export default Button;
