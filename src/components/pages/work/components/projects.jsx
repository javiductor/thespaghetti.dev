import React from "react";
import Card from "../../../shared/card";
import styles from "./projects.module.css";

const Projects = () => {
  const projects = [
    {
      thumbImageSrc: "/assets/Portfolio/TTHC.webp",
      altDescription: "Torres Heights Portfolio",
      category: ["CSS", "JSX", "React JS"],
      heading: "Henley Spanish Centre",
      link: "/work/henley-spanish-centre",
    },
    {
      thumbImageSrc: "/assets/Portfolio/TTHC.webp",
      altDescription: "The Spaghetti Dev Portfolio",
      category: ["CSS", "JSX", "React JS"],
      heading: "Thespaghetti.dev",
      link: "/work/spaghetti",
    },
    {
      thumbImageSrc: "/assets/Portfolio/TTHC.webp",
      altDescription: "Project Three",
      category: ["Web Design", "Branding & Vision"],
      heading: "mrp",
      link: "/work/mrp",
    },
    {
      thumbImageSrc: "/assets/Portfolio/TTHC.webp",
      altDescription: "Project Four",
      category: ["Web Design", "Branding & Vision"],
      heading: "Torres Heights",
      link: "/work/torres-heights",
    },
  ];

  return (
    <>
      <div className={styles.headerContainer}>
        <h1>My Work</h1>
      </div>
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
        <div className={styles.projectsRow}>
          {projects.slice(4, 6).map((project, index) => (
            <div className={styles.projectCard} key={`bottom-${index}`}>
              <Card
                thumbImageSrc={project.thumbImageSrc}
                altDescription={project.altDescription}
                category={project.category}
                heading={project.heading}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
