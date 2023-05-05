import React from "react";
import NavBar from "./components/Layout/NavBar";
import Header from "./components/Layout/Header";
import About from "./components/Layout/About";
import Projects from "./components/Layout/Projects";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Layout/Footer";

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
