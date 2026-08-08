import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";
import NavBtnData from "../../data/NavBtnData";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";

type NavLogo = "download" | "github" | "linkedin" | "arrow" | "arrowUp";

export default function NavBar() {
  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary navigation"
        className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/95 text-slate-100 shadow-sm backdrop-blur"
      >
        <div className="hidden h-16 w-full px-16 xl:block">
          <div className="mx-auto flex h-full w-full max-w-[82rem] items-center gap-5 xl:gap-8">
            <Link
              to="/"
              aria-label="Suhas Sunder software developer — home"
              className="group flex shrink-0 items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-sky-400/30 bg-sky-400/10 text-sm font-bold tracking-tight text-sky-300 transition group-hover:border-sky-300/60 group-hover:bg-sky-400/15 group-hover:text-sky-200"
              >
                SS
              </span>

              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-wide text-white">
                  Suhas Sunder
                </span>
                <span className="mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky-300 2xl:block">
                  Software Developer
                </span>
              </span>
            </Link>

            <ul className="ml-auto flex min-w-0 items-center justify-end gap-0.5 xl:gap-1">
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
        </div>

        <MobileNav />
      </nav>

      <SideNav />
    </>
  );
}
