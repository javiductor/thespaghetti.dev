import React from "react";
import AboutHeader from "./components/about-header";
import Divider from "../../shared/divider";
import AboutInfo from "./components/about-info";
import SEO from "../../SeoHead";

function About() {
  return (
    <>
      <SEO
        title="About Me | The Spaghetti Dev"
        description="A front-end developer and digital designer with nearly 10 years experience in digital marketing and web design."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-about.webp"
        canonicalUrl="https://thespaghetti.dev/about"
      />
      <div className="App">
        <AboutHeader />
        <Divider header="About Me" />
        <AboutInfo />
      </div>
    </>
  );
}

export default About;
