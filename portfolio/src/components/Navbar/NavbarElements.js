import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "transparent" : "transparent")};
  font-size: 0.8rem;
  width: 40px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);

  @media screen and (max-width: 768px) {
    background-color: transparent;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #f7f7f7;
  filter: drop-shadow(1px 1px 1px rgba(1, 1, 1, 0.3));
  margin: 15px 0;
  justify-self: flex-start;
  flex-direction: column;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
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
    color: #f7f7f7;
  }
`;

export const NavSNS = styled.div`
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
  height: 150px;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
  height: 70px;
`;

export const NavLinks = styled(LinkS)`
  color: #f7f7f7;
  display: flex;
  flex-direction: column;
  transform: rotate(0.75turn);
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  cursor: pointer;

  &.active {
    color: #838383;
    border-bottom: solid 0.5px #838383;
  }
`;

export const NavMail = styled.div`
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.2));
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  cursor: pointer;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavBtn = styled.nav`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(LinkR)`
//   border-radius: 50px;
//   background: #999;
//   filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #fff;
//   font-size: 10px;
//   outline: none;
//   border: none;
//   transition: cubic-bezier(0.65, 0, 0.16, 1);
//   text-decoration: none;

//   &:hover {
//     transition: 0.6s cubic-bezier(0.65, 0, 0.16, 1);
//     background: #999;
//     color: #fff;
//   }
// `;
