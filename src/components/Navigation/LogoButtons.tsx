import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import handleScrollOffset from "../utility/handleScrollOffset";

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
  variant?: "default" | "hero";
}

function LogoButtons({ data, variant = "default" }: PropType) {
  const logoButtonClassName =
    variant === "hero"
      ? "flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-lg text-slate-300 transition hover:border-sky-400/60 hover:bg-slate-800 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      : "box-content flex h-12 w-16 cursor-pointer items-center justify-center rounded-lg border-2 border-slate-200 bg-white text-3xl text-slate-700 shadow-sm transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30";

  return (
    <>
      {data.isHashLink ? (
        <HashLink
          data-testid={data.id}
          aria-label={data.toolTipMsg}
          to={data.url}
          className={logoButtonClassName}
          scroll={(element) => handleScrollOffset(element)}
        >
          <FontAwesomeIcon icon={data.logo} />
        </HashLink>
      ) : (
        <a
          data-testid={data.id}
          href={data.url}
          aria-label={data.toolTipMsg}
          target={data.target || "_blank"}
          rel="noopener noreferrer"
          className={logoButtonClassName}
        >
          <FontAwesomeIcon icon={data.logo} />
        </a>
      )}
    </>
  );
}

export default LogoButtons;
