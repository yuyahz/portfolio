import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  SidebarWrapper,
  Icon,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
  SidebarTag,
  SidebarSocialItem,
  SidebarSocialIconLink,
} from "./SidebarElements";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";

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
            <SidebarTag
              to="case1"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              <p className="tagCopy">Case Study 1</p>
            </SidebarTag>
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
            <SidebarTag
              to="case2"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              <p className="tagCopy">Case Study 2</p>
            </SidebarTag>
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
            <SidebarTag
              to="case3"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              <p className="tagCopy">Case Study 3</p>
            </SidebarTag>
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
            <SidebarTag
              to="case4"
              onClick={toggle}
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={0}
              activeClass="active"
            >
              <p className="tagCopy">Case Study 4</p>
            </SidebarTag>
            <SidebarLink
              to="case4"
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
              to="works"
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
          <SidebarSocialItem>
            <SidebarSocialIconLink
              href="https://dribbble.com/yuya-hashirizaki"
              target="_blank"
              aria-label="dribbble"
            >
              <FaDribbble />
            </SidebarSocialIconLink>
            <SidebarSocialIconLink
              href="https://www.behance.net/yuyahashirizaki"
              target="_blank"
              aria-label="behance"
            >
              <FaBehance />
            </SidebarSocialIconLink>
            <SidebarSocialIconLink
              href="https://www.linkedin.com/in/yuya-hashirizaki"
              target="_blank"
              aria-label="linkedIn"
            >
              <FaLinkedinIn />
            </SidebarSocialIconLink>
          </SidebarSocialItem>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
