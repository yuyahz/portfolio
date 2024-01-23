import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const WorksContainer = styled.div`
  width: 100%;
  background: var(--primaly-bg);
  display: block;
  padding: 0.5rem;
  border-bottom: 2px solid red;
`;

export const WorksWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export const WorksInnerWrapper = styled.div`
  text-align: left;

  @media only screen and (max-width: 1280px) {
    margin: 0 30px 0 130px;
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px 0 30px;
  }
`;

export const WorksNumber = styled.div`
  color: var(--primary-txt-color);
  font-family: "GT";
  font-weight: 500;
  font-size: 2.5rem;
  text-decoration: none;
  padding-top: 1.5rem;

  @media only screen and (max-width: 960px) {
    font-size: 5.56vw;
    padding-top: 2.5vw;
  }
`;

export const WorksTitle = styled(Link)`
  color: var(--primary-txt-color);
  position: relative;
  z-index: 0;
  font-family: "GT";
  font-weight: 500;
  font-size: 7rem;
  text-decoration: none;

  ::before {
    content: "Read more";
    position: absolute;
    width: 840px;
    height: 130px;
    background-color: var(--primaly-bg);
    top: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.6s ease-in-out;
    z-index: 100;
  }

  :hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media only screen and (max-width: 960px) {
    font-size: 11.11vw;
  }
`;
