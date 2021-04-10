import React, { useState, useEffect } from "react";
import { TiEquals } from "react-icons/ti";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import * as AiIcons from "react-icons/ai";
import { HiMail } from "react-icons/hi";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavSNS,
  NavMail,
  Image,
} from "./NavbarElements";
import logo from "../../images/logo.png";

const Navbar = ({ toggle }) => {
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
    <>
      <IconContext.Provider value={{ color: "#838383" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome} isClicked={false}>
              <Image src={logo} id="" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <TiEquals />
            </MobileIcon>
            <NavSNS>
              <a target="_blank" href="https://dribbble.com/Hashirizaki">
                <AiIcons.AiOutlineDribbble />
              </a>
              <a target="_blank" href="https://www.behance.net/yuyahashirizaki">
                <AiIcons.AiFillBehanceSquare />
              </a>
              <a target="_blank" href="https://github.com/Yuya61">
                <AiIcons.AiFillGithub />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/yuya-hashirizaki/"
              >
                <AiIcons.AiFillLinkedin />
              </a>
            </NavSNS>
            <NavMenu>
              <NavItem>
                <NavLinks
                  className="aboutSec"
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="larrySec"
                  to="larry"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Larry
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="vectorSec"
                  to="vector"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Vector
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="uiSec"
                  to="dailyUi"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  DailyUI
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  className="darumaSec"
                  to="daruma"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={0}
                  activeClass="active"
                >
                  Daruma
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavMail>
              <a target="_blank" href="mailto:hashirizaki61@gmail.com">
                <HiMail />
              </a>
            </NavMail>
            {/* <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn> */}
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
