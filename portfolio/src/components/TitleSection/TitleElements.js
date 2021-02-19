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

  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`;

export const TitleContent = styled.div`
  z-index: 2;
  width: 100%;
  max-width: 1440px;
  display: block;
`;

export const ImageContent = styled.div`
  z-index: 2;
  padding: 0 3%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  &:first-child {
    margin-right: auto;
  }
`;

export const Image = styled.img`
  max-width: 70%;
  height: auto;
`;

export const H1Content = styled.div`
  padding: 30px 40px;

  @media screen and (max-width: 970px) {
    padding: 20px 40px 20px 40px;
  }

  @media screen and (max-width: 520px) {
    padding: 20px 40px 20px 40px;
  }
`;

export const TitleH1 = styled.h1`
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 auto;
  font-weight: 900;
  font-size: 60px;
  text-align: left;
  max-width: 870px;

  .br {
    white-space: pre-wrap;
  }

  @media screen and (max-width: 970px) {
    font-size: 32px;
    max-width: 480px;
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
  color: #010606;
  letter-spacing: 0.05em;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  max-width: 525px;

  @media screen and (max-width: 970px) {
    font-size: 16px;
    max-width: 350px;
  }

  @media screen and (max-width: 520px) {
    font-size: 14px;
    max-width: 200px;
  }
`;
