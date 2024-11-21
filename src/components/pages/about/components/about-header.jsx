import React from "react";
import styles from "./about-header.module.css";

const AboutHeader = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <h1>
            My name is Javier!
            <br /> A front-end developer <br />
            and digital designer.
          </h1>
          <button className={styles.mainBtn}>
            <span className={styles.circle}></span>
            Download Resume
          </button>{" "}
        </div>
        <div className={styles.headerRight}>
          <img src="/src/assets/Javi.webp" alt="personal-headshot" />
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
