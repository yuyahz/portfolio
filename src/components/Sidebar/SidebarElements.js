import styled from "styled-components";
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 99;
`;

export const SidebarWrapper = styled.aside`
  position: fixed;
  z-index: 999;
  width: max(30%, 230px);
  height: calc(100% - 6rem);
  margin: 1rem 1rem 0 0;
  border: thick double #fe0000;
  border-radius: 10px;
  background: #fffbf4;
  display: grid;
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-height: 490px) {
    min-height: 396px;
  }
`;

export const Icon = styled.div`
  display: none;

  @media screen and (max-width: 959.99px) {
    display: block;

    #burger-menu {
      width: 40px;
      height: 45px;
      position: fixed;
      top: 36px;
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
      background: ${({ darkBurger }) => (darkBurger ? "#fe0000" : "#ffffff")};
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

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 58px);
  text-align: center;
`;

export const SidebarLink = styled(LinkS)`
  color: #fe0000;
  font-family: "GT";
  font-weight: 600;
  display: flex;
  padding: 0 16px;
  font-size: 24px;
  text-decoration: none;
  /* align-items: center;
  justify-content: center; */
  transition: cubic-bezier(0.65, 0, 0.16, 1);
  transition: 1s;
`;
