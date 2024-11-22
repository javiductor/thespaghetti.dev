import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import { useTheme } from "./theme-context";

const Menu = function () {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
  }, [isOpen]);

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
      <nav className={`${styles.navigation} ${isOpen ? styles.navOpen : ""}`}>
        <ul className={`${styles.menuList} ${isOpen ? styles.menuOpen : ""}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              home
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={() => setIsOpen(false)}>
              work
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              about
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              contact
            </Link>
          </li>
          <li className={styles.toggleItem}>
            <button
              className={`${styles.toggleSwitch} ${
                !isDarkMode && styles.light
              }`}
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <div className={styles.toggleCircle}></div>
            </button>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.burgerMenu} ${isOpen ? styles.open : ""}`}
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        <div className={styles.burgerContainer}>
          <span className={`${styles.burgerBar} ${styles.topBar}`}></span>
          <span className={`${styles.burgerBar} ${styles.middleBar}`}></span>
          <span className={`${styles.burgerBar} ${styles.bottomBar}`}></span>
        </div>
      </button>
    </div>
  );
};

export default Menu;
