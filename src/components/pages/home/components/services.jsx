import React from "react";
import Service from "/src/components/shared/service";
import styles from "../../../shared/service.module.css";

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <Service
        withBorder={true}
        number="01"
        heading="WEB DEVELOPMENT"
        description1="Transform your digital presence with web solutions that prioritise both performance and polish. I specialise in building sophisticated, component-based websites using cutting-edge JavaScript frameworks, ensuring your platform is both powerful and future-proof."
        description2="My development approach combines clean, efficient code with seamless user experiences – delivering websites that load fast, respond instantly and scale effortlessly. From responsive implementations to complex UI/UX features, every line of code is meticulously crafted to enhance both functionality and user engagement, creating digital experiences that truly deliver."
        services={[
          {
            number: "(01)",
            name: "Modern JS Frameworks",
            image: "/assets/hover/web-dev-2.webp",
          },
          {
            number: "(02)",
            name: "Responsive Web Development",
            image: "/assets/hover/web-dev-1.webp",
          },
          {
            number: "(03)",
            name: "Performance Optimization",
            image: "/assets/hover/web-dev-4.webp",
          },
          {
            number: "(04)",
            name: "Version Control & Deployment",
            image: "/assets/Portfolio/Novaflip.webp",
          },
          {
            number: "(05)",
            name: "UI/UX Implementation",
            image: "/assets/hover/web-dev-3.webp",
          },
        ]}
      />
      <Service
        withBorder={true}
        number="02"
        heading="BRANDING & VISION"
        description1="With over 7 years of expertise in brand development, I transform businesses through strategic design thinking and clean, minimal aesthetics. From crafting distinctive logos and comprehensive brand identities to developing compelling pitch decks and strategic messaging, I offer a complete suite of branding solutions that help businesses establish their unique market position."
        description2="My approach combines thoughtful copywriting with strategic brand development to create cohesive brand experiences that resonate with your target audience. Whether you're launching a new venture or refreshing an existing brand, I partner with you to create meaningful connections that drive business growth and lasting impact."
        services={[
          {
            number: "(01)",
            name: "Logo Design",
            image: "/assets/Portfolio/enferm.webp",
          },

          {
            number: "(02)",
            name: "Overall branding",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Deck Design",
            image: "/assets/Portfolio/mrp.webp",
          },
          {
            number: "(04)",
            name: "Branding strategy",
            image: "/assets/Portfolio/Novaflip.webp",
          },
          {
            number: "(05)",
            name: "Copywritting",
            image: "/assets/Portfolio/TTHC.webp",
          },
        ]}
      />
      <Service
        withBorder={true}
        number="03"
        heading="WEB DESIGN"
        description1="I craft thoughtfully structured websites that guide visitors through seamless journeys, leveraging strategic white space to enhance readability and impact. From detailed wireframes to polished UI/UX design, every element is meticulously planned to ensure optimal user engagement across all devices."
        description2="My comprehensive approach includes thorough architecture planning and cross-browser testing, ensuring your website performs flawlessly on every platform. By combining aesthetic excellence with strategic functionality, I create digital experiences that don't just look beautiful – they drive results and turn visitors into customers."
        services={[
          {
            number: "(01)",
            name: "Wireframming",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(02)",
            name: "UX/UI Design",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(03)",
            name: "Responsive design",
            image: "/assets/Portfolio/TTHC.webp",
          },
          {
            number: "(04)",
            name: "Architecture and navigation planning",
            image: "/assets/Portfolio/Novaflip.webp",
          },
          {
            number: "(05)",
            name: "Cross browser testing",
            image: "/assets/Portfolio/TTHC.webp",
          },
        ]}
      />
    </div>
  );
};

export default Services;
