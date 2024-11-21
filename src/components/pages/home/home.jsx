import React from "react";
import HomeHeader from "./components/home-header";
import Services from "./components/services";
import Divider from "../../shared/divider";
import FeaturedProjects from "./components/featured-projects";
import AboutMe from "./components/about-me";

function Home() {
  return (
    <>
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
