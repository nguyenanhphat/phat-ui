import React from "react";
import styles from "./styles.module.scss";

const Button = ({ children }) => {
  console.log("process-------:", process.env);
  return (
    <>
      <button className={styles.root}>{children}</button>
    </>
  );
};

export default Button;
