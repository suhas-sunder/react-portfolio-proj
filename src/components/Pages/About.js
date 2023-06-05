import React from "react";
import NavBar from "../UI/NavBar";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Skills from "../Layout/Skills";

function About() {
  return (
    <>
      <NavBar />
      {/* Add header */}
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default About;
