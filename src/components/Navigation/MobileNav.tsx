import { useState } from "react";
import NavLinks from "./NavLinks";
import Styles from "./styles/MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";
import NavBtnData from "../../data/NavBtnData";
import { faS as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function MobileNav() {
  const [toggle, setToggle] = useState(true);

  const handleBurgerMenu = (shouldToggle) => {
    // Check if menu needs to be opened or closed
    shouldToggle ? setToggle(!toggle) : setToggle(true);
  };

  return (
    <>
      <div className={Styles["mobile-nav"]} id="mobile-nav">
        {/* Logo button */}
        <Link
          to="/"
          onClick={handleBurgerMenu}
          className="text-black bg-highlight-yellow w-12 flex justify-center items-center rounded-md h-12 text-2xl ml-6"
        >
          <FontAwesomeIcon icon={logoIcon} />
        </Link>
        {/* Burger menu toggle buttons */}
        {toggle && (
          <FontAwesomeIcon
            data-testid="burgerBtn-open"
            icon={burgerIcon}
            className={Styles.burger}
            onClick={handleBurgerMenu}
          />
        )}
        {!toggle && (
          <FontAwesomeIcon
            data-testid="burgerBtn-close"
            icon={xIcon}
            className={Styles.burger}
            onClick={handleBurgerMenu}
          />
        )}
      </div>
      {/* Burger menu */}
      {!toggle && (
        <>
          <ul id="burger-menu" className={Styles["nav-list"]}>
            {NavBtnData.filter((data) => data.text !== "Home").map(
              (data, index) => (
                <li
                  onClick={handleBurgerMenu}
                  key={index}
                  className={
                    data.type === "downloadBtn" ? Styles["download-link"] : ""
                  }
                >
                  <NavLinks
                    url={data.url}
                    type={data.typeMobile}
                    text={data.text}
                    logo={data.logo}
                    target={data.target}
                    isHashLink={data.hashLink}
                  />
                </li>
              )
            )}
          </ul>
          <div
            data-testid="mobile-nav-bkgd"
            className={Styles["background-overlay"]}
            onClick={handleBurgerMenu}
          />
        </>
      )}
    </>
  );
}
