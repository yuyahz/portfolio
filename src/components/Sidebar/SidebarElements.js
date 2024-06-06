import styled from "styled-components";
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

///// bar setting /////
export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 22147483638;
  color: var(--primary-txt-color);
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 960px) {
    display: none;
  }
  @media screen and (max-height: 540px) {
    font-size: 4.444vh;
  }
`;

export const SidebarWrapper = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2147483638;
  max-width: 80%;
  height: 100vh;
  border-left: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  transition: ${({ isOpen }) => (isOpen ? "0.3s ease" : "0.3s ease")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidebarItem = styled.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
  padding: 16px 0 16px 16px;
  margin-top: 32px;

  @media screen and (max-height: 770px) {
    padding: 1.2vh 0 1.2vh 1.2vh;
    margin-top: 4.156vh;
  }
  @media screen and (max-height: 540px) {
    margin-top: 2.5vh;
  }
`;

export const SidebarLink = styled(LinkS)`
  display: block;
  /* padding: 6px;
  margin-top: 32px; */
  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);

  &.active {
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    border-radius: 200px 5px 5px 200px;
    transform: translateX(9px);
    backface-visibility: hidden;
    padding: 16px;

    @media screen and (max-height: 540px) {
      padding: 2.9vh;
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
    background-color: var(--primary-bg);
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
