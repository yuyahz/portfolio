import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ btnColor }) => (btnColor ? "#fff" : "#010606")};
  white-space: nowrap;
  padding: 10px 25px;
  color: ${({ dark }) => (dark ? "#444" : "#fff")};
  font-size: 12px;
  font-weight: normal;
  text-decoration: none;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s cubic-bezier(0.65, 0, 0.16, 1);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24);

  &:hover {
    transition: 1s cubic-bezier(0.65, 0, 0.16, 1);
    background: ${({ btnColor }) => (btnColor ? "#444" : "#fff")};
    color: ${({ dark }) => (dark ? "#fff" : "#010606")};
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
`;
