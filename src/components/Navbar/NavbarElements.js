import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  font-size: 1.3rem;
  width: 120px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 22147483638;
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavLogoSm = styled(LinkR)`
  position: fixed;
  margin: 36px 0 0 6.25vw;
  width: 70px;
  height: auto;
  z-index: 22147483638;

  @media screen and (min-width: 960px) {
    display: none;
  }

  @media screen and (max-width: 960px) {
    display: block;
  }

  @media screen and (max-width: 430px) {
    margin: 36px 0 0 8.5vw;
  }
`;

export const NavLogo = styled(LinkR)`
  position: fixed;
  top: 0;
  left: 10;
  margin: 20px 0 0 200px;
  width: 70px;
  height: auto;

  img:hover {
    animation: tilt-n-move-shaking 0.3s;
    animation-iteration-count: infinite;
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media screen and (max-width: 960px) {
    margin: 10px 0 0 10px;
    width: 60px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 960px;
`;

// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 959.99px) {
//     color: #fe0000;
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

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  height: auto;

  .aboutSec {
    margin: 30px 0;
  }

  .case1Sec {
    margin: 30px 0;
  }

  .case2Sec {
    margin: 30px 0;
  }

  .case3Sec {
    margin: 30px 0;
  }

  .mpSec {
    margin: 30px 0;
  }

  /* .vectorSec {
    margin: 30px 0;
  }

  .uiSec {
    margin: 40px 0;
  }

  .darumaSec {
    margin: 40px 0;
  } */

  .worksSec {
    margin: 30px 0;
  }

  .contactSec {
    margin: 40px 0;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fe0000;
  display: flex;
  transform: rotate(0.75turn);
  text-decoration: none;
  padding: 0.1rem 0.1rem;
  cursor: pointer;

  &.active {
    text-align: center;
    font-weight: 900;
    padding: 10px;
    border-bottom: solid 2px #fe0000;
    /* border: solid 2px #fe0000;
    background-color: white;
    border-radius: 50px; */
    transition: 0.2 cubic-bezier(0.33, 1, 0.68, 1);
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    transform: rotate(0.87turn);

    @keyframes shake {
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      70% {
        transform: translate3d(2px, 0, 0);
      }

      40% {
        transform: translate3d(-4px, 0, 0);
      }

      0% {
        transform: translate3d(4px, 0, 0);
      }
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

  @media screen and (max-width: 896px) {
    display: none;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  padding-top: 1.5rem;

  @media screen and (max-width: 960px) {
    max-width: 90%;
    padding-top: 1.5rem;
    padding-top: 0;
  }
`;
