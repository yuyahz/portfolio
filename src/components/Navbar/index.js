import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogoSm,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import logo from "../../images/logo.svg";
import styled from "styled-components";

// Styled Logo component with conditional styling
const Logo = styled.h4`
  color: ${(props) =>
    props.isInParallaxOrContactOrFooter
      ? "var(--primaly-bg)"
      : "var(--primary-txt-color)"};
`;

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isInParallaxOrContactOrFooter, setIsInParallaxOrContactOrFooter] =
    useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }

    // Check if the "parallax", "contact", or "footer" section is in view
    const parallaxSection = document.getElementById("parallax");
    const contactSection = document.getElementById("contact");
    const footerSection = document.getElementById("footer");

    if (parallaxSection || contactSection || footerSection) {
      const isInParallax =
        parallaxSection &&
        parallaxSection.getBoundingClientRect().top <= 0 &&
        parallaxSection.getBoundingClientRect().bottom >= 0;
      const isInContact =
        contactSection &&
        contactSection.getBoundingClientRect().top <= 0 &&
        contactSection.getBoundingClientRect().bottom >= 0;
      const isInFooter =
        footerSection &&
        footerSection.getBoundingClientRect().top <= 0 &&
        footerSection.getBoundingClientRect().bottom >= 0;
      setIsInParallaxOrContactOrFooter(
        isInParallax || isInContact || isInFooter
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      window.removeEventListener("scroll", changeNav);
    };
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavLogoSm to="/" onClick={toggleHome} isClicked={false}>
        <Logo
          src={logo}
          isInParallaxOrContactOrFooter={isInParallaxOrContactOrFooter}
        >
          Yuya Hashirizaki
        </Logo>
      </NavLogoSm>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome} isClicked={false}>
            <Logo
              src={logo}
              isInParallaxOrContactOrFooter={isInParallaxOrContactOrFooter}
            >
              Yuya Hashirizaki
            </Logo>
          </NavLogo>
          <NavMenu>
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
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="case1Sec"
                to="case1"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Riversol Empathy
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="case2Sec"
                to="case2"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Riversol Challenge
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="case3Sec"
                to="case3"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Riversol Reinforce
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="mpSec"
                to="mp"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Midnight Paloma
              </NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks
                className="larrySec"
                to="larry-pic"
                smooth={true}
                duration={700}
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
                to="vector-pic"
                smooth={true}
                duration={700}
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
                to="ui-pic"
                smooth={true}
                duration={700}
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
                to="daruma-pic"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Daruma
              </NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                className="worksSec"
                to="larry"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Works
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="contactSec"
                to="contact"
                smooth={true}
                duration={700}
                spy={true}
                exact="true"
                offset={0}
                activeClass="active"
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

// v1
// import React, { useState, useEffect } from "react";
// import { TiEquals } from "react-icons/ti";
// import { IconContext } from "react-icons/lib";
// import { animateScroll as scroll } from "react-scroll";
// import * as AiIcons from "react-icons/ai";
// import { HiMail } from "react-icons/hi";
// import {
//   Nav,
//   NavbarContainer,
//   NavLogoSm,
//   NavLogo,
//   // MobileIcon,
//   NavMenu,
//   NavItem,
//   NavLinks,
//   NavSNS,
//   NavMail,
//   Image,
// } from "./NavbarElements";
// import logo from "../../images/logo.svg";

// const Navbar = ({ toggle }) => {
//   const [scrollNav, setScrollNav] = useState(false);

//   const changeNav = () => {
//     if (window.scrollY >= 1) {
//       setScrollNav(true);
//     } else {
//       setScrollNav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeNav);
//   }, []);

//   const toggleHome = () => {
//     scroll.scrollToTop();
//   };

//   return (
//     <>
//       {/* <IconContext.Provider value={{ color: "var(--secondary-bg);" }}> */}
//       <NavLogoSm to="/" onClick={toggleHome} isClicked={false}>
//         {/* <Image className="logo" src={logo} id="" /> */}
//         <h4 className="logo" src={logo} id="">
//           Yuya Hashirizaki
//         </h4>
//       </NavLogoSm>
//       <Nav scrollNav={scrollNav}>
//         <NavbarContainer>
//           <NavLogo to="/" onClick={toggleHome} isClicked={false}>
//             {/* <Image className="logo" src={logo} id="" /> */}
//             <h4 className="logo" src={logo} id="">
//               Yuya Hashirizaki
//             </h4>
//           </NavLogo>
//           {/* <MobileIcon onClick={toggle}>
//               <TiEquals size={40} />
//             </MobileIcon> */}
//           {/* <NavSNS>
//               <a target="_blank" href="https://dribbble.com/Hashirizaki">
//                 <AiIcons.AiOutlineDribbble />
//               </a>
//               <a target="_blank" href="https://www.behance.net/yuyahashirizaki">
//                 <AiIcons.AiFillBehanceSquare />
//               </a>
//               <a target="_blank" href="https://github.com/Yuya61">
//                 <AiIcons.AiFillGithub />
//               </a>
//               <a
//                 target="_blank"
//                 href="https://www.linkedin.com/in/yuya-hashirizaki/"
//               >
//                 <AiIcons.AiFillLinkedin />
//               </a>
//             </NavSNS> */}
//           <NavMenu>
//             <NavItem>
//               <NavLinks
//                 className="aboutSec"
//                 to="about"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 About
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="case1Sec"
//                 to="case1"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Riversol Empathy
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="case2Sec"
//                 to="case2"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Riversol Challenge
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="case3Sec"
//                 to="case3"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Riversol Reinforce
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="mpSec"
//                 to="mp"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Midnight Paloma
//               </NavLinks>
//             </NavItem>
//             {/* <NavItem>
//               <NavLinks
//                 className="larrySec"
//                 to="larry-pic"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Larry
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="vectorSec"
//                 to="vector-pic"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Vector
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="uiSec"
//                 to="ui-pic"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 DailyUI
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="darumaSec"
//                 to="daruma-pic"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Daruma
//               </NavLinks>
//             </NavItem> */}
//             <NavItem>
//               <NavLinks
//                 className="worksSec"
//                 to="larry"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Works
//               </NavLinks>
//             </NavItem>
//             <NavItem>
//               <NavLinks
//                 className="contactSec"
//                 to="contact"
//                 smooth={true}
//                 duration={700}
//                 spy={true}
//                 exact="true"
//                 offset={0}
//                 activeClass="active"
//               >
//                 Contact
//               </NavLinks>
//             </NavItem>
//           </NavMenu>
//           {/* <NavMail>
//               <a target="_blank" href="mailto:hashirizaki61@gmail.com">
//                 <HiMail />
//               </a>
//             </NavMail> */}
//           {/* <NavBtn>
//               <NavBtnLink to="/signin">Sign In</NavBtnLink>
//             </NavBtn> */}
//         </NavbarContainer>
//       </Nav>
//       {/* </IconContext.Provider> */}
//     </>
//   );
// };

// export default Navbar;
