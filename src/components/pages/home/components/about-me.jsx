import React from "react";
import styles from "./about-me.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutDescription}>
            Most of my designs are not just about aesthetics, but about
            developing logical, scalable design systems that are precisely
            tailored to the web and app application. With a strong focus on UI
            design and systemic design, I aim to create elements and modules
            that are responsive, flexible and above all functional and
            performant.
          </p>
          <h3 className={styles.aboutHeading}>Client Collabortations</h3>
          <div className={styles.clientList}>
            <ul>
              <li>Henley Spanish Centre</li>
              <li>mrp</li>
              <li>Torres Heights</li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutImg}>
          <img src="/assets/Javi.webp" alt="personal-picture" />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
