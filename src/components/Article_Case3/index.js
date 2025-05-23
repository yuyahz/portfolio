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
  FullWidthContainer,
  ClosingWrapper,
  Hide,
} from "../ArticleElements";
import {
  IntroContainer,
  IntroWrapper,
  ContentInfoContainer,
  ContentTitleContainer,
  ContentTitleWrapper,
} from "./Case3_Elements";
import case3_hero from "../../images/case3_hero.png";
import case3_closing from "../../images/case3_closing.png";

const Article_Case3 = () => {
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
          <HeroImageWrapper>
            <ImageCs src={case3_hero} id="" />
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
                    <p>Data - Analysis</p>
                  </Tag>
                  <Tag>
                    <p>Design identity systems</p>
                  </Tag>
                  <Tag>
                    <p>E-commerce Optimization</p>
                  </Tag>
                  <Tag>
                    <p>Agile Development</p>
                  </Tag>
                </TagWrapper>
                <div>
                  <h1>
                    Supporting the continuous analysis and improvement of
                    comprehensive products is a crucial process for driving
                    company profitability. My role is dedicated to this
                    endeavor.
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
                  People understand that the success of web products doesn't
                  conclude upon their initial launch.
                </h3>
              </div>
              <div>
                <h3>
                  What carries you for a strategy towards goals will require you
                  to keep your eyes open to find out the pain points that users
                  are feeling uncomfortable using and being unclear for
                  enhancing appeal.
                </h3>
              </div>
              <div>
                <h3>
                  Strategizing for your goals involves a keen focus on
                  identifying and addressing user discomfort and uncertainties,
                  all aimed at improving the product's appeal.
                </h3>
              </div>
              <div>
                <h3>
                  From that perspective, it signifies the initiation of a new
                  project phase following the product launch.
                </h3>
              </div>
              <div>
                <h3>
                  Iterative testing is a prevalent method to improve product
                  value, but it necessitates understanding the root causes
                  behind user demands.
                </h3>
              </div>
              <div>
                <h3>
                  Identifying the crucial factors that end users require is a
                  challenging task; nevertheless, I've used various tools and
                  applications to clarify these points.
                </h3>
              </div>
              <div>
                <h3>
                  This is a very exciting process, moving us closer to elevating
                  the product to the next level.
                </h3>
              </div>
              <div>
                <h3>
                  While users often associate aesthetically pleasing design with
                  enhanced usability, it's important to recognize that
                  real-world outcomes aren't solely determined by the
                  Aesthetic-Usability Effect.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <Hide>
            {/* KPI */}
            <ContentTitleContainer>
              <ContentTitleWrapper>
                <div>
                  <span>
                    Optimizing Conversion Acquisition that A User-Centric KPI
                    Strategy for Seamless Product Navigation and Profitability
                  </span>
                </div>
              </ContentTitleWrapper>
            </ContentTitleContainer>

            <FullWidthContainer>
              <ContentInfoContainer>
                <ColumnContentLg>
                  <div>
                    <h2>My strategy of KPI</h2>
                    <p>
                      The KPI strategy I’ve dedicated to revolves around
                      optimizing conversion acquisition, ensuring every step
                      aligns with user-centric design principles, and employing
                      a systematic approach to refine and enhance the overall
                      user experience.
                    </p>
                    <p className="caption">
                      Revitalizing User Engagement and Conversion Acquisition:
                      Key Responsibilities of the Project
                    </p>
                    <p style={{ color: "#010606" }}>
                      Primary priorities of KPI
                    </p>
                    <div className="list">
                      <p>• Organic traffic</p>
                      <p>• Pages per session</p>
                      <p>• Click rate</p>
                      <p>• Cart abandonment rate</p>
                      <p>• Bounce rate</p>
                      <p>• Promotion page conversion rates</p>
                      <p>• Product pages conversion rates</p>
                      <p>• Landing Page Samples conversion rate</p>
                    </div>
                    <p style={{ color: "#010606" }}>
                      Secondary priorities of KPI{" "}
                    </p>
                    <div className="list">
                      <p>• Customer Acquisition Cost</p>
                      <p>• Customer Lifetime Value</p>
                      <p>• Marketing Return on Investment</p>
                      <p>• Churn Rate</p>
                      <p>• Full Product</p>
                    </div>
                    <p>
                      This involves iterative design practices, incorporating
                      pricing psychology, and utilizing A/B testing for
                      continuous improvement. The goal is to maximize
                      engagement, support profitability, and provide a seamless,
                      intuitive experience for users navigating the products and
                      making purchase decisions.
                    </p>
                    <p>
                      Frequently, exercising patience is crucial to achieving
                      meaningful contributions. The secure and experiential
                      process not only forms the foundation for results but also
                      brings expansive joy to my work through the satisfaction
                      of accomplishments.
                    </p>
                  </div>
                </ColumnContentLg>
              </ContentInfoContainer>
            </FullWidthContainer>
          </Hide>
          <Password targetPath="/visible/Article_Case3" />
        </motion.div>
        <ClosingWrapper>
          <Image src={case3_closing} id="" />
        </ClosingWrapper>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Article_Case3;
