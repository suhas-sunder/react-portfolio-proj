import React from "react";
import Button from "./Button";
import Styles from "./NavBar.module.css";
import resumeImg from "../../assets/google_logo.jpg";
import MobileNav from "../UI/MobileNav";
import NavBtnData from "../../data/NavBtnData";

function NavBar() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles["nav-items"]}>
        <ul className={Styles["nav-list"]}>
          {NavBtnData.map((data, index) => (
            <li key={index} className={(data.type === "downloadBtn") && Styles["download-link"]}>
              <Button
                url={data.url !== "resumeImg" ? data.url : resumeImg}
                type={data.type}
                text={data.text}
                logo={data.logo}
                target={data.target}
                isHashLink={data.hashLink}
              />
            </li>
          ))}
        </ul>
      </div>
      <MobileNav
        id="mobile-nav"
        resumeImg={resumeImg}
      />
    </nav>
  );
}

export default NavBar;
