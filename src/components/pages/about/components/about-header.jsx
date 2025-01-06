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
          <a href="/assets/CV/cv.pdf" download>
            <button className={styles.mainBtn}>
              <span className={styles.circle}></span>
              Download Resume
            </button>
          </a>
        </div>
        <div className={styles.headerRight}>
          <img src="/assets/Javi.webp" alt="personal-headshot" />
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
