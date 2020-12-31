import styled from "styled-components";

export const TitleContainer = styled.div`
  background: rgb(42, 42, 42);
  background: linear-gradient(
    180deg,
    rgba(42, 42, 42, 1) 0%,
    rgba(0, 0, 0, 1) 100%
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

export const TitleContent = styled.div`
  z-index: 2;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TitleP = styled.p`
  margin-top: 24px;
  color: #fff;
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
