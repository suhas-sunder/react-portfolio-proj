import { useState } from "react";
import NavLinks from "./NavLinks";
import Styles from "./styles/MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";
import NavBtnData from "../../data/NavBtnData";
import { faS as logoIcon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type NavLogo = "download" | "github" | "linkedin" | "arrow" | "arrowUp";

export default function MobileNav() {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  const toggleBurgerMenu = () => {
    setIsMenuClosed((currentState) => !currentState);
  };

  const closeBurgerMenu = () => {
    setIsMenuClosed(true);
  };

  return (
    <>
      <div
        className={`${Styles["mobile-nav"]} !border-b !border-slate-800 !bg-slate-950/95 !text-slate-100 !shadow-sm !backdrop-blur`}
        id="mobile-nav"
      >
        <Link
          to="/"
          onClick={closeBurgerMenu}
          aria-label="Go to home page"
          className="ml-6 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-sky-400/30 bg-sky-400/10 text-2xl text-sky-300 shadow-sm transition hover:border-sky-300 hover:bg-sky-400/20 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
        >
          <FontAwesomeIcon icon={logoIcon} />
        </Link>

        {isMenuClosed && (
          <button
            type="button"
            data-testid="burgerBtn-open"
            aria-label="Open navigation menu"
            aria-expanded={!isMenuClosed}
            aria-controls="burger-menu"
            className="mr-6 flex cursor-pointer items-center justify-center rounded-md border border-slate-700 bg-slate-900 p-3 text-slate-100 shadow-sm transition hover:border-sky-400 hover:bg-slate-800 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            onClick={toggleBurgerMenu}
          >
            <FontAwesomeIcon icon={burgerIcon} className="text-xl" />
          </button>
        )}

        {!isMenuClosed && (
          <button
            type="button"
            data-testid="burgerBtn-close"
            aria-label="Close navigation menu"
            aria-expanded={!isMenuClosed}
            aria-controls="burger-menu"
            className="mr-6 flex cursor-pointer items-center justify-center rounded-md border border-slate-700 bg-slate-900 p-3 text-slate-100 shadow-sm transition hover:border-sky-400 hover:bg-slate-800 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
            onClick={toggleBurgerMenu}
          >
            <FontAwesomeIcon icon={xIcon} className="text-xl" />
          </button>
        )}
      </div>

      {!isMenuClosed && (
        <>
          <ul
            id="burger-menu"
            className={`${Styles["nav-list"]} !border !border-slate-800 !bg-slate-950 !text-slate-100 !shadow-xl`}
          >
            {NavBtnData.filter((data) => data.text !== "Home").map((data) => (
              <li
                onClick={closeBurgerMenu}
                key={data.id}
                className={
                  data.type === "downloadBtn" ? Styles["download-link"] : ""
                }
              >
                <NavLinks
                  id={data.id}
                  url={data.url}
                  type={data.typeMobile}
                  text={data.text}
                  logo={data.logo as NavLogo | undefined}
                  target={data.target}
                  isHashLink={data.hashLink}
                />
              </li>
            ))}
          </ul>

          <div
            data-testid="mobile-nav-bkgd"
            className={`${Styles["background-overlay"]} !bg-slate-950/70`}
            onClick={closeBurgerMenu}
          />
        </>
      )}
    </>
  );
}