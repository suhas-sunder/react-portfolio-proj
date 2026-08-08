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

  const isMobileMenuLink = type === "mobile-menu-link";
  const isMobileDownloadLink = type === "mobile-download-link";

  const isPrimaryAction =
    type !== "nav-link" &&
    type !== "nav-link-mobile" &&
    type !== "mobile-link" &&
    type !== "mobile-menu-link" &&
    type !== "mobile-download-link";

  const isExternalLink =
    target === "_blank" ||
    url.startsWith("http://") ||
    url.startsWith("https://");

  const linkClassName = isPrimaryAction
    ? "ml-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-sky-300 bg-sky-300 px-3 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-slate-950 shadow-sm transition hover:border-sky-200 hover:bg-sky-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 xl:px-4 xl:text-xs"
    : "flex cursor-pointer items-center justify-center rounded-md px-2 py-3 text-[0.67rem] font-semibold uppercase tracking-[0.12em] text-slate-300 transition hover:bg-slate-900 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 xl:px-3 xl:text-xs 2xl:px-4";
  const mobileMenuLinkClassName =
    "flex w-full cursor-pointer items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 px-4 py-4 text-base font-semibold uppercase tracking-[0.13em] text-slate-100 transition hover:border-sky-400/40 hover:bg-slate-800 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40";

  const mobileDownloadLinkClassName =
    "flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-sky-300 px-5 py-4 text-base font-bold uppercase tracking-[0.13em] text-slate-950 transition hover:bg-sky-200 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-sky-300/50";

  const finalClassName = isMobileDownloadLink
    ? mobileDownloadLinkClassName
    : isMobileMenuLink
      ? mobileMenuLinkClassName
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
