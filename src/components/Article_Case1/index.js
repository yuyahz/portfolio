import React from "react";
import { motion } from "framer-motion";
import StickyCTA from "../StickyCTA/StickyCTA";
import AutoHidingNavBar from "../AutoHidingNavBar";
import {
  ColumnLg,
  ColumnContentLg,
  ColumnContentSm,
  Image,
  ImageCs,
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
  FullWidthContainer,
  FullWidthWrapper,
  ClosingWrapper,
  Hide,
} from "../ArticleElements";
import {
  IntroContainer,
  IntroWrapper,
  ResearchInsight,
  InsertContainer,
  InsertWrapper,
} from "./Case1_Elements";
import case1_hero from "../../images/case1_hero.png";
import case1_closing from "../../images/case1_closing.png";
import case1_research from "../../images/case1_research.png";

const Article_Case1 = () => {
  return (
    <CaseContainer>
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
        <AutoHidingNavBar />

        <CaseWrapper>
          <HeroImageWrapper>
            <ImageCs src={case1_hero} id="" />
          </HeroImageWrapper>

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
                <div>
                  <h1>
                    I’ve been dedicated to problem-solving for RMDY, which
                    comprises two brands Riversol Skin Care Solutions and
                    Midnight Paloma.
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
                  <p>Lead Designer: Yuya Hashirizaki</p>
                </CreditBody>
                <CreditBody>
                  <p>Lead Developer: Aaron Johnson</p>
                </CreditBody>
                <CreditBody>
                  <p>Project Manager: Ali Huynh</p>
                </CreditBody>
                <CreditBody>
                  <p>Manager: Ed Rushton</p>
                </CreditBody>
              </CreditWrapper>
            </TitleColumn>
          </TitleContainer>

          <IntroContainer>
            <IntroWrapper>
              <div>
                <h3>
                  Riversol was established by board-certified dermatologist Dr.
                  Jason Rivers, following over 20 years of clinical dermatology
                  experience, to provide a safe skincare solution.
                </h3>
              </div>
              <div>
                <h3>
                  This specializes in providing anti-aging solutions for
                  individuals with sensitive skin and is committed to assisting
                  anyone with skin-related concerns through its product
                  offerings.
                </h3>
              </div>
              <div>
                <h3>
                  The company’s primary method for expanding its business has
                  been a commitment to providing free products to individuals
                  who may potentially become our customers through our free
                  sample program. This initiative is aimed at introducing
                  dependable, high-quality products and showcasing the value of
                  the company to those in need of support.
                </h3>
              </div>
              <div>
                <h3>
                  My assigned responsibility involves enhancing the quality of
                  the website and all digital platforms associated with the free
                  sample program to contribute to the company’s overall
                  profitability.
                </h3>
              </div>
              <div>
                <h3>
                  To start, I’ve strived to identify essential factors for
                  enhancing the performance of our website and all digital
                  platforms while fostering seamless communication within the
                  team.
                </h3>
              </div>
              <div>
                <h3>
                  It has been challenging to maintain a consistent UI, as it
                  often requires a significant amount of time to establish and
                  implement rules. Additionally, we have yet to define clear
                  goals for guiding our teams toward our primary objectives.
                </h3>
              </div>
              <div>
                <h3>
                  Thoroughly clarifying every aspect, I created a robust
                  foundational design system, integrating comprehensive UI/UX
                  principles.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <Hide>
            <InsertContainer>
              <InsertWrapper>
                <div>
                  <span>
                    If I were given just one hour to address a problem, I'd
                    invest as much as two-thirds of that time in thoroughly
                    understanding and defining the problem.
                  </span>
                </div>
              </InsertWrapper>
            </InsertContainer>

            <FullWidthContainer>
              <FullWidthWrapper>
                <ColumnLg>
                  <Image src={case1_research} id="" />
                </ColumnLg>
                <ColumnLg>
                  <ColumnContentLg>
                    <div>
                      <h2>User Research</h2>
                    </div>
                    <div>
                      <p>
                        In our pursuit of designing user-centric experiences, I
                        prioritize User Research, which involves delving into
                        user behaviors, uncovering their needs, and analyzing
                        their motivations through various observations, task
                        analysis, and valuable feedback methodologies.
                      </p>
                      <p>
                        Our collaboration with SplitBase has enabled us to
                        conduct a comprehensive survey, and in our qualitative
                        analysis phase, we engaged in insightful interviews with
                        numerous consumers who have made purchases of our
                        products.
                      </p>
                    </div>
                  </ColumnContentLg>
                </ColumnLg>
              </FullWidthWrapper>

              <ResearchInsight>
                <ColumnContentSm>
                  <div>
                    <p>Insights:</p>
                    <p>
                      The survey proved invaluable in gaining a profound
                      understanding of our users, pinpointing their primary pain
                      points and aspirations. It allowed me to quantify the
                      proportion of users exhibiting genuine interest in our
                      products.
                    </p>
                    <p>
                      Analyzing the daily skincare challenges faced by these
                      users served as a wellspring of inspiration, propelling me
                      to ideate and devise optimal design solutions.
                    </p>
                  </div>
                </ColumnContentSm>
              </ResearchInsight>
            </FullWidthContainer>
          </Hide>
          <StickyCTA />

          <ClosingWrapper>
            <Image src={case1_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case1;
