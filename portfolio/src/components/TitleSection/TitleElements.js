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
  height: 2200px;
  position: relative;

  @media screen and (min-width: 1441px) {
    justify-content: center;
  }

  @media screen and (max-width: 970px) {
    height: 130vh;
    margin-bottom: 10rem;
  }

  @media screen and (max-width: 540px) {
    height: 120vh;
    margin-bottom: 10rem;
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

  @media screen and (max-width: 970px) {
    max-width: 75%;
  }

  @media screen and (max-width: 520px) {
    max-width: 85%;
  }
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
  color: #888888;
  letter-spacing: 0.1em;
  margin-left: auto;
  font-size: 24px;
  font-weight: 300;
  text-align: left;
  max-width: 500px;

  @media screen and (max-width: 970px) {
    font-size: 16px;
    max-width: 285px;
  }

  @media screen and (max-width: 520px) {
    font-size: 14px;
    max-width: 190px;
  }
`;

export const SkillsColumn = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr;
  padding: 20% 20% 0 20%;

  @media screen and (max-width: 970px) {
    padding: 30% 20% 0;
  }

  @media screen and (max-width: 520px) {
    padding: 50% 20% 15%;
  }
`;

export const SkillsWrapRight = styled.div`
  text-align: center;
  letter-spacing: 1.4px;
  border-right: 1px solid #dfdfdf;
  border-left: 1px solid #dfdfdf;

  @media screen and (max-width: 520px) {
    padding: 0 10px;
  }
`;

export const SkillsWrapLeft = styled.div`
  text-align: center;
  letter-spacing: 1.2px;
  border-right: 1px solid #dfdfdf;

  @media screen and (max-width: 520px) {
    padding: 0 10px;
  }
`;

export const SkillsTitle = styled.div`
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 20px;

  @media screen and (max-width: 520px) {
    font-size: 14px;
  }
`;

export const SkillsSubTitle = styled.p`
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 11px;
  letter-spacing: 2px;
  padding-bottom: 10px;

  @media screen and (max-width: 520px) {
    font-size: 8px;
  }
`;

export const Skills = styled.p`
  color: #888888;
  font-size: 16px;
  font-weight: 300;
  padding: 0 25px 20px;

  @media screen and (max-width: 520px) {
    font-size: 11px;
  }
`;

export const Tools = styled.div`
  color: #888888;
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5;

  @media screen and (max-width: 520px) {
    font-size: 11px;
    line-height: 1.1;
  }
`;
