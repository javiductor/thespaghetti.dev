import React from "react";
import Service from "/src/components/shared/service";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <Service
        withBorder={true}
        number="01"
        heading="WEB DEVELOPMENT"
        description1="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.
        
        With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant."
        description2="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application."
        services={[
          {
            number: "(01)",
            name: "HTML",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(02)",
            name: "CSS",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Vanilla JavaScript",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(04)",
            name: "React JS",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(05)",
            name: "TypeScript",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
        ]}
      />
      <Service
        withBorder={true}
        number="02"
        heading="BRANDING & VISION"
        description1="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.
        
        With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant."
        description2="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application."
        services={[
          {
            number: "(01)",
            name: "HTML",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(02)",
            name: "CSS",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Vanilla JavaScript",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(04)",
            name: "React JS",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(05)",
            name: "TypeScript",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
        ]}
      />
      <Service
        withBorder={true}
        number="03"
        heading="WEB DESIGN"
        description1="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.
        
        With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant."
        description2="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application."
        services={[
          {
            number: "(01)",
            name: "HTML",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(02)",
            name: "CSS",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Vanilla JavaScript",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(04)",
            name: "React JS",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(05)",
            name: "TypeScript",
            image: "/src/assets/Portfolio/TTHC.webp",
          },
        ]}
      />
    </div>
  );
};

export default Services;
