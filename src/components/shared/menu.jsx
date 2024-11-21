import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import { useTheme } from "./theme-context";

const Menu = function () {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.menuContainer} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.logoInfoContainer}>
        <div className={styles.menuLogo}>
          <Link to="/">thespaghetti.dev</Link>
        </div>
        <div className={styles.menuInfo}>
          <p>Front-end development</p>
          <p>Branding & Vision</p>
          <p>Web Designer</p>
        </div>
      </div>
      <nav>
        <ul className={styles.menuList}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/work">work</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
      <button
        className={`${styles.toggleSwitch} ${!isDarkMode && styles.light}`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <div className={styles.toggleCircle}></div>
      </button>
    </div>
  );
};

export default Menu;
