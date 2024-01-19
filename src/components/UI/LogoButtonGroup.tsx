import Button from "../Navigation/ButtonLink";
import HomeBtnData from "../../data/HomeBtnData";

function LogoButtonGroup() {
  return (
    <ul className="grid lg:grid-cols-5 lg:gap-[4em] mt-10 sm:gap-x-24 gap-x-10 gap-y-14 grid-cols-2 sm:grid-cols-3">
      {HomeBtnData.map((data, index) => (
        <li key={index}>
          <Button {...data} />
        </li>
      ))}
    </ul>
  );
}

export default LogoButtonGroup;
