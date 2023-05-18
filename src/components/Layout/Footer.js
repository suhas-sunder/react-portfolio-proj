import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  // Scroll to top of page on redirect
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="footer" className={Styles.footer}>
      &copy; 2023 <span className={Styles.highlight}>|</span> Designed & coded
      by
      <span>
        <Link to="/" className={Styles.highlight} onClick={handleScroll}>
          Suhas Sunder
        </Link>
      </span>
      .
    </div>
  );
}

export default Footer;
