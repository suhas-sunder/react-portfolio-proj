import React from "react";
import NavBar from "../UI/NavBar";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import Skills from "../Layout/Skills";

function Home({ routePage }) {
  return (
    <>
      <NavBar routePage={routePage} />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
