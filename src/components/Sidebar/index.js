import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  SidebarWrapper,
  Icon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, darkBurger }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

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
          <SidebarLink
            to="home"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            About
          </SidebarLink>
          <SidebarLink
            to="case1"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Case Study 1
          </SidebarLink>
          <SidebarLink
            to="case2"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Case Study 2
          </SidebarLink>
          <SidebarLink
            to="case3"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Case Study 3
          </SidebarLink>
          <SidebarLink
            to="mp"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Midnight Paloma
          </SidebarLink>
          <SidebarLink
            to="larry"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Work
          </SidebarLink>
          <SidebarLink
            to="contact"
            onClick={toggle}
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={0}
            activeClass="active"
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
