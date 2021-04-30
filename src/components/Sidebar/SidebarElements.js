import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";
// import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #010606;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaRegTimesCircle)`
  color: #cecece;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #fff;
    transition: 1s cubic-bezier(0.33, 1, 0.68, 1);
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.3rem;
  left: 1.9rem;
  background: transparent;
  font-size: 1.7rem;
  outline: none;
`;

export const SidebarLogoMobile = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -100;

  @media screen and (min-width: 520px) {
    display: none;
  }
`;

export const SidebarLogo = styled.div`
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  z-index: -100;

  @media screen and (max-width: 520px) {
    display: none;
  }
`;

export const Logo = styled.div`
  font-size: 10rem;
  font-weight: 900;

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    font-size: 1rem;
  }
`;

export const SidebarMenuTop = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 40px);
  text-align: center;
`;

export const SidebarMenuBottom = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 40px);
  text-align: center;
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  font-weight: 700;
  letter-spacing: 0.5rem;
  text-indent: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  text-decoration: none;
  list-style: none;
  transition: cubic-bezier(0.65, 0, 0.16, 1);
  color: #cecece;
  transition: 0.5s;

  &:hover {
    color: #fff;
    filter: drop-shadow(0.5px 0.5px 7px #fff);
    transition: 1s cubic-bezier(0.33, 1, 0.68, 1);
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 200px;

  @media screen and (max-width: 520px) {
    width: 350px;
  }
`;
