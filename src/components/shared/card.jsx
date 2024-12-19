import React from "react";
import styles from "./card.module.css";
import "/src/index.css";
import { ArrowRight } from "lucide-react";
import classNames from "classnames";

const Card = ({
  thumbImageSrc,
  category = [],
  altDescription,
  heading,
  link,
  showArrow = true,
  showHeadingMargin = true,
  imageWidth = 556,
  imageHeight = 417,
  isFirstImage = false,
}) => {
  const containerClassName = classNames(styles.cardContainer, {
    [styles.headingMarginAnimation]: showHeadingMargin,
  });

  return (
    <a href={link} className={containerClassName}>
      {thumbImageSrc && (
        <img
          className={styles.cardImg}
          src={thumbImageSrc}
          alt={altDescription}
          width={imageWidth}
          height={imageHeight}
          fetchpriority={isFirstImage ? "high" : "auto"}
        />
      )}
      <div className={styles.categoryContainer}>
        {category.length > 0 &&
          category.map((item, index) => (
            <div key={index} className={styles.categoryItem}>
              <h5 className={styles.categoryItemName}>{item}</h5>
            </div>
          ))}
      </div>
      <div className={styles.headingContainer}>
        {showArrow && (
          <span className={styles.arrowIcon}>
            <ArrowRight />
          </span>
        )}
        {heading && <h3 className={styles.cardHeading}>{heading}</h3>}
      </div>
    </a>
  );
};

export default Card;
