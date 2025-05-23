import React from "react";
import { motion } from "framer-motion";
import Password from "../Password/Password";
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
  BoxWrapper,
  ContentInfoContainer,
  ContentTitleContainer,
  ContentTitleWrapper,
} from "./Case2_Elements";
import case2_hero from "../../images/case2_hero.png";
import case2_filter_initial from "../../images/case2_filter_initial.png";
import case2_closing from "../../images/case2_closing.png";

const Article_Case2 = () => {
  return (
    <CaseContainer>
      <AutoHidingNavBar />
      <CaseWrapper>
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: -700,
            opacity: 0,
          }}
          exit={{
            x: 700,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <HeroImageWrapper>
            <ImageCs src={case2_hero} id="" />
          </HeroImageWrapper>
        </motion.div>
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
                    <p>Motion Prototype</p>
                  </Tag>
                  <Tag>
                    <p>Usability Testing</p>
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
                  <Tag>
                    <p>Agile Development</p>
                  </Tag>
                  <Tag>
                    <p>Vector - illustration</p>
                  </Tag>
                  <Tag>
                    <p>Logo Design</p>
                  </Tag>
                </TagWrapper>
                <div>
                  <h1>
                    Challenges are persistent, and recurring issues have been a
                    concern. I've been dedicated to proactively addressing these
                    factors.
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
                  <p>Developer: Tomás Leiva</p>
                </CreditBody>
                <CreditBody>
                  <p>Developer: Yuya Hashirizaki</p>
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
                  The website faced several issues during my early stages of
                  work.
                </h3>
              </div>
              <div>
                <h3>
                  I came to understand that website maintenance is more than
                  just enhancing product appeal based on my experience.
                </h3>
              </div>
              <div>
                <h3>
                  When encountering an issue, I make a conscious effort to delve
                  deeper beyond the apparent factors, resulting in a robust
                  solution that can be implemented permanently.
                </h3>
              </div>
              <div>
                <h3>
                  I applied these concepts to tackle challenges. The crucial
                  element is to thoroughly examine the interrelated factors, and
                  understand their origins and connections.
                </h3>
              </div>
              <div>
                <h3>
                  It was necessary to approach challenges with flexibility,
                  providing solutions that could offer long-lasting support as
                  needed.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <Hide>
            {/* Filter */}
            <ContentTitleContainer>
              <ContentTitleWrapper>
                <div>
                  <span>Designing Filters for Improved User Experience</span>
                </div>
              </ContentTitleWrapper>
            </ContentTitleContainer>

            <ContentInfoContainer>
              <ColumnContentLg>
                <div>
                  <h2>Filter</h2>
                  <p>
                    We’ve identified areas for improvement, and our research and
                    analysis highlight the potential contribution of filters to
                    this enhancement.
                  </p>
                  <p className="caption">
                    Project Requirements and Responsibilities:
                  </p>
                  <div className="list">
                    <p>
                      • Preventing time-consuming and frustrating experiences
                    </p>
                    <p>• Contribute to intuitive user searches</p>
                    <p>
                      • The design aids users in product search, even when they
                      don’t have a specific name in mind
                    </p>
                    <p>• Prioritizing clarity and simplicity for added value</p>
                    <p>• Reducing excessive back-and-forth processes</p>
                  </div>
                </div>
                <p>
                  My past experience with filter projects reminded me I have
                  encountered a lot of challenges that I never considered
                  possible to be complicated so I decided to organize a meeting
                  as a brainstorm to narrow down requirements before moving on
                  to actual and We could decide on minimum conditions. We ended
                  up deciding on four categories as prerequisites for creating
                  the filter.
                </p>
              </ColumnContentLg>
              <BoxWrapper>
                <div className="box">
                  <ColumnContentSm>
                    <div className="box-border">
                      <p>Filter’s position:</p>
                      <p>• I’m always having trouble with my skin</p>
                    </div>
                  </ColumnContentSm>
                </div>
                <div className="box">
                  <ColumnContentSm>
                    <div className="box-border">
                      <p>Applied filters:</p>
                      <p>• Dropdown Menus and horizontal scrolling</p>
                    </div>
                  </ColumnContentSm>
                </div>
                <div className="box">
                  <ColumnContentSm>
                    <div className="box-border">
                      <p>Specific criteria:</p>
                      <p>• Creating distinction with differing Sizes</p>
                      <p>• Assigning unique colors to each</p>
                    </div>
                  </ColumnContentSm>
                </div>
                <div className="box">
                  <ColumnContentSm>
                    <div className="box-border">
                      <p>Selection Interaction:</p>
                      <p>• Incorporate animation after select</p>
                      <p>• Stay on the top tier as a conditional component</p>
                    </div>
                  </ColumnContentSm>
                </div>
              </BoxWrapper>
            </ContentInfoContainer>

            <FullWidthContainer>
              <FullWidthWrapper>
                <ColumnLg>
                  <Image src={case2_filter_initial} id="" />
                </ColumnLg>
                <ColumnLg>
                  <ColumnContentLg>
                    <div>
                      <h2>Designing at the Initial Stage</h2>
                    </div>
                    <div>
                      <p>
                        Initially, following our agreed-upon direction, I began
                        creating a design standard for a Tip. This project
                        introduced rounded corner designs, which were to be
                        applied universally.
                      </p>
                      <p>
                        In Phase 2, the primary emphasis was on presenting the
                        applied filters. While crafting them, I faced challenges
                        in designing the product card UI due to space
                        constraints. As a result, the initial prototype posed
                        challenges in delivering a seamless user experience for
                        applied filters.
                      </p>
                    </div>
                  </ColumnContentLg>
                </ColumnLg>
              </FullWidthWrapper>
            </FullWidthContainer>
          </Hide>
          <Password targetPath="/visible/Article_Case2" />
        </motion.div>
        <ClosingWrapper>
          <Image src={case2_closing} id="" />
        </ClosingWrapper>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Article_Case2;
