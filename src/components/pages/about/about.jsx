import React from "react";
import AboutHeader from "./components/about-header";
import Divider from "../../shared/divider";
import AboutInfo from "./components/about-info";

function About() {
  return (
    <>
      <div className="App">
        <AboutHeader />
        <Divider header="About Me" />
        <AboutInfo />
      </div>
    </>
  );
}

export default About;
