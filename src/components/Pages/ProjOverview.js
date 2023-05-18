import React from "react";
import NavBar from "../UI/NavBar";
import Contact from "../Layout/Contact";
import Footer from "../Layout/Footer";
import ProjData from "../../data/ProjData";
import Styles from "./ProjOverview.module.css"
import Skills from "../Layout/Skills"

function ProjOverview({ projName }) {
  return (
    <>
      <NavBar />
      <div className={Styles.header}>
        <h1>{projName}</h1>
      </div>
      <Contact />
      <Footer />
    </>
  );
}

export default ProjOverview;
