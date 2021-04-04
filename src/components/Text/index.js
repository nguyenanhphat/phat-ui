import React from "react";
import styles from "./styles.module.scss";

const Text = ({ children }) => {
  return (
    <>
      <div className={styles.root}>{children}</div>
    </>
  );
};

export default Text;
