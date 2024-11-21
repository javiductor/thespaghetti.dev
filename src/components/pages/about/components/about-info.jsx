import React from "react";
import Service from "/src/components/shared/service";
import styles from "../../home/components/services.module.css";

const AboutInfo = () => {
  return (
    <div className={styles.servicesContainer}>
      <Service
        description1="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.
        
        With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant."
        description2="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application."
        heading2="Client Collaborations"
        services={[
          {
            number: "(01)",
            name: "Henley Spanish Centre",
            image: "/src/assets/Portfolio/TTHC.webp",
            position: { top: "100", left: "300" },
          },
          {
            number: "(02)",
            name: "mrp",
            image: "/src/assets/Portfolio/enferm.webp",
            position: { top: "200", left: "500" },
          },
          {
            number: "(03)",
            name: "Torres Heights",
            image: "/src/assets/Portfolio/mrp.webp",
            position: { top: "300", left: "700" },
          },
          {
            number: "(04)",
            name: "enferm.io",
            image: "/src/assets/Portfolio/NovaFlip.webp",
            position: { top: "400", left: "200" },
          },
          {
            number: "(05)",
            name: "NovaFlip",
            image: "/src/assets/Portfolio/TTHC.webp",
            position: { top: "500", left: "400" },
          },
        ]}
        heading3="Toolbox"
        tools={[
          { name: "HTML" },
          { name: "CSS" },
          { name: "Vanilla JavaScript" },
          { name: "React JS" },
          { name: "Next JS" },
          { name: "InDesign" },
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
