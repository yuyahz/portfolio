import styled, { keyframes, css } from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

// AutoHiding setting + logo //
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
  width: 90px;
  text-decoration: none;

  &:hover {
    animation: ${hoverShaking} 0.3s;
    animation-iteration-count: 6;
  }

  h4 {
    font-family: "GT";
    font-weight: 500;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 960px) {
    margin: 10px 0 0 10px;
    width: 60px;
  }
`;

export const LogoTop = styled.h4`
  color: var(--primary-txt-color);
`;

export const LogoBottom = styled.h4`
  color: var(--fourth-txt-color);
  opacity: ${(props) => (props.isInParallaxOrContact ? 1 : 0)};
  pointer-events: ${(props) => (props.isInParallaxOrContact ? "auto" : "none")};
  text-shadow: ${(props) =>
    props.isInParallaxOrContact ? "1px 1px 6px var(--index-bg)" : "none"};
  transform: ${(props) =>
    props.isInParallaxOrContact ? "translateY(0)" : "translateY(-20px)"};
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.87, 0, 0.13, 1),
    color 0.4s ease, text-shadow 0.4s ease;
`;

export const AutoHidingWrapper = styled.div`
  width: 120px;
  height: 78px;
  margin-left: 40px;
`;

export const AutoHiding = styled.div`
  position: sticky;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.hide ? "translateY(-130%)" : "translateY(0)")};
`;

export const OverlayLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 120px;
`;

// VerticalNavbar setting //
export const NavContainer = styled.nav`
  /* width: auto; */
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  color: var(--primary-txt-color);
  z-index: 1000;

  transition: transform 0.3s cubic-bezier(0.87, 0, 0.13, 1);
  ${(props) =>
    props.animateNavbar
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(-100%);
        `}

  @media screen and (max-width: 960px) {
    display: none;
  }
  @media screen and (max-height: 768px) {
    font-size: 1.823vh;
  }
  @media screen and (max-height: 630px) {
    width: 13.3vh;
  }
`;

export const NavWrapper = styled.ul`
  width: 80px;
  height: 100vh;
  position: relative;
  max-width: 960px;
  border-right: solid 2px var(--secondary-bg);
  background-color: var(--primary-bg);
`;

export const NavContentsWrapper = styled.li`
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
  margin-left: 100px;
  padding: 18px 16px;
  transform: translateX(-100px);
  font-size: 12px;

  @media screen and (max-height: 500px) {
    font-size: 2.4vh;
  }

  @media screen and (max-height: 510px) {
    padding: 16px;
  }

  &.active {
    font-weight: 700;
    /* color: var(--fourth-txt-color); */
    background-color: var(--index-bg);
    border-radius: 0px 15px 15px 0px;
    box-shadow: var(--primary-shadow);
    border: 2px solid var(--secondary-bg);
    margin: 6px 0;
    padding: 25%;
    height: 45vh;
    transition: transform 0.6s cubic-bezier(0.87, 0, 0.13, 1);
    transform: translateX(-6px);
    backface-visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(0deg, transparent 15px, #fe000070 16px),
      linear-gradient(90deg, transparent 15px, #fe000070 16px);
    background-size: 16px 16px;

    @media screen and (max-height: 630px) {
      background-image: linear-gradient(0deg, transparent 7px, #fe000070 8px),
        linear-gradient(90deg, transparent 7px, #fe000070 8px);
      background-size: 8px 8px;
    }

    //dinamic nav copy after selected//
    font-size: 0;
    .hm::before {
      content: "hi! I'm Yuya:)";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .ab::before {
      content: "Passion as a Designer";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .case1::before {
      content: "Latest Practice";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    .wk::before {
      content: "Achieved Projects";
      font-size: 12px;
      @media screen and (max-height: 768px) {
        font-size: 1.563vh;
      }
    }
    @media screen and (max-height: 935px) {
      height: 40vh;
    }
    @media screen and (max-height: 768px) {
      height: 30vh;
    }
  }
`;

export const SocialItem = styled.div`
  width: 100%;
  border-bottom: dotted 2px var(--secondary-bg);
  &&:last-child {
    border-bottom: none;
  }

  @media screen and (max-height: 673px) {
    border-bottom: none;
  }
`;

export const SocialIcon = styled.div`
  position: absolute;
  bottom: 0;
  cursor: pointer;
  text-decoration: none;
  border-top: dotted 2px var(--secondary-bg);
  width: 100%;
  height: auto;
  @media screen and (min-height: 673px) {
    border-top: dotted 2px var(--secondary-bg);
  }
`;

export const SocialIconLink = styled.a`
  display: block;
  text-align: center;
  color: var(--secondary-bg);
  font-size: 20px;
  padding: 16px 16px 6px 16px;

  @media screen and (max-height: 768px) {
    font-size: 1.823vh;
  }
  @media screen and (max-height: 673px) {
    display: none;
  }
`;

export const NavLinksContact = styled(LinkS)`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  padding: 18px 45px;
  margin-left: 80px;
  transform: translateX(-90px);
  transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  @media screen and (max-height: 500px) {
    font-size: 2.4vh;
  }

  .contactImg {
    padding-bottom: 6px;
  }

  @media screen and (max-height: 630px) {
    padding: 2.6vh 6vh;
    margin-left: 90px;
    .contactImg {
      width: 2vw;
    }
  }

  &.active {
    font-weight: 700;
    color: var(--fourth-txt-color);
    background-color: var(--secondary-bg);
    border-radius: 0px 15px 15px 0px;
    box-shadow: var(--primary-shadow);
    border: 1.5px solid var(--secondary-bg);
    margin: 6px 0;
    padding: 25%;
    height: fit-content;
    transition: transform 0.8s cubic-bezier(0.87, 0, 0.13, 1);
    transform: translateX(-6px);
    backface-visibility: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1280px) {
      height: 170px;
      transform: translateX(-3px);
    }
  }
`;
