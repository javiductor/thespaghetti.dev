import React from "react";
import CaseStudyHeader from "../components/CaseStudy-Header";
import Divider from "../../../shared/divider";
import Service from "../../../shared/service";
import ImageContentBlock from "../components/CaseStudy-Images";
import SEO from "../../../SeoHead";

const Spaghetti = () => {
  const imgData = [
    {
      src: "/assets/Portfolio/spaghetti/spaghetti-1.webp",
      alt: "spaghetti-dev-project-mockup",
    },
    {
      src: "/assets/Portfolio/spaghetti/spaghetti-2.webp",
      alt: "spaghetti-dev-services-mockup",
    },
    {
      src: "/assets/Portfolio/spaghetti/spaghetti-3.webp",
      alt: "spaghetti-dev-about-mockup",
    },
    {
      src: "/assets/Portfolio/spaghetti/spaghetti-4.webp",
      alt: "spaghetti-dev-blog-mockup",
    },
  ];

  return (
    <>
      <SEO
        title="The Spaghetti Dev Project | The Spaghetti Dev"
        description="This is my personal portfolio. A place to display my work both as a developer and a designer. Take a look at how I created the website."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-spaghetti.webp"
        canonicalUrl="https://thespaghetti.dev/work/spaghetti"
      />
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
        imgSrc={"/assets/Portfolio/spaghetti.webp"}
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
