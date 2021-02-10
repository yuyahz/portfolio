import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLogo,
  Logo,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="larry" onClick={toggle}>
            Larry
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SidebarLogo>
        <Logo>Y</Logo>
      </SidebarLogo>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="vector" onClick={toggle}>
            Vector
          </SidebarLink>
          <SidebarLink to="dailyUi" onClick={toggle}>
            DailyUI
          </SidebarLink>
          <SidebarLink to="daruma" onClick={toggle}>
            Daruma
          </SidebarLink>
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to="">Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
