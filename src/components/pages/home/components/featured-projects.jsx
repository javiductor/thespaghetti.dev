import React from "react";
import Card from "../../../shared/card";
import styles from "./featured-projects.module.css";

const FeaturedProjects = () => {
  const projects = [
    {
      thumbImageSrc: "/assets/Portfolio/TTHC-small.webp",
      altDescription: "Henley Spanish Centre Portfolio",
      category: ["CSS", "HTML", "React JS"],
      heading: "Henley Spanish Centre",
      link: "/work/henley-spanish-centre",
    },
    {
      thumbImageSrc: "/assets/Portfolio/spaghetti.jpg",
      altDescription: "The Spaghetti Dev Portfolio",
      category: ["CSS", "HTML", "React JS"],
      heading: "Thespaghetti.dev",
      link: "/work/spaghetti",
    },
    {
      thumbImageSrc: "/assets/Portfolio/mrp.webp",
      altDescription: "mrp Portfolio",
      category: ["Web Design", "SEO", "Branding"],
      heading: "mrp",
      link: "/work/mrp",
    },
    {
      thumbImageSrc: "/assets/Portfolio/TTHC-small.webp",
      altDescription: "Torres Heights Portfolio",
      category: ["Web Design"],
      heading: "Torres Heights",
      link: "/work/torres-heights",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.projectsRow}>
        {projects.slice(0, 2).map((project, index) => (
          <div className={styles.projectCard} key={index}>
            <Card
              thumbImageSrc={project.thumbImageSrc}
              altDescription={project.altDescription}
              category={project.category}
              heading={project.heading}
              link={project.link}
            />
          </div>
        ))}
      </div>
      <div className={styles.projectsRow}>
        {projects.slice(2, 4).map((project, index) => (
          <div className={styles.projectCard} key={`bottom-${index}`}>
            <Card
              thumbImageSrc={project.thumbImageSrc}
              altDescription={project.altDescription}
              category={project.category}
              heading={project.heading}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
