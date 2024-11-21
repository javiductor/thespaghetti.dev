import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerInfo}>
          <p className={styles.footerLogo}>thespaghetti.dev</p>
          <div className={styles.footerLinks}>
            <div className={styles.footerList}>
              <p>Front-end Developer</p>
              <p>Branding & Vision</p>
              <p>Web Design</p>
            </div>
            <div className={styles.footerMenu}>
              <a href="/">home</a>
              <a href="/work">work</a>
              <a href="/about">about</a>
              <a href="/blog">blog</a>
            </div>
          </div>
        </div>
        <div className={styles.footerForm}></div>
      </div>
    </>
  );
};

export default Footer;
