import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  ColumnLg,
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
  FullWidthContainer,
  FullWidthWrapper,
  FullWidthFlipWrapper,
  ClosingWrapper,
} from "../CaseElements";
import {
  IntroContainer,
  IntroWrapper,
  InsertContainer,
  InsertWrapper,
  InsightsContainer,
} from "./CaseMp_Elements";
import caseMp_hero from "../../images/caseMp_hero.png";
import caseMp_closing from "../../images/caseMp_closing.png";
import caseMp_credibility from "../../images/caseMp_credibility.png";
import caseMp_consistency from "../../images/caseMp_consistency.png";
import caseMp_reuseable from "../../images/caseMp_reuseable.png";

const Article_CaseMp = () => {
  return (
    <CaseContainer id="mp">
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
            <ImageCs src={caseMp_hero} id="" />
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

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={caseMp_credibility} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Credibility in Design</h2>
                  </div>
                  <div>
                    <p>
                      Based on my research and experience, the Aesthetic
                      Usability Effect proves to be a powerful tool. Users tend
                      to perceive aesthetically pleasing products as more
                      usable. Therefore, we concentrated on enhancing our design
                      by incorporating the results of our analysis, leading us
                      to introduce a two-column design in the hero section and a
                      grid-based layout.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthFlipWrapper>
              <ColumnLg>
                <Image src={caseMp_consistency} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Consistency in UI design</h2>
                  </div>
                  <div>
                    <p>
                      In every project, aligning the concept with users’ needs
                      while maintaining credibility is essential. One
                      fundamental principle in UI design is consistency, as it
                      serves to reduce cognitive load. Consistency simplifies
                      the user’s understanding of how to use the product,
                      diminishing the mental effort required to learn and
                      navigate the interface. I am dedicated to upholding this
                      principle in the development of collections and product
                      pages.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthFlipWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={caseMp_reuseable} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Reusable User Interfaces</h2>
                  </div>
                  <div>
                    <p>
                      Addressing the challenge of consistently updating the
                      website for promotions and blogs, involving multiple team
                      members, required the implementation of a reusable
                      component design system. This approach not only supported
                      rapid updates but also ensured consistency. Effective
                      communication with a developer became indispensable for
                      the success of this project.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <ClosingWrapper>
            <Image src={caseMp_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_CaseMp;
