import NavLinks from "./NavLinks";
import Styles from "./styles/NavBar.module.css";
import MobileNav from "./MobileNav";
import NavBtnData from "../../data/NavBtnData";
import SideNav from "./SideNav";

type NavLogo = "download" | "github" | "linkedin" | "arrow" | "arrowUp";

export default function NavBar() {
  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary navigation"
        className={`${Styles.nav} !sticky !top-0 !z-50 !w-full !border-b !border-slate-800 !bg-slate-950/95 !text-slate-100 !shadow-sm !backdrop-blur`}
      >
        <div className={`${Styles["nav-items"]} !bg-transparent`}>
          <ul className="flex w-full max-w-[900px] items-center justify-evenly">
            {NavBtnData.map((data) => (
              <li key={data.id}>
                <NavLinks
                  id={data.id}
                  url={data.url}
                  type={data.type}
                  text={data.text}
                  logo={data.logo as NavLogo | undefined}
                  target={data.target}
                  isHashLink={data.hashLink}
                />
              </li>
            ))}
          </ul>
        </div>

        <MobileNav />
      </nav>

      <SideNav />
    </>
  );
}