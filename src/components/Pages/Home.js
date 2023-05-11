import React from "react";
import NavBar from "../Layout/NavBar";
import Header from "../Layout/Header";
import Skills from "../Layout/Skills";
import Projects from "../Layout/Projects"
import Contact from "../Layout/Contact"
import Footer from "../Layout/Footer"

function Home() {
  return (
    <>      
      <NavBar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
