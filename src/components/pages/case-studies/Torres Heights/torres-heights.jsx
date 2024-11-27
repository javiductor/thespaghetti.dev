import React from "react";
import CaseStudyHeader from "../components/CaseStudy-Header";
import Divider from "../../../shared/divider";
import Service from "../../../shared/service";
import ImageContentBlock from "../components/CaseStudy-Images";

const TorresHeights = () => {
  const imgData = [
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 1" },
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 2" },
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 3" },
    { src: "/assets/Portfolio/TTHC.webp", alt: "Image 4" },
  ];

  return (
    <>
      <CaseStudyHeader
        title="Torres Heights"
        description={[
          "The Torres Heights Collection is a real estate development located on the sun-kissed bay of Talamanca, Ibiza. My brief was to create a website tailored to the stunning interior design renders that showcase the property.",
          "The website takes visitors on a journey through the Ibizan coast and the different areas of the properties. By balancing the visuals with a warm background colour and an asymmetrical layout, I created a sense of exploration and discovery that leaves viewers wanting to see more.",
        ]}
        heading="Services"
        services={[{ name: "Web design" }, { name: "Copywritting" }]}
        imgSrc={"/assets/Portfolio/TTHC.webp"}
        imgAlt={"Torres Heights Mockup"}
        button="https://thetorresheightscollection.com/"
      />
      <Divider header={"About the Project"} />
      <Service
        description1="The project was built using the Divi Theme Builder on WordPress as this allowed for a quick and efficient set up. Featured included listing of properties, forms, parallax images and a map section."
        description2="Once the project was finished I offered a hosting and management service that included regular updates and optimisation."
        services={[
          {
            number: "(01)",
            name: "Luxury and Minimalist Design",
          },
          {
            number: "(02)",
            name: " Responsive design",
          },
          {
            number: "(03)",
            name: "Copywriting",
          },
          {
            number: "(04)",
            name: "Hosting & Management",
          },
        ]}
      />
      <ImageContentBlock imgData={imgData} />
    </>
  );
};

export default TorresHeights;
