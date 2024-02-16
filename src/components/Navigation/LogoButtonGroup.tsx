import { v4 as uuidv4 } from "uuid";
import { faGithub as githubIcon } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedInIcon } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as emailIcon } from "@fortawesome/free-solid-svg-icons";
import { faAward as certificateIcon } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap as gradIcon } from "@fortawesome/free-solid-svg-icons";
import ToolTip from "../UI/ToolTip";
import LogoButtons from "./LogoButtons";

interface PropType {
  showToolTip: boolean;
}

function LogoButtonGroup({ showToolTip }: PropType) {
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
      toolTipMsg: "View my University (new tab)",
      logo: gradIcon,
      type: "logoLink",
      url: "https://ontariotechu.ca/",
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
  return (
    <ul className="grid lg:grid-cols-5 lg:gap-[2em] mt-10 sm:gap-x-24 gap-x-10 gap-y-14 grid-cols-2 sm:grid-cols-3 items-center w-full max-w-[700px]">
      {btnData.map((data) => (
        <li key={uuidv4()} className="m-auto">
          {showToolTip ? (
            <ToolTip toolTipMsg={data.toolTipMsg}>
              <LogoButtons data={data} />
            </ToolTip>
          ) : (
            <LogoButtons data={data} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default LogoButtonGroup;
