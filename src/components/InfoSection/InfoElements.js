import styled, { css } from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? "rgb(255, 255, 255)" : "rgba(218, 218, 218, 1)"};
  -webkit-overflow-scrolling: touch;
`;

export const InfoWrapper = styled.div`
  display: grid;
  position: relative;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1500px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 320px) {
    height: 130vh;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: minmax(600px, 1fr) 220px;
  grid-template-areas: "col1 col2";
  align-items: start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit- transform: translateY(-50%) translateX(-50%);

  @media screen and (max-width: 970px) {
    grid-template-columns: minmax(400px, 1fr) 190px;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: minmax(250px, 1fr) 190px;
    padding-left: 45px;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: minmax(180px, 1fr) 130px;
    padding: 0 5%;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: minmax(150px, 1fr) 110px;
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;

  @media screen and (max-width: 970px) {
    margin-left: 20%;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
`;

export const TextWrapperR = styled.div`
  max-width: 540px;
  padding-top: 0;

  @media screen and (max-width: 320px) {
    margin-right: 20px;
  }
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? "#888888" : "#010606")};
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const TopLineR = styled.p`
  color: ${({ darkText }) => (darkText ? "#010606" : "#888888")};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const TopLineR2 = styled.p`
  color: ${({ darkText }) => (darkText ? "#010606" : "#888888")};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  color: ${({ darkText }) => (darkText ? "#010606" : "#888888")};
  margin-bottom: 5px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (max-width: 970px) {
    font-size: 32px;
  }

  @media screen and (max-width: 520px) {
    font-size: 24px;
  }
`;

export const Heading2 = styled.h1`
  color: ${({ darkText }) => (darkText ? "#010606" : "#888888")};
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;

  @media screen and (max-width: 970px) {
    font-size: 32px;
  }

  @media screen and (max-width: 520px) {
    font-size: 24px;
  }
`;

export const TextR = styled.p`
  color: ${({ lightText }) => (lightText ? "#888888" : "#010606")};
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 1px;
`;

export const TextRBottom = styled.p`
  color: ${({ lightText }) => (lightText ? "#888888" : "#010606")};
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: 1px;
`;

export const Subtitle = styled.p`
  color: ${({ lightText }) => (lightText ? "#888888" : "#010606")};
  max-width: 540px;
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 1px;

  @media screen and (max-width: 970px) {
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (max-width: 520px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const BtnWrap = styled.div`
  display: ${(props) => (props.primary ? "none" : "flex")};
  justify-content: flex-start;
`;

export const SnsWrap = styled.div`
  display: ${(props) => (props.primarySns ? "none" : "flex")};
  justify-content: flex-start;

  a.dribble {
    color: #ea4c89;
    font-size: 5rem;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.24));
    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    /* for vertical mobile */
    @media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 3rem;
    }
  }

  a.behance {
    color: #053eff;
    font-size: 5rem;
    margin-left: 20px;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.24));
    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      transition: transform 0.6s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
    @media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 3rem;
    }
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
