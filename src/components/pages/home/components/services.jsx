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
        description1="I specialise in building high-performance website with component based architectures. My development approach prioritises clean code and efficient functionality without compromising on the beautiful design."
        description2="I create responsive solutions that can handle complex logic while still maintaining fast load times and seamless user interactions. "
        services={[
          {
            number: "(01)",
            name: "HTML",
            image: "/assets/Portfolio/TTHC.webp",
          },

          {
            number: "(02)",
            name: "CSS",
            image: "/assets/Portfolio/enferm.webp",
          },
          {
            number: "(03)",
            name: "Vanilla JavaScript",
            image: "/assets/Portfolio/mrp.webp",
          },
          {
            number: "(04)",
            name: "React JS",
            image: "/assets/Portfolio/Novaflip.webp",
          },
          {
            number: "(05)",
            name: "TypeScript",
            image: "/assets/Portfolio/TTHC.webp",
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
            image: "/assets/Portfolio/enferm.webp",
          },

          {
            number: "(02)",
            name: "CSS",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Vanilla JavaScript",
            image: "/assets/Portfolio/mrp.webp",
          },
          {
            number: "(04)",
            name: "React JS",
            image: "/assets/Portfolio/Novaflip.webp",
          },
          {
            number: "(05)",
            name: "TypeScript",
            image: "/assets/Portfolio/TTHC.webp",
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
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(02)",
            name: "CSS",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Vanilla JavaScript",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(04)",
            name: "React JS",
            image: "/assets/Portfolio/Novaflip.webp",
          },
          {
            number: "(05)",
            name: "TypeScript",
            image: "/assets/Portfolio/TTHC.webp",
          },
        ]}
      />
    </div>
  );
};

export default Services;
