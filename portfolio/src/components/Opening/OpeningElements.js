import styled from "styled-components";

export const OpeningContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );
  display: flex;
  justify-content: center;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const OpeningContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OpeningH1 = styled.h1`
  color: #010606;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const OpeningP = styled.p`
  margin-top: 24px;
  color: #010606;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
