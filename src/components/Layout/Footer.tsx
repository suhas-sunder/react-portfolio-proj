import LogoButtonGroup from "../Navigation/LogoButtonGroup";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="flex flex-col bg-dark-blueish-gray text-white items-center px-4 pt-2"
    >
      <LogoButtonGroup showToolTip={false} />

      <div className="flex justify-center items-center gap-2 pt-10 pb-6">
        <span className="whitespace-nowrap">&copy; 2023 – {currentYear}</span>
        <span className="whitespace-nowrap text-highlight-yellow">|</span>
        <span className="hidden sm:inline whitespace-nowrap">
          Designed & coded by
        </span>
        <span className="whitespace-nowrap">Suhas Sunder</span>
        <span className="whitespace-nowrap text-highlight-yellow">•</span>
        <a
          href="https://github.com/suhas-sunder/react-portfolio-proj"
          target="_blank"
          rel="noreferrer"
          className="whitespace-nowrap text-highlight-yellow hover:text-yellow-100 cursor-pointer"
        >
          View source
        </a>
      </div>
    </footer>
  );
}

export default Footer;
