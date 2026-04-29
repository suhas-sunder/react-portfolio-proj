import LogoButtonGroup from "../Navigation/LogoButtonGroup";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="flex flex-col items-center bg-slate-950 px-4 pt-2 text-white"
    >
      <LogoButtonGroup showToolTip={false} />

      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pt-10 pb-6 text-sm text-slate-200 sm:text-base">
        <span className="whitespace-nowrap">&copy; 2023 – {currentYear}</span>
        <span className="whitespace-nowrap text-sky-300">|</span>
        <span className="hidden whitespace-nowrap sm:inline">
          Designed & coded by
        </span>
        <span className="whitespace-nowrap">Suhas Sunder</span>
        <span className="whitespace-nowrap text-sky-300">•</span>
        <a
          href="https://github.com/suhas-sunder/react-portfolio-proj"
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer whitespace-nowrap font-semibold text-sky-300 transition hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300/40"
        >
          View source
        </a>
      </div>
    </footer>
  );
}

export default Footer;