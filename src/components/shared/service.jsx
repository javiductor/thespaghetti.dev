import React, { useState } from "react";
import styles from "./service.module.css";

const Service = ({
  number,
  heading,
  description1,
  description2,
  heading2,
  services = [],
  heading3,
  tools = [],
  withBorder = false,
}) => {
  const [hovered, setHovered] = useState({
    image: null,
    position: { top: 0, left: 0 },
  });

  const handleMouseEnter = (service, event) => {
    const { clientX, clientY } = event;
    const containerRect = event.currentTarget.getBoundingClientRect();

    setHovered({
      image: service.image,
      position: {
        top: containerRect.top + window.scrollY,
        left: containerRect.left + containerRect.width / 2,
      },
    });
  };

  const handleMouseLeave = () => {
    setHovered({ image: null, position: { top: 0, left: 0 } });
  };

  return (
    <div
      className={`${styles.serviceContainer} ${
        withBorder ? styles.withBorder : ""
      }`}
    >
      <div className={styles.serviceNumber}>{number && <p>{number}</p>}</div>
      <div className={styles.serviceInfo}>
        <div className={styles.serviceHeading}>
          {heading && <h2>{heading}</h2>}
        </div>
        <div className={styles.serviceDescription}>
          {description1 && <p>{description1}</p>}
          {description2 && <p>{description2}</p>}
        </div>
        <div className={styles.serviceHeading2}>
          {heading2 && <h3>{heading2}</h3>}
        </div>
        <div className={styles.serviceList}>
          {services.length > 0 &&
            services.map((service, index) => (
              <div
                key={index}
                className={styles.serviceItem}
                onMouseEnter={(event) => handleMouseEnter(service, event)}
                onMouseLeave={handleMouseLeave}
              >
                <span className={styles.serviceItemNumber}>
                  {service.number}
                </span>
                <span className={styles.serviceItemName}>{service.name}</span>
              </div>
            ))}
        </div>
        {hovered.image && (
          <div
            className={styles.hoveredImageContainer}
            style={{
              top: hovered.position.top,
              left: hovered.position.left,
              position: "absolute",
            }}
          >
            <img
              src={hovered.image}
              alt="Service preview"
              className={styles.hoveredImage}
            />
          </div>
        )}
        <div className={styles.serviceHeading3}>
          {heading3 && <h3>{heading3}</h3>}
        </div>
        <div className={styles.toolsList}>
          {tools.length > 0 &&
            tools.map((tool, index) => (
              <div key={index} className={styles.toolItem}>
                <span className={styles.toolItemName}>{tool.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
