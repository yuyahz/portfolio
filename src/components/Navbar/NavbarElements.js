import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const tapAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const tapTiltMoveShaking = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(5px, 5px) rotate(5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  75% {
    transform: translate(-5px, 5px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

const hoverShaking = keyframes`
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(5px, 5px) rotate(5deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  75% {
    transform: translate(-5px, 5px) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
`;

export const NavLogo = styled(LinkR)`
  position: fixed;
  top: 0;
  left: 10;
  margin: 22px 0 0 120px;
  // for txt logo //
  padding: 10px 25px;
  height: auto;
  text-decoration: none;

  &:hover {
    animation: ${hoverShaking} 0.3s;
    animation-iteration-count: 6;
  }

  h4 {
    font-family: "GT";
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: 960px) {
      font-size: 5vw;
    }
  }

  @media screen and (max-width: 960px) {
    margin: 10px 0 0 10px;
    width: 60px;
  }
`;

export const NavLogoSm = styled(LinkR)`
  position: fixed;
  /* margin: 36px 0 0 6.25vw; */
  // for txt logo //
  margin: 22px 0 0 2.5vw;
  /* background-color: var(--primary-bg);
  border-radius: 70px; */
  // for v1 image logo //
  /* width: 70px; */
  height: auto;
  z-index: 100;
  text-decoration: none;
  animation: ${tapTiltMoveShaking} 0.3s 6;

  &:active {
    animation: ${tapAnimation} 0.3s 3 forwards;
  }

  h4 {
    // for txt logo //
    padding: 10px 12px;
    /* color: var(--primary-txt-color); */
    font-family: "GT";
    font-weight: 500;
    font-size: 2rem;

    @media only screen and (max-width: 960px) {
      font-size: 5vw;
    }
  }

  @media screen and (min-width: 960.999px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  width: 100px;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  font-size: 14px;
  color: var(--primary-txt-color);
  border-right: solid 2px var(--secondary-bg);
  background-color: var(--primary-bg);
  z-index: 22147483638;

  @media screen and (max-width: 1280px) {
    width: 70px;
    font-size: 12px;
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-height: 768px) {
    font-size: 1.823vh;
  }
  @media screen and (max-height: 630px) {
    width: 13.021vh;
  }
`;

export const NavWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* padding: 15px 0 15px 15px; */
  margin-top: 80px;
  height: 100vh;
  z-index: 1;
  width: 100%;
  max-width: 960px;

  @media screen and (max-height: 768px) {
    margin-top: 16px;
  }
`;

export const NavContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  margin-top: 24px;
  padding: 6px;
  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);

  @media screen and (max-height: 510px) {
    margin-top: 16px;
  }

  &.active {
    font-weight: 700;
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    border-radius: 5px 15px 15px 5px;
    margin: 6px 0;
    padding: 25%;
    height: 60vh;
    transform: translateX(-8px);
    backface-visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1280px) {
      height: 170px;
      transform: translateX(-3px);
    }
    @media screen and (max-height: 630px) {
      height: 20vh;
    }
  }
`;

export const NavMail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2.5rem;
  cursor: pointer;
  align-items: center;
  padding-bottom: 1rem;
`;

export const Image = styled.img`
  max-width: 100%;
  padding-top: 1.5rem;

  @media screen and (max-width: 960px) {
    height: 30vh;
  }
`;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 959.99px) {
//     color: var(--primary-txt-color);
//     display: block;
//     position: absolute;
//     top: 40px;
//     right: 15px;
//     transform: translate(-100%, 60%);
//     font-size: 1.7rem;
//     cursor: pointer;
//   }
// `;

// export const NavSNS = styled.div`
//   height: 140px;
//   font-size: 1.3rem;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: column;
//   cursor: pointer;
//   align-items: center;

//   @media screen and (max-width: 896px) {
//     display: none;
//   }
// `;

// v1
// import styled, { keyframes } from "styled-components";
// // import { motion } from "framer-motion";
// import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

// export const Nav = styled.nav`
//   font-size: 1rem;
//   color: var(--primary-txt-color);
//   width: 120px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   z-index: 22147483638;
//   transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);

//   @media screen and (max-width: 960px) {
//     display: none;
//   }

//   @media screen and (max-height: 768px) {
//     font-size: 2.22vh;
//   }
// `;

// const tapAnimation = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(0.9); }
//   100% { transform: scale(1); }
// `;

// const tapTiltMoveShaking = keyframes`
//   0% {
//     transform: translate(0, 0) rotate(0deg);
//   }
//   25% {
//     transform: translate(5px, 5px) rotate(5deg);
//   }
//   50% {
//     transform: translate(0, 0) rotate(0deg);
//   }
//   75% {
//     transform: translate(-5px, 5px) rotate(-5deg);
//   }
//   100% {
//     transform: translate(0, 0) rotate(0deg);
//   }
// `;

// export const NavLogoSm = styled(LinkR)`
//   position: fixed;
//   /* margin: 36px 0 0 6.25vw; */
//   // for txt logo //
//   margin: 22px 0 0 2.5vw;
//   /* background-color: var(--primary-bg);
//   border-radius: 70px; */
//   // for v1 image logo //
//   /* width: 70px; */
//   height: auto;
//   z-index: 22147483638;
//   text-decoration: none;
//   animation: ${tapTiltMoveShaking} 0.3s 10;

//   &:active {
//     animation: ${tapAnimation} 0.3s 3 forwards;
//   }

//   h4 {
//     // for txt logo //
//     padding: 10px 12px;
//     /* color: var(--primary-txt-color); */
//     font-family: "GT";
//     font-weight: 500;
//     font-size: 2rem;

//     @media only screen and (max-width: 960px) {
//       font-size: 5vw;
//     }
//   }

//   @media screen and (min-width: 960px) {
//     display: none;
//   }

//   @media screen and (max-width: 960px) {
//     display: block;
//   }

//   @media screen and (max-width: 430px) {
//     /* margin: 36px 0 0 8.5vw; */
//   }
// `;

// export const NavLogo = styled(LinkR)`
//   position: fixed;
//   top: 0;
//   left: 10;
//   margin: 22px 0 0 350px;
//   // for txt logo //
//   padding: 10px 25px;
//   /* background-color: var(--primary-bg);
//   border-radius: 70px; */
//   // for v1 image logo //
//   /* margin: 20px 0 0 200px; */
//   /* width: 70px; */
//   height: auto;
//   text-decoration: none;

//   &:hover {
//     animation: tilt-move-shaking 0.3s;
//     animation-iteration-count: 10;
//   }

//   h4 {
//     /* color: var(--primary-txt-color); */
//     font-family: "GT";
//     font-weight: 500;
//     font-size: 2rem;

//     @media only screen and (max-width: 960px) {
//       font-size: 5vw;
//     }
//   }

//   // for v1 image logo //
//   /* img:hover {
//     animation: tilt-move-shaking 0.3s;
//     animation-iteration-count: infinite;
//   } */

//   @keyframes tilt-move-shaking {
//     0% {
//       transform: translate(0, 0) rotate(0deg);
//     }
//     25% {
//       transform: translate(5px, 5px) rotate(5deg);
//     }
//     50% {
//       transform: translate(0, 0) rotate(0deg);
//     }
//     75% {
//       transform: translate(-5px, 5px) rotate(-5deg);
//     }
//     100% {
//       transform: translate(0, 0) rotate(0deg);
//     }
//   }

//   @media screen and (max-width: 960px) {
//     margin: 10px 0 0 10px;
//     width: 60px;
//   }
// `;

// export const NavbarContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   z-index: 1;
//   width: 100%;
//   padding: 24px;
//   max-width: 960px;
// `;

// // export const MobileIcon = styled.div`
// //   display: none;

// //   @media screen and (max-width: 959.99px) {
// //     color: var(--primary-txt-color);
// //     display: block;
// //     position: absolute;
// //     top: 40px;
// //     right: 15px;
// //     transform: translate(-100%, 60%);
// //     font-size: 1.7rem;
// //     cursor: pointer;
// //   }
// // `;

// // export const NavSNS = styled.div`
// //   height: 140px;
// //   font-size: 1.3rem;
// //   display: flex;
// //   justify-content: space-between;
// //   flex-direction: column;
// //   cursor: pointer;
// //   align-items: center;

// //   @media screen and (max-width: 896px) {
// //     display: none;
// //   }
// // `;

// export const NavMenu = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: var(--primary-bg);
//   border-radius: 50px;
//   padding: 30px 6px 30px 0;

//   @media screen and (max-height: 768px) {
//     padding: 20px 4px;
//   }

//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.div`
//   height: auto;

//   a:hover {
//     animation: nav-move-shaking 0.3s;
//     animation-iteration-count: 5;
//   }

//   @keyframes nav-move-shaking {
//     0% {
//       transform: translate(0, 0) rotate(270deg);
//     }
//     25% {
//       transform: translate(5px, 5px) rotate(270deg);
//     }
//     50% {
//       transform: translate(0, 0) rotate(270deg);
//     }
//     75% {
//       transform: translate(-5px, 5px) rotate(270deg);
//     }
//     100% {
//       transform: translate(0, 0) rotate(270deg);
//     }
//   }

//   @media screen and (max-height: 768px) {
//     max-width: 60px;
//   }
//   /* @media screen and (max-height: 466px) {
//     max-width: 30px;
//   } */

//   .aboutSec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }

//   .case1Sec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }

//   .case2Sec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }

//   .case3Sec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }

//   .mpSec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }

//   /* .vectorSec {
//     margin: 34px 0;
//   }

//   .uiSec {
//     margin: 40px 0;
//   }

//   .darumaSec {
//     margin: 40px 0;
//   } */

//   .worksSec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }

//   .contactSec {
//     margin: 34px 0;

//     @media screen and (max-height: 768px) {
//       margin: 3.6vh 0;
//     }
//   }
// `;

// export const NavLinks = styled(LinkS)`
//   display: flex;
//   /* transform: rotate(0.75turn); */
//   text-decoration: none;
//   // for txt logo //
//   /* padding: 0.1rem 0.1rem; */
//   cursor: pointer;

//   &.active {
//     /* text-align: center; */
//     font-family: "GT";
//     font-weight: 700;
//     /* font-size: 1.3rem; */
//     padding-bottom: 6px;
//     border-bottom: double 3px var(--secondary-bg);
//     transition: 0.2 cubic-bezier(0.33, 1, 0.68, 1);
//     animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
//     transform: translate3d(0, 0, 0);
//     backface-visibility: hidden;
//     /* transform: rotate(0.9turn); */

//     @keyframes shake {
//       90% {
//         transform: translate3d(-1px, 0, 0);
//       }

//       70% {
//         transform: translate3d(2px, 0, 0);
//       }

//       40% {
//         transform: translate3d(-4px, 0, 0);
//       }

//       0% {
//         transform: translate3d(4px, 0, 0);
//       }
//     }

//     @media screen and (max-height: 768px) {
//       font-size: 2.22vh;
//     }
//   }
// `;

// export const NavMail = styled.div`
//   display: flex;
//   flex-direction: column;
//   font-size: 2.5rem;
//   cursor: pointer;
//   align-items: center;
//   padding-bottom: 1rem;

//   @media screen and (max-width: 896px) {
//     display: none;
//   }
// `;

// export const Image = styled.img`
//   max-width: 100%;
//   padding-top: 1.5rem;

//   @media screen and (max-width: 960px) {
//     max-width: 90%;
//     padding-top: 1.5rem;
//     padding-top: 0;
//   }
// `;
