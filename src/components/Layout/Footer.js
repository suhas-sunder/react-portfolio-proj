import React from "react";
import Styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import HomeBtnData from "../../data/HomeBtnData";
import Button from "../UI/LinkButton";

function Footer({ handleModal }) {
  // Scroll to top of page on redirect
  const handleScroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="footer" className={Styles.footer}>
      <ul className={Styles.links}>
        {HomeBtnData.map((data, index) => (
          <li key={index}>
            {data.onClick ? (
              <Button {...data} onClick={handleModal} />
            ) : (
              <Button {...data} />
            )}
          </li>
        ))}
      </ul>
      <p className={Styles.text}>
        &copy; 2023 <span className={Styles.highlight}>|</span> Designed & coded
        by
        <span>
          {" "}
          <Link
            data-testid="link"
            to="/"
            className={Styles.highlight}
            onClick={handleScroll}
          >
            Suhas Sunder
          </Link>
        </span>
        .
      </p>
    </footer>
  );
}

export default Footer;
