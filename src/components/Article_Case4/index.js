import React from "react";
import { motion } from "framer-motion";
import Password from "../Password/Password";
import AutoHidingNavBar from "../AutoHidingNavBar";
import {
  ColumnContentLg,
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
  ClosingWrapper,
  Hide,
} from "../ArticleElements";
import {
  IntroContainer,
  IntroWrapper,
  InsertContainer,
  InsertWrapper,
  InsightsContainer,
} from "./Case4_Elements";
import caseMp_hero from "../../images/caseMp_hero.png";
import caseMp_closing from "../../images/caseMp_closing.png";

const Article_Case4 = () => {
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
            <ImageCs src={caseMp_hero} id="" />
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
                    <p>Usability Testing</p>
                  </Tag>
                  <Tag>
                    <p>Design identity systems</p>
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
                </TagWrapper>
                <div>
                  <h1>
                    It was crucial to improve the website's usability, which had
                    previously missed out on significant potential, within a
                    limited timeframe.
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
                  <p>Manager: Taylor Rogers</p>
                </CreditBody>
              </CreditWrapper>
            </TitleColumn>
          </TitleContainer>

          <IntroContainer>
            <IntroWrapper>
              <div>
                <h3>
                  Midnight Paloma is committed to the concept of clean beauty,
                  using all-natural ingredients to craft signature formulas that
                  align with eco-conscious living.
                </h3>
              </div>
              <div>
                <h3>
                  Founder Tayler Rogers, drawing from 12 years of retail
                  experience, has carefully curated and developed Midnight
                  Paloma into a brand that embodies modern design, clean
                  ingredients, and self-care rituals, including the use of skin
                  tools.
                </h3>
              </div>
              <div>
                <h3>
                  We have devoted ourselves to maintaining the stunning appeal
                  of our brands. However, our primary source of profit has
                  traditionally been through retail, with less focus on our
                  e-commerce platform.
                </h3>
              </div>
              <div>
                <h3>
                  Nonetheless, we've come to recognize the significant untapped
                  potential that Midnight Paloma holds in the online market.
                </h3>
              </div>
              <div>
                <h3>
                  My responsibility was to completely overhaul the website
                  within a tight timeframe.
                </h3>
              </div>
              <div>
                <h3>
                  My team had well-defined ideas and inspiration in place,
                  allowing me to dedicate my efforts to shaping these ideas into
                  tangible creations.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <Hide>
            <InsertContainer>
              <InsertWrapper>
                <div>
                  <span>
                    I believe that aligning everyone’s perspective on the design
                    would saves time across all projects.
                  </span>
                </div>
              </InsertWrapper>
            </InsertContainer>

            <InsightsContainer>
              <ColumnContentLg>
                <div>
                  <h2>insights:</h2>
                  <p>
                    As we conducted our analysis, we uncovered multiple factors
                    for enhancing usability in both the User Interface and User
                    Experience.
                  </p>
                  <div className="insights-lists">
                    <p>• clutter UI</p>
                    <p>• difficulty in locating the products users needed</p>
                    <p>
                      • the interface lacks alignment with the brand’s customer
                      demographic
                    </p>
                    <p>
                      • the design does not give priority to aligning with brand
                      directions and customer expectations
                    </p>
                    <p>
                      • updating for promotional purposes takes an excessive
                      amount of time
                    </p>
                  </div>
                </div>
              </ColumnContentLg>
            </InsightsContainer>
          </Hide>
          <Password targetPath="/visible/Article_Case4" />
        </motion.div>
        <ClosingWrapper>
          <Image src={caseMp_closing} id="" />
        </ClosingWrapper>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Article_Case4;
