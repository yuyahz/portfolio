import styled from "styled-components";
import { Link } from "react-router-dom";

export const LarryContainer = styled.div`
  height: auto;
  background: rgb(255, 255, 255);

  @media screen and (max-width: 960px) {
    height: 100vh;
  }
`;

export const LarryWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10% 0;
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const Icon = styled(Link)`
  display: block;
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 3rem;
  right: 3rem;
  transition: all 1s linear 0s;
  cursor: pointer;

  &:hover {
    transform: rotateZ(360deg);
  }
`;

export const LarryTitle = styled.div`
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  margin: 0 auto;
  font-weight: 900;
  font-size: 66px;
  margin-bottom: 1rem;
`;

export const LarryColumn = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
  align-items: left;
  max-width: 900px;
  margin: 0 auto;
`;

export const LarryH1 = styled.h1`
  color: #010606;
  max-width: 900px;
  margin: 0 auto;
  font-weight: 300;
  font-size: 20px;
  letter-spacing: 1.4px;
  margin-bottom: 5rem;
`;

export const LarryH2 = styled.h2``;

export const LarryP = styled.p`
  color: #888888;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 1.4px;
`;
