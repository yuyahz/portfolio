import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  CaseContainer,
  CaseWrapper,
  ImageWrapper,
  Image,
  TitleContainer,
  TitleColumn,
  TitleWrapper,
  Title,
  TagWrapper,
  Tag,
  CreditWrapper,
  CreditTitle,
  CreditBody,
  ClosingWrapper,
} from "./CaseElements";
import case1_hero from "../../images/case1_hero.png";
import case1_closing from "../../images/case1_closing.png";

const Article_Case1 = () => {
  return (
    <CaseContainer id="case1">
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 700,
          opacity: 0,
        }}
        exit={{
          x: -700,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <HomeIconWrapper>
          <HomeIcon to="/">Home</HomeIcon>
        </HomeIconWrapper>
        <CaseWrapper>
          <ImageWrapper>
            <Image src={case1_hero} id="" />
          </ImageWrapper>
          <TitleContainer>
            <TitleColumn>
              <TitleWrapper>
                <TagWrapper>
                  <Tag>
                    <p>User Interface Design</p>
                  </Tag>
                  <Tag>
                    <p>User Experience Design</p>
                  </Tag>
                  <Tag>
                    <p>Wireframing</p>
                  </Tag>
                  <Tag>
                    <p>Prototyping</p>
                  </Tag>
                  <Tag>
                    <p>Usability Testing</p>
                  </Tag>
                  <Tag>
                    <p>Data - Analysis</p>
                  </Tag>
                  <Tag>
                    <p>Design identity systems</p>
                  </Tag>
                  <Tag>
                    <p>Information Architecture</p>
                  </Tag>
                  <Tag>
                    <p>E-commerce Optimization</p>
                  </Tag>
                  <Tag>
                    <p>Brand Development</p>
                  </Tag>
                </TagWrapper>
                <Title>
                  I’ve been dedicated to problem-solving for RMDY, which
                  comprises two brands Riversol Skin Care Solutions and Midnight
                  Paloma.
                </Title>
              </TitleWrapper>
            </TitleColumn>
            <TitleColumn>
              <CreditWrapper>
                <CreditTitle>CREDITS</CreditTitle>
                <CreditBody>Design Lead: Yuya Hashirizaki</CreditBody>
                <CreditBody>Development: Aaron Johnson</CreditBody>
                <CreditBody>Project Manager: Ed Rushton</CreditBody>
              </CreditWrapper>
            </TitleColumn>
          </TitleContainer>
          <ClosingWrapper>
            <Image src={case1_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case1;
