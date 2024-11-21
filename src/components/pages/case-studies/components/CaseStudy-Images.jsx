import React from "react";
import styles from "./CaseStudy-Images.module.css";

const ImageContentBlock = ({ imgData }) => {
  return (
    <>
      <div className={styles.ImageContainer}>
        <div className={styles.row}>
          {imgData.slice(0, 2).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={styles.CaseStudyImg}
            />
          ))}
        </div>
        <div className={styles.row}>
          {imgData.slice(2).map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={styles.CaseStudyImg}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageContentBlock;
