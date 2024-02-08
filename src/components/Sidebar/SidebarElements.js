import styled from "styled-components";
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

///// bar setting /////
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 22147483638;
`;

export const SidebarWrapper = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2147483638;
  max-width: 260px;
  margin: 1rem 1rem 0 0;
  border: thick double var(--secondary-bg);
  border-radius: 10px;
  background: #fffbf4;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarMenu = styled.div`
  padding: 64px 0 24px 0;
`;

export const SidebarLink = styled(LinkS)`
  div,
  p {
    color: var(--primary-txt-color);
    font-size: 24px;
    font-weight: 500;
    padding: 10px 16px;

    @media screen and (max-width: 359px) {
      font-size: 6.685vw;
    }
  }
`;

///// icon /////
export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 959.99px) {
    display: block;

    #burger-menu {
      width: 40px;
      height: 45px;
      position: fixed;
      top: 30px;
      right: 8.5vw;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 1s ease-in-out;
      -moz-transition: 1s ease-in-out;
      -o-transition: 1s ease-in-out;
      transition: 1s ease-in-out;
      cursor: pointer;
    }

    #burger-menu span {
      display: block;
      position: absolute;
      height: 6px;
      width: 100%;
      background: ${({ darkBurger }) =>
        darkBurger ? "var(--secondary-bg);" : "#ffffff"};
      z-index: ${({ isOpen }) => (isOpen ? "100" : "0")};
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out;
    }

    #burger-menu span:nth-child(1) {
      top: 0px;
    }

    #burger-menu span:nth-child(2) {
      top: 12px;
    }

    #burger-menu span:nth-child(3) {
      top: 24px;
    }

    #burger-menu.open span:nth-child(1) {
      top: 18px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    #burger-menu.open span:nth-child(2) {
      opacity: 0;
      left: -660px;
    }

    #burger-menu.open span:nth-child(3) {
      top: 18px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;
