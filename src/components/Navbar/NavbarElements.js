import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) =>
    scrollNav ? "transparent" : "transparent"}; */
  font-size: 1.3rem;
  width: 100px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);

  @media screen and (max-width: 896px) {
    background-color: transparent;
  }
`;

export const NavLogo = styled(LinkR)`
  position: fixed;
  top: 0;
  left: 10;
  width: 30px;
  height: 55px;

  @media screen and (max-width: 896px) {
    display: none;
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
  max-width: 1100px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 896px) {
    display: block;
    position: absolute;
    top: 0;
    right: -10px;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
  }
`;

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

  @media screen and (max-width: 896px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  height: auto;

  .aboutSec {
    margin: 34px 0;
  }

  .larrySec {
    margin: 34px 0;
  }

  .vectorSec {
    margin: 34px 0;
  }

  .uiSec {
    margin: 44px 0;
  }

  .darumaSec {
    margin: 44px 0;
  }

  .contactSec {
    margin: 44px 0;
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
    font-weight: 900;
    padding: 10px;
    border: solid 1px #fe0000;
    background-color: white;
    border-radius: 34px;
    transition: 1s cubic-bezier(0.33, 1, 0.68, 1);
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    transform: rotate(0.87turn);

    @keyframes shake {
      90% {
        transform: translate3d(-1px, 0, 0);
      }

      80% {
        transform: translate3d(2px, 0, 0);
      }

      70% {
        transform: translate3d(-4px, 0, 0);
      }

      60% {
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
`;
