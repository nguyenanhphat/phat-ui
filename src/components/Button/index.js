import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children }) => {
  return (
    <>
      <button className={styles.root}>{children}</button>
      Build new nhat 1111
    </>
  );
};

export default Button;
