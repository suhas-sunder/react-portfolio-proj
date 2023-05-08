import React from "react";
import NavBar from "../Layout/NavBar";
import Header from "../Layout/Header";
import About from "../Layout/About";
import Projects from "../Layout/Projects"
import Contact from "../Layout/Contact"
import Footer from "../Layout/Footer"

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
