import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  border: solid 2px #010606;
  background: ${({ btnColor }) => (btnColor ? "#ffffff" : "#ffffff")};
  white-space: nowrap;
  padding: 10px 25px;
  color: ${({ dark }) => (dark ? "#010606" : "#010606")};
  font-size: 14px;
  font-weight: normal;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);
  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24); */

  &:hover {
    transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);
    background: ${({ btnColor }) => (btnColor ? "#010606" : "#010606")};
    color: ${({ dark }) => (dark ? "#ffffff" : "#ffffff")};
    /* box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); */
  }
`;
