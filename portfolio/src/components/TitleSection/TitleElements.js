import styled from "styled-components";

export const TitleContainer = styled.div`
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(218, 218, 218, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 1200px;
  position: relative;

  @media screen and (min-width: 1441px) {
    justify-content: center;
  }

  @media screen and (max-width: 970px) {
    height: 1100px;
  }

  @media screen and (max-width: 520px) {
    height: 600px;
  }
`;

export const TitleContent = styled.div`
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ImageContent = styled.div`
  z-index: 2;
  padding: 8px 24px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  &:first-child {
    margin-right: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
`;

export const H1Content = styled.div`
  padding: 25px 40px 0 25px;

  @media screen and (max-width: 970px) {
    padding: 20px 40px 20px 40px;
  }

  @media screen and (max-width: 520px) {
    padding: 20px 40px 20px 40px;
  }
`;

export const TitleH1 = styled.h1`
  color: #444;
  font-weight: 900;
  font-size: 45px;
  text-align: left;
  max-width: 1000px;
  letter-spacing: 0.05em;
  line-height: 1.5em;

  .br {
    white-space: pre-wrap;
  }

  @media screen and (max-width: 970px) {
    font-size: 32px;
  }

  @media screen and (max-width: 520px) {
    font-size: 24px;
  }
`;

export const PContent = styled.div`
  padding: 0 70px;

  @media screen and (max-width: 970px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 520px) {
    padding: 0 40px;
  }
`;

export const TitleP = styled.p`
  color: #444;
  font-size: 24px;
  font-weight: 100;
  text-align: left;
  max-width: 550px;

  @media screen and (max-width: 970px) {
    font-size: 16px;
  }

  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
`;
