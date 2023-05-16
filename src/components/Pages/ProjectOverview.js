import React from "react";
import NavBar from "../UI/NavBar";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";

function Home({ routePage }) {
  return (
    <>
      <NavBar routePage={routePage} />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
