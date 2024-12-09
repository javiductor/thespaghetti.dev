import React from "react";
import HomeHeader from "./components/home-header";
import Services from "./components/services";
import Divider from "../../shared/divider";
import FeaturedProjects from "./components/featured-projects";
import AboutMe from "./components/about-me";
// import SEO from "../../SeoHead";
import { HelmetProvider, Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home | The Spaghetti Dev</title>
          <meta
            name="description"
            content="Follow my journey as a developer through hands-on projects, coding insights, and real-world experiences. Explore my portfolio and learn alongside me as I navigate the tech world."
          />
          <meta property="og:title" content="Home | The Spaghetti Dev" />
          <meta
            property="og:description"
            content="Follow my journey as a developer through hands-on projects, coding insights, and real-world experiences. Explore my portfolio and learn alongside me as I navigate the tech world."
          />
          <meta
            property="og:image"
            content="https://thespaghetti.dev/assets/SEO/seo-home.webp"
          />
        </Helmet>
        <div className="App">
          <HomeHeader />
          <Divider header="Featured Projects" />
          <FeaturedProjects />
          <Divider header="My Services" />
          <Services />
          <Divider header="About Me" />
          <AboutMe />
        </div>
      </HelmetProvider>
    </>
  );
}

export default Home;
