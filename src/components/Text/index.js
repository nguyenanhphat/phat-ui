import React from "react";
import { Button } from "phat-test";
import styles from "./styles.module.scss";
const Text = ({ children }) => {
  return (
    <>
      <div className={styles.root}>{children}</div>
      <Button>Test button sss</Button>
    </>
  );
};

export default Text;
