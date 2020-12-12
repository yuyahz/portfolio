import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#bbb" : "transparent")};
  /* left: ${({ sidebar }) => (sidebar ? "0" : "-100%")}; */
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  /* margin-top: -80px; */
  font-size: 1rem;
  width: 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);

  @media screen and (max-width: 960px) {
    transition: 0.6s cubic-bezier(0.65, 0, 0.16, 1);
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.3rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 30px;
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #444;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #999;
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 10px;
  outline: none;
  border: none;
  transition: cubic-bezier(0.65, 0, 0.16, 1);
  text-decoration: none;

  &:hover {
    transition: 0.6s cubic-bezier(0.65, 0, 0.16, 1);
    background: #999;
    color: #fff;
  }
`;
