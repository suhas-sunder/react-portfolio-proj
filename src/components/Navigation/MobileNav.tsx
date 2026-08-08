import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import Styles from "./styles/MobileNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars as burgerIcon } from "@fortawesome/free-solid-svg-icons";
import { faX as xIcon } from "@fortawesome/free-solid-svg-icons";
import NavBtnData from "../../data/NavBtnData";
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

  useEffect(() => {
    if (isMenuClosed) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeBurgerMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMenuClosed]);

  return (
    <>
      <div
        className={`${Styles["mobile-nav"]} !relative !z-[80] !border-b !border-slate-800 !bg-slate-950/95 !text-slate-100 !shadow-sm !backdrop-blur lg:!hidden`}
        id="mobile-nav"
      >
        <Link
          to="/"
          onClick={closeBurgerMenu}
          aria-label="Go to home page"
          className="ml-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-sky-400/20 bg-sky-400/10 text-sm font-bold tracking-tight text-sky-300 transition hover:border-sky-400/40 hover:bg-sky-400/20 hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          SS
        </Link>

        <button
          key={isMenuClosed ? "menu-open" : "menu-close"}
          type="button"
          data-testid={isMenuClosed ? "burgerBtn-open" : "burgerBtn-close"}
          aria-label={
            isMenuClosed ? "Open navigation menu" : "Close navigation menu"
          }
          aria-expanded={!isMenuClosed}
          aria-controls="burger-menu"
          className="mr-5 flex h-11 w-11 cursor-pointer items-center justify-center rounded-md bg-slate-900 text-slate-100 transition hover:bg-slate-800 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          onClick={toggleBurgerMenu}
        >
          <FontAwesomeIcon
            icon={isMenuClosed ? burgerIcon : xIcon}
            className="text-lg"
          />
        </button>
      </div>

      {!isMenuClosed && (
        <>
          <button
            type="button"
            data-testid="mobile-nav-bkgd"
            aria-label="Close navigation menu"
            className={`${Styles["background-overlay"]} !fixed !inset-x-0 !top-[3.5625rem] !bottom-0 !z-[60] !h-auto !w-full !cursor-pointer !border-0 !bg-slate-950/60 lg:!hidden`}
            onClick={closeBurgerMenu}
          />

          <ul
            id="burger-menu"
            className={`${Styles["nav-list"]} !fixed !inset-x-0 !top-[3.5625rem] !z-[70] !flex !max-h-[calc(100dvh-3.5625rem)] !w-full !max-w-none !flex-col !gap-3 !overflow-y-auto !overflow-x-hidden !bg-slate-950 !px-4 !py-6 !text-slate-100 !shadow-xl lg:!hidden`}
          >
            {NavBtnData.filter((data) => data.text !== "Home").map((data) => {
              const isDownloadButton = data.type === "downloadBtn";

              return (
                <li
                  key={data.id}
                  onClick={closeBurgerMenu}
                  className="mx-auto w-full max-w-[22rem]"
                >
                  <NavLinks
                    id={data.id}
                    url={data.url}
                    type={
                      isDownloadButton
                        ? "mobile-download-link"
                        : "mobile-menu-link"
                    }
                    text={data.text}
                    logo={data.logo as NavLogo | undefined}
                    target={data.target}
                    isHashLink={data.hashLink}
                  />
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
