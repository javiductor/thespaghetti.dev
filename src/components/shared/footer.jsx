import React from "react";
import styles from "./footer.module.css";
import SocialMediaIcons from "./social-media-icons";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:javi@theatomlab.co.uk";
  };

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerInfo}>
        <p className={styles.footerLogo}>thespaghetti.dev</p>
        <div className={styles.footerContactInfo}>
          <a href="mailto:javi@theatomlab.co.uk">javi@theatomlab.co.uk</a>
          <a href="tel:07495477305">07495477305</a>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerMenu}>
            <a href="/">home</a>
            <a href="/work">work</a>
            <a href="/about">about</a>
            <a href="/blog">blog</a>
          </div>
        </div>
      </div>
      <div className={styles.footerRight}>
        <h3>Looking for a front-end developer?</h3>
        <button onClick={handleEmailClick} className={styles.btnCTA}>
          Let's Talk!
        </button>
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Footer;
