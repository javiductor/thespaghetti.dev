import React from "react";
import AboutHeader from "./components/about-header";
import Divider from "../../shared/divider";
import AboutInfo from "./components/about-info";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import SEO from "../../SeoHead";

function About() {
  return (
    <>
      <HelmetProvider>
        {/* <SEO
        title="About Me | The Spaghetti Dev"
        description="A front-end developer and digital designer with nearly 10 years experience in digital marketing and web design."
      
      /> */}
        <Helmet>
          <title>About Me | The Spaghetti Dev</title>
          <meta
            name="description"
            content="A front-end developer and digital designer with nearly 10 years experience in digital marketing and web design."
          />
          <meta property="og:title" content="About Me | The Spaghetti Dev" />
          <meta
            property="og:description"
            content="A front-end developer and digital designer with nearly 10 years experience in digital marketing and web design."
          />
          <meta
            property="og:image"
            content="https://thespaghetti.dev/assets/SEO/seo-about.webp"
          />
        </Helmet>
        <div className="App">
          <AboutHeader />
          <Divider header="About Me" />
          <AboutInfo />
        </div>
      </HelmetProvider>
    </>
  );
}

export default About;
