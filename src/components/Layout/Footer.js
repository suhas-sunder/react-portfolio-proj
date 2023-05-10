import React from "react";
import Styles from "./Footer.module.css";

function Footer() {
  return (
    <div id="footer" className={Styles.footer}>
      &copy; 2023 <span className={Styles.highlight}>|</span> Designed & coded
      by{" "}
      <a href="#" className={Styles.highlight}>
        Suhas Sunder
      </a>
      .
    </div>
  );
}

export default Footer;
