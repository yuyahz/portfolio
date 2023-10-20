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
  IntroContainer,
  IntroWrapper,
  ResearchContainer,
  ResearchWrapper,
  ResearchColumn,
  ContentWrapper,
  ClosingWrapper,
} from "./CaseElements";
import case1_hero from "../../images/case1_hero.png";
import case1_closing from "../../images/case1_closing.png";
import case1_research from "../../images/case1_research.png";

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
          <IntroContainer>
            <IntroWrapper>
              <div>
                <p>
                  Riversol was established by board-certified dermatologist Dr.
                  Jason Rivers, following over 20 years of clinical dermatology
                  experience, to provide a safe skincare solution.
                </p>
              </div>
              <div>
                <p>
                  This specializes in providing anti-aging solutions for
                  individuals with sensitive skin and is committed to assisting
                  anyone with skin-related concerns through its product
                  offerings.
                </p>
              </div>
              <div>
                <p>
                  The company’s primary method for expanding its business has
                  been a commitment to providing free products to individuals
                  who may potentially become our customers through our free
                  sample program. This initiative is aimed at introducing
                  dependable, high-quality products and showcasing the value of
                  the company to those in need of support.
                </p>
              </div>
              <div>
                <p>
                  My assigned responsibility involves enhancing the quality of
                  the website and all digital platforms associated with the free
                  sample program to contribute to the company’s overall
                  profitability.
                </p>
              </div>
              <div>
                <p>
                  To start, I’ve strived to identify essential factors for
                  enhancing the performance of our website and all digital
                  platforms while fostering seamless communication within the
                  team.
                </p>
              </div>
              <div>
                <p>
                  It has been challenging to maintain a consistent UI, as it
                  often requires a significant amount of time to establish and
                  implement rules. Additionally, we have yet to define clear
                  goals for guiding our teams toward our primary objectives.
                </p>
              </div>
              <div>
                <p>
                  Thoroughly clarifying every aspect, I created a robust
                  foundational design system, integrating comprehensive UI/UX
                  principles.
                </p>
              </div>
            </IntroWrapper>
          </IntroContainer>
          <ResearchContainer>
            <ResearchWrapper>
              <ResearchColumn>
                <Image src={case1_research} id="" />
              </ResearchColumn>
              <ResearchColumn>
                <ContentWrapper>
                  <div>
                    <h3>User Research</h3>
                  </div>
                  <div>
                    <p>
                      In our pursuit of designing user-centric experiences, I
                      prioritize User Research, which involves delving into user
                      behaviors, uncovering their needs, and analyzing their
                      motivations through various observations, task analysis,
                      and valuable feedback methodologies.
                    </p>
                    <p>
                      Our collaboration with SplitBase has enabled us to conduct
                      a comprehensive survey, and in our qualitative analysis
                      phase, we engaged in insightful interviews with numerous
                      consumers who have made purchases of our products.
                    </p>
                  </div>
                </ContentWrapper>
              </ResearchColumn>
            </ResearchWrapper>
          </ResearchContainer>
          <ClosingWrapper>
            <Image src={case1_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case1;
