import NavLinks from "./NavLinks";
import Styles from "./styles/NavBar.module.css";
import MobileNav from "./MobileNav";
import NavBtnData from "../../data/NavBtnData";
import SideNav from "./SideNav";

export default function NavBar() {
  return (
    <nav role="navigation" className={Styles.nav}>
      <div className={Styles["nav-items"]}>
        <ul className="flex w-full justify-evenly max-w-[900px] items-center">
          {NavBtnData.map((data, index) => (
            <li key={index}>
              <NavLinks
                id={data.id}
                url={data.url}
                type={data.type}
                text={data.text}
                logo={data.logo}
                target={data.target}
                isHashLink={data.hashLink}
              />
            </li>
          ))}
        </ul>
      </div>
      <SideNav />
      <MobileNav />
    </nav>
  );
}
