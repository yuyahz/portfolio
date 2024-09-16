import styled, { keyframes, css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

///// logo /////
const tapAnimation = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(0.99); }
  50% { transform: scale(0.98); }
  75% { transform: scale(0.99); }
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

export const SidebarLogo = styled(LinkR)`
  width: 90px;
  text-decoration: none;
  animation: ${tapTiltMoveShaking} 0.3s 6;

  &:active {
    animation: ${tapAnimation} 0.3s 3 forwards;
  }

  h4 {
    font-family: "GT";
    font-weight: 500;
    font-size: 1.5rem;

    @media only screen and (max-width: 540px) {
      font-size: 4.4vw;
    }
  }

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const Logo = styled.h4`
  color: ${(props) =>
    props.isInParallaxOrContact
      ? "var(--fourth-txt-color);"
      : "var(--primary-txt-color);"};
  pointer-events: ${(props) => (props.isInParallaxOrContact ? "auto" : "none")};
  text-shadow: ${(props) =>
    props.isInParallaxOrContact
      ? "1px 1px 5px var(--index-bg), -1px -1px 5px var(--index-bg)"
      : "none"};
`;

///// Sidebar setting /////
export const SidebarContainer = styled.aside`
  width: 100%;
  position: fixed;
  z-index: 1000;
  color: var(--primary-txt-color);
  font-size: 24px;
  font-weight: 500;

  @media screen and (min-width: 960.999px) {
    display: none;
  }
  @media screen and (max-height: 540px) {
    font-size: 4.444vh;
  }
`;

export const AutoHiding = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1002;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.hide ? "translateY(-100%)" : "translateY(0)")};
`;

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 30px;
`;

export const OverlayLogo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  top: 17.5px;
  left: 30px;
`;

export const SidebarWrapper = styled.aside`
  /* display: flex; */
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  max-width: 80%;
  height: 100vh;
  border-left: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  transition: ${({ isOpen }) => (isOpen ? "0.3s ease" : "0.3s ease")};
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  background-image: linear-gradient(0deg, transparent 15px, #fe000040 16px),
    linear-gradient(90deg, transparent 15px, #fe000040 16px);
  background-size: 16px 16px;
`;

export const SidebarMenu = styled.div`
  margin-top: 60px;
`;

export const SidebarItem = styled.div`
  width: 100%;
  border-bottom: solid 2px var(--secondary-bg);
  padding: 16px 0 16px 16px;
`;

export const SidebarLink = styled(LinkS)`
  display: block;
  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);

  .contactImg {
    width: 38px;
    padding-left: 9px;
  }

  &.active {
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    border-radius: 200px 5px 5px 200px;
    transform: translateX(9px);
    backface-visibility: hidden;
    padding: 6px 12px;

    @media screen and (max-height: 540px) {
      padding: 2.9vh;
    }
  }
`;

export const SidebarTag = styled(LinkS)`
  width: fit-content;
  border-radius: 50px;
  background-color: var(--index-bg);
  border: 1.5px solid var(--secondary-bg);
  margin-bottom: 4px;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);

  .tagCopy {
    color: var(--primaly-text-color);
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  &.active {
    padding: 4px 9px;
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    transform: translateX(4px);
    backface-visibility: hidden;

    .tagCopy {
      font-weight: 500;
    }
  }
`;

export const SidebarSocialItem = styled.div`
  display: flex;
  padding-bottom: 100px;
`;

export const SidebarSocialIconLink = styled.a`
  color: var(--secondary-bg);
  font-size: 24px;
  padding: 24px 16px 16px 16px;

  &:first-child {
    padding-left: 24px;
  }
`;

///// burger-menu /////
export const BurgerMenu = styled.div`
  @media screen and (max-width: 959.99px) {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    margin-left: auto;
    /* display: block; */
    width: 48px;
    height: 48px;
    /* position: fixed;
    top: 20px;
    right: 15px; */
    background-color: var(--index-bg);
    border-radius: 50%;
    border: solid 2px var(--secondary-bg);

    #burger-menu {
      width: 26px;
      height: 26px;
      /* position: fixed;
      top: 31px;
      right: 26px; */
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
      background: var(--secondary-bg);
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
      top: 10px;
    }

    #burger-menu span:nth-child(3) {
      top: 20px;
    }

    #burger-menu.open span:nth-child(1) {
      top: 10px;
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
      top: 10px;
      -webkit-transform: rotate(-135deg);
      -moz-transform: rotate(-135deg);
      -o-transform: rotate(-135deg);
      transform: rotate(-135deg);
    }
  }
`;
