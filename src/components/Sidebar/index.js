import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  Icon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, darkBurger }) => {
  return (
    <SidebarContainer>
      <Icon onClick={toggle} darkBurger={darkBurger}>
        <div id="burger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Icon>
      <SidebarWrapper isOpen={isOpen} onClick={toggle} ontouchstart="">
        <Icon onClick={toggle} darkBurger={darkBurger}>
          <div id="burger-menu" className="open">
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
          <SidebarLink to="case_1" onClick={toggle}>
            Case Study 1
          </SidebarLink>
          <SidebarLink to="case_2" onClick={toggle}>
            Case Study 2
          </SidebarLink>
          <SidebarLink to="case_3" onClick={toggle}>
            Case Study 3
          </SidebarLink>
          <SidebarLink to="mp" onClick={toggle}>
            Work
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
