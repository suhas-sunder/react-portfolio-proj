import { faArrowUp as upArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();

  return (
    <div className="group fixed right-8 bottom-8 z-50 hidden text-slate-700 sm:flex">
      <ul>
        <li>
          <Link
            to={`${location.pathname || "/"}`}
            aria-label="Scroll to top"
            className="relative flex cursor-pointer flex-col rounded-full border border-slate-300 bg-white p-3 text-xl font-bold tracking-widest text-slate-700 shadow-sm transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
          >
            <FontAwesomeIcon icon={upArrow} />

            <span className="absolute -bottom-8 -left-6 flex whitespace-nowrap text-[0.6rem] font-semibold text-slate-600 opacity-0 transition group-hover:opacity-100">
              Scroll To Top
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;