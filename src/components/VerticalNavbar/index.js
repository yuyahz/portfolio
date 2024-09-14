import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  LogoTop,
  LogoBottom,
  OverlayLogo,
  AutoHidingWrapper,
  AutoHiding,
  NavContainer,
  NavWrapper,
  NavLogo,
  NavContentsWrapper,
  NavItem,
  NavLinks,
  NavLinksContact,
  SocialItem,
  SocialIcon,
  SocialIconLink,
} from "./VerticalNavbarElements";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";

const VerticalNavbar = ({ toggle, animateNavbar }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isInParallaxOrContact, setIsInParallaxOrContact] = useState(false);
  const [hideAutoHidingSection, setHideAutoHidingSection] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <>
      <NavContainer scrollNav={scrollNav} animateNavbar={animateNavbar}>
        <NavWrapper>
          <NavContentsWrapper>
            <NavItem>
              <NavLinks
                to="home"
                onClick={toggle}
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                <p className="hm">Home</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="aboutSec"
                to="about"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                <p className="ab">About</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="case1Sec"
                to="caseStudy"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                <p className="case1">Case Study</p>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="worksSec"
                to="works"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                <p className="wk">Works</p>
              </NavLinks>
            </NavItem>

            <SocialIcon>
              <SocialItem>
                <SocialIconLink
                  href="https://dribbble.com/yuya-hashirizaki"
                  target="_blank"
                  aria-label="dribbble"
                >
                  <FaDribbble />
                </SocialIconLink>
              </SocialItem>
              <SocialItem>
                <SocialIconLink
                  href="https://www.behance.net/yuyahashirizaki"
                  target="_blank"
                  aria-label="behance"
                >
                  <FaBehance />
                </SocialIconLink>
              </SocialItem>
              <SocialItem>
                <SocialIconLink
                  href="https://www.linkedin.com/in/yuya-hashirizaki"
                  target="_blank"
                  aria-label="linkedIn"
                >
                  <FaLinkedinIn />
                </SocialIconLink>
              </SocialItem>
              <SocialItem>
                <NavLinksContact
                  className="contactSec"
                  to="contact"
                  smooth={true}
                  duration={700}
                  spy={true}
                  exact="true"
                  offset={-200}
                  activeClass="active"
                >
                  <img
                    className="contactImg"
                    src="https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"
                  ></img>
                  Contact
                </NavLinksContact>
              </SocialItem>
            </SocialIcon>
          </NavContentsWrapper>
        </NavWrapper>

        <AutoHidingWrapper>
          <AutoHiding hide={hideAutoHidingSection}>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoTop>Yuya Hashirizaki</LogoTop>
            </NavLogo>
          </AutoHiding>

          <OverlayLogo>
            <NavLogo to="/" onClick={toggleHome}>
              <LogoBottom isInParallaxOrContact={isInParallaxOrContact}>
                Yuya Hashirizaki
              </LogoBottom>
            </NavLogo>
          </OverlayLogo>
        </AutoHidingWrapper>
      </NavContainer>
    </>
  );
};

export default VerticalNavbar;
