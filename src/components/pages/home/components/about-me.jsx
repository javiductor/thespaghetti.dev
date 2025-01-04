import React from "react";
import styles from "./about-me.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInfo}>
          <p className={styles.aboutDescription}>
            From nearly a decade immersed in marketing and design, I recently
            embraced an exhilarating new challenge: web development. What began
            with courses and small projects has evolved into a passionate
            pursuit of coding excellence. While I'm still early in my
            development journey, I've already progressed from wrestling with
            spaghetti code to crafting clean, thoughtful solutions.
            <br />
            <br /> Each day brings new learning opportunities, and I'm amazed by
            how far I've come – already taking on client projects and building
            real-world applications. My background in design and marketing gives
            me a unique perspective, allowing me to create solutions that are
            both technically sound and visually compelling.
          </p>
          <div className={styles.clientList}>
            <ul>
              <li>Web Development</li>
              <li>Web Design</li>
              <li>Branding & Vision</li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutImg}>
          <img
            src="/assets/Javi.webp"
            alt="personal-picture"
            width={480}
            height={480}
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
