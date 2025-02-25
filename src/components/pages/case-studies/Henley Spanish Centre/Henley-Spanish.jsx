import React from "react";
import CaseStudyHeader from "../components/CaseStudy-Header";
import Divider from "../../../shared/divider";
import Service from "../../../shared/service";
import ImageContentBlock from "../components/CaseStudy-Images";
import SEO from "../../../SeoHead";

const HenleySpanish = () => {
  const imgData = [
    {
      src: "/assets/Portfolio/henley-spanish/henley-spanish-1.webp",
      alt: "pop-up-menu",
    },
    {
      src: "/assets/Portfolio/henley-spanish/henley-spanish-2.webp",
      alt: "services-mockup",
    },
    {
      src: "/assets/Portfolio/henley-spanish/henley-spanish-3.webp",
      alt: "corporate-training-mockup",
    },
    {
      src: "/assets/Portfolio/henley-spanish/henley-spanish-4.webp",
      alt: "header-mockup",
    },
  ];

  return (
    <>
      <SEO
        title="Henley Spanish Centre | The Spaghetti Dev"
        description="The Henley Spanish Centre was looking for a fast, mobile-optimised website that would showcase their virtual classroom exeperience."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-henley-spanish.webp"
        canonicalUrl="https://thespaghetti.dev/work/henley-spanish-centre"
      />
      <CaseStudyHeader
        title="Henley Spanish Centre - WIP"
        description={[
          "When The Henley Spanish Centre approached me in September 2024, they were ready to transform their digital identity. Their mission? To pivot from a traditional face-to-face language school to a modern online learning hub. The challenge was clear: create a lightning-fast, mobile-optimised website that would showcase their virtual classroom experience and position them as leaders in online Spanish education.",
        ]}
        heading="Services"
        services={[
          { name: "Web design" },
          { name: "Branding" },
          { name: "Web Development" },
        ]}
        imgSrc={"/assets/Portfolio/henley-spanish.webp"}
        imgAlt={"Henley Spanish Mockup"}
        // button="https://www.henelyspanishcentre.co.uk"
      />
      <Divider header={"About the Project"} />
      <Service
        description1="I designed the solution around a scalable, component-based architecture – ensuring both visual consistency and future growth potential. By strategically reusing elements throughout the site, we achieved a cohesive user experience while building a foundation that could easily evolve with their expanding online offerings."
        description2="The branding and design of the website also needed a revamp. Highlighting the online aspect of the business whilst keeping a minimalist approach to both the brand and the design."
        services={[
          {
            number: "(01)",
            name: "New branding and long term vision",
          },
          {
            number: "(02)",
            name: "A design that highlights online learning",
          },
          {
            number: "(03)",
            name: "Website optimised for speed",
          },
          {
            number: "(04)",
            name: "SEO optimised website",
          },
          {
            number: "(05)",
            name: "Good user experience",
          },
        ]}
      />
      <ImageContentBlock imgData={imgData} />
    </>
  );
};

export default HenleySpanish;
