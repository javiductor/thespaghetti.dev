import React from "react";
import CaseStudyHeader from "../components/CaseStudy-Header";
import Divider from "../../../shared/divider";
import Service from "../../../shared/service";
import ImageContentBlock from "../components/CaseStudy-Images";

const HenleySpanish = () => {
  const imgData = [
    { src: "/src/assets/Portfolio/TTHC.webp", alt: "Image 1" },
    { src: "/src/assets/Portfolio/TTHC.webp", alt: "Image 2" },
    { src: "/src/assets/Portfolio/TTHC.webp", alt: "Image 3" },
    { src: "/src/assets/Portfolio/TTHC.webp", alt: "Image 4" },
  ];

  return (
    <>
      <CaseStudyHeader
        title="Henley Spanish Centre"
        description={[
          "Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.",
          "With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant.",
        ]}
        heading="Services"
        services={[
          { name: "Web design" },
          { name: "Branding" },
          { name: "Web Development" },
        ]}
        imgSrc={"/src/assets/Portfolio/TTHC.webp"}
        imgAlt={"Torres Heights Mockup"}
        button="https://www.henelyspanishcentre.co.uk"
      />
      <Divider header={"About the Project"} />
      <Service
        description1="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application.
        
      With a strong focus on UI design and systemic design, I aim to create elements and modules that are responsive, flexible and above all functional and performant."
        description2="Most of my designs are not just about aesthetics, but about developing logical, scalable design systems that are precisely tailored to the web and app application."
        heading2="Client Specificatoins"
        services={[
          {
            number: "(01)",
            name: "Henley Spanish Centre",
          },
          {
            number: "(02)",
            name: "mrp",
          },
          {
            number: "(03)",
            name: "Torres Heights",
          },
          {
            number: "(04)",
            name: "enferm.io",
          },
          {
            number: "(05)",
            name: "NovaFlip",
          },
        ]}
      />
      <ImageContentBlock imgData={imgData} />
    </>
  );
};

export default HenleySpanish;
