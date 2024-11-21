import React from "react";
import styles from "./CaseStudy-Header.module.css";

const CaseStudyHeader = ({
  title,
  description,
  heading,
  services = [],
  imgSrc,
  imgAlt,
  button,
}) => {
  return (
    <div className={styles.HeaderContainer}>
      <div className={styles.HeaderLeft}>
        {title && (
          <div className={styles.HeaderHeading}>
            <h1>{title}</h1>
          </div>
        )}

        <div className={styles.HeaderInfo}>
          {description.length > 0 && (
            <div className={styles.HeaderDescription}>
              {description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          )}
          <div className={styles.HeaderList}>
            {heading && <h4>{heading}</h4>}
            {services.map((service, index) => (
              <div key={index} className={styles.ListItem}>
                <span className={styles.ListItemName}>{service.name}</span>
              </div>
            ))}
          </div>
        </div>
        {button && (
          <a
            href={button}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.Button}
          >
            <span className={styles.Dot}></span>
            Launch Project
          </a>
        )}
      </div>
      {imgSrc && (
        <div className={styles.HeaderRight}>
          <img src={imgSrc} alt={imgAlt} className={styles.HeaderImage} />
        </div>
      )}
    </div>
  );
};

export default CaseStudyHeader;
