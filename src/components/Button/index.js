import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children }) => {
  console.log("styles----:", styles);
  return (
    <>
      <button className={styles.root}>{children}</button>
      Build new nhat
    </>
  );
};

export default Button;
