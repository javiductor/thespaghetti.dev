import React from "react";
import CaseStudyHeader from "../components/CaseStudy-Header";
import Divider from "../../../shared/divider";
import Service from "../../../shared/service";
import ImageContentBlock from "../components/CaseStudy-Images";

const Spaghetti = () => {
  const imgData = [
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 1" },
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 2" },
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 3" },
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 4" },
  ];

  return (
    <>
      <CaseStudyHeader
        title="Spaghetti.dev"
        description={[
          "The Spaghetti Dev emerged from a simple truth: writing clean code is an art. When I started learning JavaScript, I watched as my neat solutions transformed into tangled complexity. Rather than seeing this as a setback, I embraced it as an opportunity to grow.",
          "Now, this platform serves as both my portfolio and a dynamic journal of my development journey – sharing insights, celebrating progress, and documenting the continuous pursuit of coding excellence.",
        ]}
        heading="Services"
        services={[
          { name: "Web design" },
          { name: "Branding" },
          { name: "Web Development" },
        ]}
        imgSrc={"/assets/Portfolio/spaghetti.jpg"}
        imgAlt={"Spaghetti Dev Mockup"}
      />
      <Divider header={"About the Project"} />
      <Service
        description1="This project weaves together two distinct elements: a showcase of my completed work and a living document of my development journey. The portfolio section highlights key projects I've brought to life, while the blog captures the ongoing learning experiences, challenges, and victories in my web development path."
        description2="To ensure both speed and flexibility, I took a hybrid approach. The portfolio section is built as a static site for optimal performance, while the blog leverages Directus, a headless CMS, allowing me to seamlessly share updates about my learning journey. This combination delivers fast load times without sacrificing the ability to add dynamic content as I grow"
        services={[
          {
            number: "(01)",
            name: "Timeless UI Design",
          },
          {
            number: "(02)",
            name: "API integration to headerless CMS",
          },
          {
            number: "(03)",
            name: "Built using React JS & CSS",
          },
          {
            number: "(04)",
            name: "Dark / Light mode",
          },
          {
            number: "(05)",
            name: "Micro animations",
          },
        ]}
      />
      <ImageContentBlock imgData={imgData} />
    </>
  );
};

export default Spaghetti;
