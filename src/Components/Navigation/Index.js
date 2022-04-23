import {
  ExtraSpace,
  NavigationWrapper,
  NavList,
  NavSubTitle,
  NavTitle,
  NavWrapper,
} from "./NavigationElement";

import {
  AiFillHome,
  AiFillFlag,
  AiOutlineBulb,
  AiTwotoneSetting,
} from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { BiTimeFive, BiSpreadsheet } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoLink, IoChevronBack } from "react-icons/io5";
import { CgAttribution } from "react-icons/cg";

const NavUpperArray = [
  { name: "Home", icon: <AiFillHome /> },
  { name: "Customization", icon: <MdDashboardCustomize /> },
];
const NavMiddleArray = [
  { name: "RealTime", icon: <BiTimeFive /> },
  { name: "Audiance", icon: <BsFillPersonFill /> },
  { name: "Aquistion", icon: <IoLink /> },
  { name: " Behaviour", icon: <BiSpreadsheet /> },
  { name: "Conversion", icon: <AiFillFlag /> },
];
const NavLowerArray = [
  { name: "Attribution", icon: <CgAttribution /> },
  { name: "Discover", icon: <AiOutlineBulb /> },
  { name: "Admin", icon: <AiTwotoneSetting /> },
];
const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavList>
        {NavUpperArray.map((item) => {
          return (
            <NavWrapper active={item.name === "Home"}>
              {item.icon}
              <NavTitle active={item.name === "Home"}> {item.name}</NavTitle>
            </NavWrapper>
          );
        })}
        <NavSubTitle>Report</NavSubTitle>
        {NavMiddleArray.map((item) => {
          return (
            <NavWrapper>
              {item.icon}
              <NavTitle> {item.name}</NavTitle>
            </NavWrapper>
          );
        })}
      </NavList>

      <NavList style={{ marginTop: "auto" }}>
        {NavLowerArray.map((item) => {
          return (
            <NavWrapper>
              {item.icon}
              <NavTitle> {item.name}</NavTitle>
            </NavWrapper>
          );
        })}
      </NavList>

      <ExtraSpace>
        <IoChevronBack />
      </ExtraSpace>
    </NavigationWrapper>
  );
};

export default Navigation;
