import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  NavContainer,
  NavWrapper,
  NavLogoSm,
  NavLogo,
  NavContentsWrapper,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import styled from "styled-components";

// Styled Logo component with conditional styling
const Logo = styled.h4`
  color: ${(props) =>
    props.isInParallaxOrContact
      ? "var(--fourth-txt-color)"
      : "var(--primary-txt-color)"};
`;

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isInParallaxOrContact, setIsInParallaxOrContact] = useState(false);

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
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <NavLogoSm to="/" onClick={toggleHome}>
        <Logo isInParallaxOrContact={isInParallaxOrContact}>
          Yuya Hashirizaki
        </Logo>
      </NavLogoSm>
      <NavContainer scrollNav={scrollNav}>
        <NavWrapper>
          <NavLogo to="/" onClick={toggleHome}>
            <Logo isInParallaxOrContact={isInParallaxOrContact}>
              Yuya Hashirizaki
            </Logo>
          </NavLogo>
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
                Home
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
          </NavContentsWrapper>
        </NavWrapper>
      </NavContainer>
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
//   NavContainer,
//   NavWrapper,
//   NavLogoSm,
//   NavLogo,
//   // MobileIcon,
//   NavContentsWrapper,
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
//       <NavContainer scrollNav={scrollNav}>
//         <NavWrapper>
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
//           <NavContentsWrapper>
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
//           </NavContentsWrapper>
//           {/* <NavMail>
//               <a target="_blank" href="mailto:hashirizaki61@gmail.com">
//                 <HiMail />
//               </a>
//             </NavMail> */}
//           {/* <NavBtn>
//               <NavBtnLink to="/signin">Sign In</NavBtnLink>
//             </NavBtn> */}
//         </NavWrapper>
//       </NavContainer>
//       {/* </IconContext.Provider> */}
//     </>
//   );
// };

// export default Navbar;
