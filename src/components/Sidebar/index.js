import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenuTop,
  SidebarMenuBottom,
  SidebarLink,
  SidebarLogo,
  SidebarLogoMobile,
  Logo,
  Image,
} from "./SidebarElements";
import logoSideMobile from "../../images/logoSide.png";
import logoSide from "../../images/logoSide2.png";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} ontouchstart="">
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarLogoMobile>
            <Image src={logoSideMobile} id="" />
          </SidebarLogoMobile>
      <SidebarMenuTop>
        <SidebarLink to="home" onClick={toggle}>
          Home
        </SidebarLink>
        <SidebarLink to="about" onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to="larry" onClick={toggle}>
          Larry
        </SidebarLink>
        <SidebarLink>
          <SidebarLogo>
            <Image src={logoSide} id="" />
          </SidebarLogo>
        </SidebarLink>
        <SidebarLink to="vector" onClick={toggle}>
          Vector
        </SidebarLink>
        <SidebarLink to="dailyUi" onClick={toggle}>
          DailyUI
        </SidebarLink>
        <SidebarLink to="daruma" onClick={toggle}>
          Daruma
        </SidebarLink>
        <SidebarLink to="contact" onClick={toggle}>
          Contact
        </SidebarLink>
      </SidebarMenuTop>
      {/* <SidebarMenuBottom>
        <SidebarLink>
        </SidebarLink>
        <SidebarLink to="vector" onClick={toggle}>
          Vector
        </SidebarLink>
        <SidebarLink to="dailyUi" onClick={toggle}>
          DailyUI
        </SidebarLink>
        <SidebarLink to="daruma" onClick={toggle}>
          Daruma
        </SidebarLink>
        <SidebarLink to="contact" onClick={toggle}>
          Contact
        </SidebarLink>
      </SidebarMenuBottom> */}
      {/* <SideBtnWrap>
          <SidebarRoute to="">Sign In</SidebarRoute>
        </SideBtnWrap> */}
    </SidebarContainer>
  );
};

export default Sidebar;
