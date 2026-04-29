import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin as linkedinIcon } from "@fortawesome/free-brands-svg-icons";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight as arrowIcon } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare as arrowUpIcon } from "@fortawesome/free-solid-svg-icons";
import Styles from "./styles/ButtonLink.module.css";
import handleScrollOffset from "../utility/handleScrollOffset";

interface PropType {
  id?: string;
  text?: string;
  logo?: "download" | "linkedin" | "github" | "arrow" | "arrowUp";
  type?: string;
  url: string;
  target?: string;
  isHashLink?: boolean;
  onClick?: () => void;
}

export default function NavLinks({
  id,
  text,
  logo,
  type,
  url,
  target,
  isHashLink,
}: PropType) {
  const logos = {
    download: arrowUpIcon,
    linkedin: linkedinIcon,
    github: githubIcon,
    arrow: arrowIcon,
    arrowUp: arrowUpIcon,
  };

  const isPrimaryAction =
    type !== "nav-link" && type !== "nav-link-mobile" && type !== "mobile-link";

  const isExternalLink =
    target === "_blank" || url.startsWith("http://") || url.startsWith("https://");

  const linkClassName = isPrimaryAction
    ? "flex cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-sky-600 bg-sky-600 px-[0.67em] py-[0.7em] text-xs font-semibold uppercase tracking-widest text-white transition hover:border-sky-700 hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500/30 sm:px-5 sm:text-sm"
    : "flex cursor-pointer items-center justify-center px-5 py-5 text-base font-semibold uppercase tracking-widest text-sky-700 transition hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-500/30";

  const mobileLinkClassName =
    "flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-4 text-base font-semibold uppercase tracking-widest text-slate-700 transition hover:bg-sky-50 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/30";

  const finalClassName =
    type === "nav-link-mobile" || type === "mobile-link"
      ? mobileLinkClassName
      : linkClassName;

  const dispText = text && <span className={Styles.text}>{text}</span>;

  const dispLogo = logo && logos[logo] && (
    <FontAwesomeIcon icon={logos[logo]} className={Styles.icon} />
  );

  if (isHashLink) {
    return (
      <HashLink
        data-testid={`btn-link-${id}`}
        to={url}
        aria-label={text || "Navigation link"}
        className={finalClassName}
        target={target}
        scroll={(el) => handleScrollOffset(el)}
      >
        {dispText}
        {dispLogo}
      </HashLink>
    );
  }

  if (isExternalLink) {
    return (
      <a
        data-testid={`btn-link-${id}`}
        href={url}
        aria-label={text || "Navigation link"}
        className={finalClassName}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {dispText}
        {dispLogo}
      </a>
    );
  }

  return (
    <Link
      data-testid={`btn-link-${id}`}
      to={url}
      aria-label={text || "Navigation link"}
      className={finalClassName}
      target={target}
    >
      {dispText}
      {dispLogo}
    </Link>
  );
}