import React from "react";
import styles from "./button.scss";

const Button = ({ label, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);

export default Button;
