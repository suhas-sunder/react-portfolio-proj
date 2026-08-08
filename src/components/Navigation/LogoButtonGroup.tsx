import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedInIcon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faAward as certificateIcon } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap as gradIcon } from "@fortawesome/free-solid-svg-icons";
import ToolTip from "../UI/ToolTip";
import LogoButtons from "./LogoButtons";

interface PropType {
  showToolTip: boolean;
  variant?: "default" | "hero";
}

function LogoButtonGroup({ showToolTip, variant = "default" }: PropType) {
  const btnData = [
    {
      id: "linkedin",
      logo: linkedInIcon,
      toolTipMsg: "View my LinkedIn profile (new tab)",
      type: "logoLink",
      url: "https://www.linkedin.com/in/s-sunder/",
      target: "_blank",
    },
    {
      id: "githublogoicon",
      logo: githubIcon,
      toolTipMsg: "View my GitHub profile (new tab)",
      type: "logoLink",
      url: "https://github.com/suhas-sunder",
      target: "_blank",
    },
    {
      id: "education",
      toolTipMsg: "View my Education History (new tab)",
      logo: gradIcon,
      type: "logoLink",
      url: "https://www.linkedin.com/in/s-sunder/details/education/",
      target: "_blank",
    },
    {
      id: "certificates",
      toolTipMsg: "View my Certifications (new tab via LinkedIn)",
      logo: certificateIcon,
      type: "logoLink",
      url: "https://www.linkedin.com/in/s-sunder/details/certifications/",
      target: "_blank",
    },
    {
      id: "email",
      toolTipMsg: "Scroll down to contact form",
      logo: emailIcon,
      type: "logoLink",
      url: "/#contact",
      isHashLink: true,
    },
  ];

  const groupClassName =
    variant === "hero"
      ? "flex w-full flex-wrap items-center gap-2.5"
      : "grid lg:grid-cols-5 lg:gap-[2em] mt-10 sm:gap-x-24 gap-x-10 gap-y-14 grid-cols-2 sm:grid-cols-3 items-center w-full max-w-[700px]";

  return (
    <ul
      className={groupClassName}
      aria-label={
        variant === "hero"
          ? "Professional profiles and contact links"
          : undefined
      }
    >
      {btnData.map((data) => (
        <li key={data.id} className={variant === "hero" ? "flex" : "m-auto"}>
          {showToolTip ? (
            <ToolTip toolTipMsg={data.toolTipMsg}>
              <LogoButtons data={data} variant={variant} />
            </ToolTip>
          ) : (
            <LogoButtons data={data} variant={variant} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default LogoButtonGroup;
