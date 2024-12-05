import React from "react";
import CaseStudyHeader from "../components/CaseStudy-Header";
import Divider from "../../../shared/divider";
import Service from "../../../shared/service";
import ImageContentBlock from "../components/CaseStudy-Images";
import SEO from "../../../SeoHead";

const Mrp = () => {
  const imgData = [
    { src: "/assets/Portfolio/mrp/mrp-4.webp", alt: "candidate-onboarding" },
    { src: "/assets/Portfolio/mrp/mrp-5.webp", alt: "process-header" },
    { src: "/assets/Portfolio/mrp/mrp-6.webp", alt: "clients-header" },
    { src: "/assets/Portfolio/mrp/mrp-7.webp", alt: "job-board" },
  ];

  return (
    <>
      <SEO
        title="mrp | The Spaghetti Dev"
        description="mrp is a medical recruitment agency that was looking to become a leading healthcare staffing provider in the UK market."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-mrp.webp"
        canonicalUrl="https://thespaghetti.dev/work/mrp"
      />
      <CaseStudyHeader
        title="mrp"
        description={[
          "mrp approached me wanting their branding to reflect their ambition to become a leading healthcare staffing provider in the UK market. With this objective in mind, my task was to design and create a brand and website that showcased the strong connections between staff and candidates, while also highlighting the modern and efficient nature of their processes.",
        ]}
        heading="Services"
        services={[
          { name: "Web design" },
          { name: "Branding & Vision" },
          { name: "CRM Integration" },
        ]}
        imgSrc={"/assets/Portfolio/mrp.webp"}
        imgAlt={"mrp Mockup"}
        button="https://www.medicalresourcepartners.co.uk"
      />
      <Divider header={"About the Project"} />
      <Service
        description1="Over the course of a couple of years, I worked on various projects, including a comprehensive rebranding, website redesign, content creation, and the automation of mrp’s candidate onboarding process."
        description2="The idea behind the re-branding was to highlight the connection between the mrp team, candidates, and clients. This was achieved by incorporating visuals of arrows coming together to form a plus sign, symbolizing the concept of mrp + you, the candidate or client."
        services={[
          {
            number: "(01)",
            name: "Candidate Onboarding Process",
          },
          {
            number: "(02)",
            name: "Responsive Design",
          },
          {
            number: "(03)",
            name: "CRM integration",
          },
          {
            number: "(04)",
            name: "Bespoke Design and Content",
          },
          {
            number: "(05)",
            name: "New branding and strategy",
          },
        ]}
      />
      <ImageContentBlock imgData={imgData} />
    </>
  );
};

export default Mrp;
