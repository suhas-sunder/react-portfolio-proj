import { faArrowUp as upArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation } from "react-router-dom";

function SideNav() {
  const location = useLocation();

  return (
    <div className="group flex fixed text-white right-8 bottom-8  hover:bg-highlight-yellow rounded-full">
      <ul>
        <li>
          <Link
            to={`${location.pathname || "/"}`}
            className="flex saturate-100 border-white invert relative flex-col text-2xl brightness-50 border-2 p-2 rounded-full group-hover:brightness-75 font-bold tracking-widest cursor-pointer"
          >
            <FontAwesomeIcon icon={upArrow} />
            <span className="flex whitespace-nowrap text-[0.4rem] absolute -bottom-8 -left-6">
              Scroll To Top
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
