import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./SmoothScroll.module.css";

const SmoothScroll = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  useLayoutEffect(() => {
    if (scrollRef.current) {
      setScrollRange(scrollRef.current.scrollWidth);
    }
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    if (ghostRef.current) {
      resizeObserver.observe(ghostRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();
  const transform = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <div className={styles.scrollContainer}>
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className={styles.contentContainer}
        >
          <div className={styles.section}>
            <div className={styles.heroContent}>
              <h1 className={styles.title}>Henley Spanish Centre</h1>
              <div className={styles.info}>
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>
                    Most of my designs are not just about aesthetics, but about
                    developing logical, scalable design systems that are
                    precisely tailored to the web and app application. <br />
                    <br />
                    With a strong focus on UI design and systemic design, I aim
                    to create elements and modules that are responsive, flexible
                    and above all functional and performant.
                  </p>
                  <button>View Project</button>
                </div>
                <div className={styles.servicesContainer}>
                  <h4>Services</h4>
                  <p>React JS</p>
                  <p>JSX</p>
                  <p> Headerless CMS</p>
                  <p>CSS</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <img
                src="/assets/Portfolio/TTHC.webp"
                alt="Website mockup"
                className={styles.laptopImage}
              />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.imageContainer}>
              <img
                src="/assets/Portfolio/TTHC.webp"
                alt="Website mockup"
                className={styles.laptopImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>About the project</h2>
              <p className={styles.description}>
                With a strong focus on UI design and systemic design, I aim to
                create elements and modules that are responsive, flexible and
                above all functional and performant.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className={styles.ghost}
      />
    </>
  );
};

export default SmoothScroll;
