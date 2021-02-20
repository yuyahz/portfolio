import { React } from "react";
import { Button } from "../ButtonElements";
import * as FadeIn from "../FadeIn";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TextWrapperR,
  TopLine,
  TopLineR,
  TopLineR2,
  Heading,
  Heading2,
  TextR,
  TextRBottom,
  Subtitle,
  BtnWrap,
  ArrowForward,
  ArrowRight,
} from "./InfoElements";

const InfoSection = ({
  id,
  to,
  lightBg,
  lightText,
  darkText,
  topLine,
  headline,
  headline2,
  description,
  buttonLabel,
  textR,
  textR2,
  textR3,
  textR4,
  textR5,
  textR6,
  textR7,
  textR8,
  textR9,
  textR10,
  dark,
  btnColor,
  primary,
}) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <FadeIn.Left>
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading darkText={darkText}>{headline}</Heading>
                <Heading2 darkText={darkText}>{headline2}</Heading2>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <BtnWrap primary={primary ? 1 : 0}>
                  <Button
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    btnColor={btnColor ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel} <ArrowRight />
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapperR>
                <TopLineR darkText={darkText}>Data</TopLineR>
                <TextR lightText={lightText}>{textR}</TextR>
                <TopLineR2 darkText={darkText}>{textR2}</TopLineR2>
                <TextRBottom lightText={lightText}>{textR3}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR4}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR5}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR6}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR7}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR8}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR9}</TextRBottom>
                <TextRBottom lightText={lightText}>{textR10}</TextRBottom>
              </TextWrapperR>
            </Column2>
          </InfoRow>
        </InfoWrapper>
        </FadeIn.Left>
    </InfoContainer>
  );
};

export default InfoSection;
