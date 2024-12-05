import React from "react";
import HomeHeader from "./components/home-header";
import Services from "./components/services";
import Divider from "../../shared/divider";
import FeaturedProjects from "./components/featured-projects";
import AboutMe from "./components/about-me";
import SEO from "../../SeoHead";

function Home() {
  return (
    <>
      <SEO
        title="Home | The Spaghetti Dev"
        description="Follow my journey as a developer through hands-on projects, coding insights, and real-world experiences. Explore my portfolio and learn alongside me as I navigate the tech world."
        ogImage="https://thespaghetti.dev/assets/SEO/seo-home.webp"
        canonicalUrl="https://thespaghetti.dev"
      />
      <div className="App">
        <HomeHeader />
        <Divider header="Featured Projects" />
        <FeaturedProjects />
        <Divider header="My Services" />
        <Services />
        <Divider header="About Me" />
        <AboutMe />
      </div>
    </>
  );
}

export default Home;
