import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  LogoTop,
  LogoBottom,
  OverlayLogo,
  AutoHiding,
  SidebarContainer,
  SidebarWrapper,
  SidebarHeader,
  SidebarLogo,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
  SidebarTag,
  SidebarSocialItem,
  SidebarSocialIconLink,
  BurgerMenu,
} from "./SidebarElements";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";

const Sidebar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isInParallaxOrContact, setIsInParallaxOrContact] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hideAutoHidingSection, setHideAutoHidingSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;
      let coefficient = 0.95; // Default coefficient

      // Adjust coefficient for small screens
      if (window.innerWidth < 960) {
        coefficient = 0.99;
      }

      const scrolledMostOfThePage =
        window.scrollY >= (documentHeight - windowHeight) * coefficient;

      if (scrolledMostOfThePage) {
        setIsInParallaxOrContact(true);
      } else {
        setIsInParallaxOrContact(false);
      }

      // Auto-hide logic
      if (window.scrollY > lastScrollY && window.scrollY >= 100) {
        setHideAutoHidingSection(true);
      } else {
        setHideAutoHidingSection(false);
      }
      setLastScrollY(window.scrollY);

      // Show sidebar on scroll
      if (window.scrollY >= 100) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <AutoHiding hide={hideAutoHidingSection}>
        <SidebarHeader>
          <SidebarLogo to="/" onClick={toggleHome}>
            <LogoTop isInParallaxOrContact={isInParallaxOrContact}>
              Yuya Hashirizaki
            </LogoTop>
          </SidebarLogo>
          <BurgerMenu isOpen={isOpen} onClick={toggle}>
            <div id="burger-menu" className={isOpen ? "open" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </BurgerMenu>
        </SidebarHeader>
      </AutoHiding>

      {/* <OverlayLogo>
        <SidebarLogo to="/" onClick={toggleHome}>
          <LogoBottom isInParallaxOrContact={isInParallaxOrContact}>
            Yuya Hashirizaki
          </LogoBottom>
        </SidebarLogo>
      </OverlayLogo> */}

      <SidebarWrapper isOpen={isOpen} onClick={toggle}>
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
        </SidebarMenu>
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
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
