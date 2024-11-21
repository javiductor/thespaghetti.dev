import React from "react";
import styles from "./divider.module.css";

const Divider = ({ header }) => {
  return (
    <>
      <div className={styles.dividerContainer}>
        {header && <h4 className={styles.dividerHeading}>{header}</h4>}
        <div className={styles.dividerLine}></div>
      </div>
    </>
  );
};

export default Divider;
