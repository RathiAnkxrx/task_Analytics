import {
  AccountDropDown,
  AccountTitle,
  AccountWrapper,
  HeaderWrapper,
  IconWrapper,
  InputField,
  InputIcon,
  InputWrapper,
  LogoImage,
  LogoTitle,
  LogoWrapper,
  UserImg,
} from "./HeaderElement";

import Analytics from "../../assets/analytics.svg";
import profile from "../../assets/profile.jpg";

import { IoIosNotifications, IoMdArrowDropdown } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";
import {
  AiFillQuestionCircle,
  AiOutlineSearch,
  AiOutlineRight,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImage src={Analytics} />
        <LogoTitle>Analytics</LogoTitle>
      </LogoWrapper>

      <AccountWrapper>
        <AccountTitle>
          All Accounts <AiOutlineRight size={6} /> Google Merchantdise
        </AccountTitle>
        <AccountDropDown>
          1 MasterView <IoMdArrowDropdown />
        </AccountDropDown>
      </AccountWrapper>

      <InputWrapper>
        <InputIcon>
          <AiOutlineSearch />
        </InputIcon>
        <InputField
          type="text"
          placeholder="Try searching Top countries by user"
        />
      </InputWrapper>

      <IconWrapper>
        <IoIosNotifications size={18} color="grey" />
        <CgMenuGridR size={18} color="grey" />
        <AiFillQuestionCircle size={18} color="grey" />
        <BsThreeDotsVertical size={18} color="grey" />
        <UserImg src={profile} />
      </IconWrapper>
    </HeaderWrapper>
  );
};

export default Header;
