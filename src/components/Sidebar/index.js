import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  Icon,
  // CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
// import logoSideMobile from "../../images/logoSide.png";
// import logoSide from "../../images/logoSide2.png";

const Sidebar = ({ isOpen, toggle, darkBurger }) => {
  return (
    <SidebarContainer>
      <Icon onClick={toggle} darkBurger={darkBurger}>
        <div id="burger-menu" class="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Icon>
      <SidebarWrapper isOpen={isOpen} onClick={toggle} ontouchstart="">
        <Icon onClick={toggle}>
          <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Icon>
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
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
