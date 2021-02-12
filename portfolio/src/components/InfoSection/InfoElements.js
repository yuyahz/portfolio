import styled, { css } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? "rgb(255, 255, 255)" : "rgba(218, 218, 218, 1)"};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1ft);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #444;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#444" : "#010606")};

  @media screen and (max-width: 540px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 1px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#444")};
`;

export const BtnWrap = styled.div`
  display: ${(props) => (props.primary ? "none" : "flex")};
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
