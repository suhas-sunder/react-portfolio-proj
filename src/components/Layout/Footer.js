import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import HomeBtnData from "../../data/HomeBtnData";
import Button from "../UI/Button";

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
      <ul className={Styles.links}>
        {HomeBtnData.map((data, index) => (
          <li key={index}>
            <Button
              logo={data.logo}
              type={data.type}
              url={data.url}
              target={data.target}
              isHashLink={data.isHashLink}
            />
          </li>
        ))}
      </ul>
      <p className={Styles.text}>
        &copy; 2023 <span className={Styles.highlight}>|</span> Designed & coded
        by
        <span>
          {" "}
          <Link to="/" className={Styles.highlight} onClick={handleScroll}>
            Suhas Sunder
          </Link>
        </span>
        .
      </p>
    </div>
  );
}

export default Footer;
