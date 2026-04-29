import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface PropType {
  data: {
    id: string;
    toolTipMsg: string;
    logo: IconDefinition;
    type: string;
    url: string;
    target?: string;
    isHashLink?: boolean;
  };
}

function LogoButtons({ data }: PropType) {
  const logoButtonClassName =
    "flex justify-center items-center text-slate-700 w-16 h-12 text-3xl bg-white rounded-lg hover:text-sky-700 hover:bg-sky-50 border-2 border-slate-200 hover:border-sky-200 shadow-sm transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500/30";

  return (
    <>
      {data.isHashLink ? (
        <HashLink
          data-testid={data.id}
          aria-label={data.toolTipMsg}
          to={data.url}
          className={logoButtonClassName}
        >
          <FontAwesomeIcon icon={data.logo} />
        </HashLink>
      ) : (
        <Link
          data-testid={data.id}
          to={data.url}
          aria-label={data.toolTipMsg}
          target="_blank"
          rel="noopener noreferrer"
          className={logoButtonClassName}
        >
          <FontAwesomeIcon icon={data.logo} />
        </Link>
      )}
    </>
  );
}

export default LogoButtons;