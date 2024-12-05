import React from "react";
import Projects from "./components/projects";
import SEO from "../../SeoHead";

function Work() {
  return (
    <>
      <SEO
        title="My Work | The Spaghetti Dev"
        description="This is a collection of my most recent web projects, both for web development and for web design."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-work.webp"
        canonicalUrl="https://thespaghetti.dev/work"
      />
      <div className="App">
        <Projects />
      </div>
    </>
  );
}

export default Work;
