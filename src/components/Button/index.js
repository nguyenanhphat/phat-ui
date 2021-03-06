import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children }) => {
  return (
    <>
      <button className={styles.root}>{children}</button>
    </>
  );
};

export default Button;
