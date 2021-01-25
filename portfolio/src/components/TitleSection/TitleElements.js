import styled from "styled-components";

export const TitleContainer = styled.div`
  z-index: 1;
  background: rgb(42, 42, 42);
  background: linear-gradient(
    0deg,
    rgba(1, 6, 6, 1) 0%,
    rgba(218, 218, 218, 1) 100%
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
  padding-top: 20px;

  @media screen and (max-width: 970px) {
    padding: 20px;
  }
`;

export const TitleH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: left;
  max-width: 1200px;
  letter-spacing: 0.1em;
  line-height: 1.5em;

  .br {
    white-space: pre-wrap;
  }

  @media screen and (max-width: 970px) {
    font-size: 40px;
  }

  @media screen and (max-width: 520px) {
    font-size: 32px;
  }
`;

export const TitleP = styled.p`
  color: #fff;
  font-size: 24px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
