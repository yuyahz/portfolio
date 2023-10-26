import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  ColumnLg,
  ColumnContentLg,
  Image,
  CaseContainer,
  CaseWrapper,
  HeroImageWrapper,
  TitleContainer,
  TitleColumn,
  TitleWrapper,
  TagWrapper,
  Tag,
  CreditWrapper,
  CreditTitle,
  CreditBody,
} from "../CaseElements";
import {
  IntroContainer,
  IntroWrapper,
  InsertContainer,
  InsertWrapper,
} from "./CaseUi_Elements";
import { Button } from "../ButtonCaseElements";
import caseUi_hero from "../../images/caseUi_hero.png";

const Article_DailyUi = () => {
  return (
    <CaseContainer id="ui">
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
          <HeroImageWrapper>
            <Image src={caseUi_hero} id="" />
          </HeroImageWrapper>
          <TitleContainer>
            <TitleColumn>
              <TitleWrapper>
                <TagWrapper>
                  <Tag>
                    <p>User Interface Design</p>
                  </Tag>
                  <Tag>
                    <p>Design identity systems</p>
                  </Tag>
                  <Tag>
                    <p>Brand Development</p>
                  </Tag>
                </TagWrapper>
                <div>
                  <h1>
                    100-day design challenge : Self-commitment to design every
                    day
                  </h1>
                </div>
              </TitleWrapper>
            </TitleColumn>
            <TitleColumn>
              <CreditWrapper>
                <CreditTitle>
                  <p>CREDITS</p>
                </CreditTitle>
                <CreditBody>
                  <p>Design Lead: Yuya Hashirizaki</p>
                </CreditBody>
              </CreditWrapper>
            </TitleColumn>
          </TitleContainer>

          <IntroContainer>
            <IntroWrapper>
              <div>
                <h3>
                  According to both research and experience, it's evident that
                  product design is a key driver in capturing user engagement
                  and serves as a vital starting point for achieving business
                  objectives.
                </h3>
              </div>
              <div>
                <h3>
                  Yet, there are multiple compelling reasons to prioritize the
                  maturation and innovation of product design.
                </h3>
              </div>
              <div>
                <h3>
                  Quality design products aim to portray a product as
                  sophisticated, and as a result, end-users often perceive
                  aesthetically pleasing products as more user-friendly.
                </h3>
              </div>
              <div>
                <h3>
                  Good design is inherently rational, communicating to users
                  that it's not only visually pleasing but also useful,
                  reliable, and user-friendly.
                </h3>
              </div>
              <div>
                <h3>
                  Furthermore, it's not only about aesthetics; it places a
                  strong emphasis on delivering usability for the users'
                  benefit.
                </h3>
              </div>
              <div>
                <h3>
                  I've taken on sustainable 100-day challenges to boost my
                  skills and capabilities.
                </h3>
              </div>
              <ColumnContentLg>
                <div className="centering">
                  <Button>Read more</Button>
                </div>
              </ColumnContentLg>
            </IntroWrapper>
          </IntroContainer>

          <InsertContainer>
            <InsertWrapper>
              <div>
                <span>
                  I tried to hone my design skills by adhering to a daily
                  self-challenge to design and create.
                </span>
              </div>
            </InsertWrapper>
          </InsertContainer>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_DailyUi;
