import React, { useState, useEffect } from "react";
import styles from "./home-header.module.css";

function HomeHeader() {
  const [hovered, setHovered] = useState({
    images: [],
    currentIndex: 0,
    position: { top: 0, left: 0 },
  });
  const [intervalId, setIntervalId] = useState(null);

  // Function for handling mouse enter on the "exciting projects" link
  const handleMouseEnterExcitingProjects = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const images = [
      "/src/assets/Portfolio/TTHC/TTHC-1.webp",
      "/src/assets/Portfolio/mrp/mrp-1.webp",
      "/src/assets/Portfolio/TTHC/TTHC-2.webp",
      "/src/assets/Portfolio/mrp/mrp-2.webp",
      "/src/assets/Portfolio/mrp/mrp-3.webp",
      "/src/assets/Portfolio/HSC/hsc-1.webp",
      "/src/assets/Portfolio/HSC/hsc-2.webp",
    ];

    setHovered({
      images,
      currentIndex: 0,
      position: {
        top: containerRect.top + window.scrollY - 280,
        left: containerRect.left + containerRect.width / 2,
      },
    });

    const id = setInterval(() => {
      setHovered((prev) => ({
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      }));
    }, 250);
    setIntervalId(id);
  };

  // Function for handling mouse enter on the "spaghetti code" link
  const handleMouseEnterSpaghettiCode = (event) => {
    const containerRect = event.currentTarget.getBoundingClientRect();
    const images = [
      "/src/assets/spaghetti/code-1.png",
      "/src/assets/spaghetti/code-2.png",
    ];

    setHovered({
      images,
      currentIndex: 0,
      position: {
        top: containerRect.top + window.scrollY - 280,
        left: containerRect.left + containerRect.width / 2,
      },
    });

    const id = setInterval(() => {
      setHovered((prev) => ({
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      }));
    }, 250);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    setHovered({ images: [], currentIndex: 0, position: { top: 0, left: 0 } });
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <>
      <div className="App">
        <div className={styles.headerContainer}>
          <h1>
            Hi there, my name is Javier!
            <br /> Join me on my journey from{" "}
            <a
              href="/blog"
              className={styles.headerLink}
              onMouseEnter={handleMouseEnterSpaghettiCode}
              onMouseLeave={handleMouseLeave}
            >
              spaghetti code
            </a>
            <br />
            to mastering front-end development, as I <br />
            tackle{" "}
            <a
              href="/work"
              className={styles.headerLink}
              onMouseEnter={handleMouseEnterExcitingProjects}
              onMouseLeave={handleMouseLeave}
            >
              exciting projects
            </a>{" "}
            along the way.
          </h1>
        </div>
        {hovered.images.length > 0 && (
          <div
            className={styles.imageContainer}
            style={{
              top: hovered.position.top,
              left: hovered.position.left,
              position: "absolute",
            }}
          >
            <img
              src={hovered.images[hovered.currentIndex]}
              alt="Exciting project or spaghetti code"
              className={styles.hoveredImage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default HomeHeader;
