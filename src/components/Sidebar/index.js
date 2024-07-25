import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  SidebarWrapper,
  Icon,
  SidebarMenu,
  SidebarItem,
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
      <Icon isOpen={isOpen} onClick={toggle} darkBurger={darkBurger}>
        <div id="burger-menu">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
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
          <SidebarItem>
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
          </SidebarItem>
          <SidebarItem>
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
          </SidebarItem>
          <SidebarItem>
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
              Riversol Empathy
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
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
              Riversol Challenge
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
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
              Riversol Reinforce
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
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
          </SidebarItem>
          <SidebarItem>
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
          </SidebarItem>
          <SidebarItem>
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
              <img
                className="contactImg"
                src="https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"
              ></img>
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
