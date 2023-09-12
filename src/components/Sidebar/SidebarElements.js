import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
`;

export const SidebarWrapper = styled.aside`
  position: fixed;
  z-index: 999;
  width: max(30%, 170px);
  height: 100%;
  background: #fe0000;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

// export const CloseIcon = styled(FaRegTimesCircle)`
//   color: #ffffff;
//   cursor: pointer;
//   transition: 0.5s;

//   &:hover {
//     color: #fff;
//     transition: 1s cubic-bezier(0.33, 1, 0.68, 1);
//   }
// `;

export const Icon = styled.div`
  display: none;
  /* position: absolute;
  top: 1.3rem;
  right: 2rem;
  background: transparent;
  font-size: 1.7rem;
  outline: none; */
  @media screen and (max-width: 959.99px) {
    display: block;

    .burger-menu {
      width: 40px;
      height: 45px;
      position: fixed;
      top: 30px;
      right: 30px;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
      cursor: pointer;
    }

    .burger-menu span {
      display: block;
      position: absolute;
      height: 6px;
      width: 100%;
      background: ${({ darkBurger }) => (darkBurger ? "#fe0000" : "#ffffff")};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;
    }

    .burger-menu span:nth-child(1) {
      top: 0px;
    }

    .burger-menu span:nth-child(2) {
      top: 12px;
    }

    .burger-menu span:nth-child(3) {
      top: 24px;
    }

    .burger-menu.open span:nth-child(1) {
      top: 18px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    .burger-menu.open span:nth-child(2) {
      opacity: 0;
      left: -60px;
    }

    .burger-menu.open span:nth-child(3) {
      top: 18px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;

export const Logo = styled.div`
  font-size: 10rem;
  font-weight: 900;

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    font-size: 24px;
  }
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 60px);
  text-align: center;
`;

export const SidebarLink = styled(LinkS)`
  color: #ffffff;
  font-family: "GT";
  display: flex;
  padding-left: 24px;
  font-size: 24px;
  text-decoration: none;
  /* align-items: center;
  justify-content: center; */
  transition: cubic-bezier(0.65, 0, 0.16, 1);
  transition: 1s;
`;
