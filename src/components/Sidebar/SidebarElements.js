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
  margin: 5rem 15px 0 0;
  border: thick double var(--secondary-bg);
  border-radius: 10px;
  background: var(--primaly-bg);
  transition: ${({ isOpen }) => (isOpen ? "0.3s ease" : "0.3s ease")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarMenu = styled.div`
  /* padding: 64px 0 24px 0; */
  padding: 24px 0;
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
  opacity: ${({ isOpen }) => (isOpen ? "0" : "100%")};

  @media screen and (max-width: 959.99px) {
    display: block;
    width: 48px;
    height: 48px;
    position: fixed;
    top: 20px;
    right: 15px;
    background-color: var(--primaly-bg);
    border-radius: 50%;

    .burger-menu-bg {
      padding-top: 20px;
    }

    #burger-menu {
      width: 30px;
      height: auto;
      position: fixed;
      top: 29px;
      right: 24px;
      /* -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 1s ease-in-out;
      -moz-transition: 1s ease-in-out;
      -o-transition: 1s ease-in-out;
      transition: 1s ease-in-out; */
      cursor: pointer;

      .burger-menu-bg {
        padding-top: 20px;
      }
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
      /* -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: 0.5s ease-in-out;
      -moz-transition: 0.5s ease-in-out;
      -o-transition: 0.5s ease-in-out;
      transition: 0.5s ease-in-out; */
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
      top: 12px;
      -webkit-transform: rotate(135deg);
      -moz-transform: rotate(135deg);
      -o-transform: rotate(135deg);
      transform: rotate(135deg);
    }

    #burger-menu.open span:nth-child(2) {
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }

    #burger-menu.open span:nth-child(3) {
      top: 12px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;
