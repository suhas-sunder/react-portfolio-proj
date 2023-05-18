import React from "react";
import NavBar from "../UI/NavBar";
import Header from "../Layout/Header";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";

function Home({ routePage }) {

  return (
    <>
      <NavBar routePage={routePage} />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
