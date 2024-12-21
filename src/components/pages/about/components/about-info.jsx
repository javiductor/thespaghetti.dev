import React from "react";
import Service from "/src/components/shared/service";
import styles from "../../../shared/service.module.css";

const AboutInfo = () => {
  return (
    <div className={styles.servicesContainer}>
      <Service
        description1="After a decade immersed in marketing and digital design, I felt drawn to explore the world of web development. Early 2024 marked the beginning of this journey – starting with CSS and JavaScript fundamentals before discovering my true passion in React JS."
        description2="This blend of marketing insight, design thinking, and development skills gives me a unique perspective on digital projects. I understand not just how to build solutions, but why they matter – crafting experiences that serve real purpose from initial concept through to final execution."
        services={[
          {
            number: "(01)",
            name: "Henley Spanish Centre",
            image: "/assets/Portfolio/TTHC.webp",
            position: { top: "100", left: "300" },
          },
          {
            number: "(02)",
            name: "mrp",
            image: "/assets/Portfolio/enferm.webp",
            position: { top: "200", left: "500" },
          },
          {
            number: "(03)",
            name: "Torres Heights",
            image: "/assets/Portfolio/mrp.webp",
            position: { top: "300", left: "700" },
          },
          {
            number: "(04)",
            name: "enferm.io",
            image: "/assets/Portfolio/NovaFlip.webp",
            position: { top: "400", left: "200" },
          },
          {
            number: "(05)",
            name: "NovaFlip",
            image: "/assets/Portfolio/TTHC.webp",
            position: { top: "500", left: "400" },
          },
        ]}
        heading3="Toolbox"
        tools={[
          { name: "HTML" },
          { name: "CSS" },
          { name: "Vanilla JavaScript" },
          { name: "React JS" },
          { name: "TypeScript" },
          { name: "SEO" },
          { name: "DIVI Builder" },
          { name: "Adobe XD" },
          { name: "Adobe Illustrator" },
          { name: "Adobe Photoshop" },
          { name: "Adobe InDesign" },
        ]}
      />
    </div>
  );
};

export default AboutInfo;
