import React from "react";
import { motion } from "framer-motion";
import AutoHidingNavBar from "../AutoHidingNavBar";
import {
  CaseContainer,
  TitleContainer,
  TitleWrapper,
  TitleColumn,
  TagWrapper,
  Tag,
  CreditWrapper,
  CreditTitle,
  CreditBody,
} from "../ArticleElements";
import {
  CaseWrapper,
  IntroContainer,
  IntroWrapper,
} from "./CasePortfolio_Elements";

const Article_Portfolio = () => {
  return (
    <CaseContainer id="portfolio">
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
                    <p>Design identity systems</p>
                  </Tag>
                  <Tag>
                    <p>Agile Development</p>
                  </Tag>
                  <Tag>
                    <p>VS Code</p>
                  </Tag>
                  <Tag>
                    <p>Adobe CC</p>
                  </Tag>
                  <Tag>
                    <p>HTML</p>
                  </Tag>
                  <Tag>
                    <p>CSS</p>
                  </Tag>
                  <Tag>
                    <p>JavaScript</p>
                  </Tag>
                  <Tag>
                    <p>React</p>
                  </Tag>
                  <Tag>
                    <p>SCSS / SASS</p>
                  </Tag>
                  <Tag>
                    <p>styled-components</p>
                  </Tag>
                </TagWrapper>
                <div>
                  <h1>Project for Comprehensive Portfolio Development</h1>
                </div>
              </TitleWrapper>
            </TitleColumn>
            <TitleColumn>
              <CreditWrapper>
                <CreditTitle>
                  <p>CREDITS</p>
                </CreditTitle>
                <CreditBody>
                  <p>Designer: Yuya Hashirizaki</p>
                </CreditBody>
                <CreditBody>
                  <p>Developer: Yuya Hashirizaki</p>
                </CreditBody>
              </CreditWrapper>
            </TitleColumn>
          </TitleContainer>

          <IntroContainer>
            <IntroWrapper>
              <div>
                <h3>
                  The design industry frequently debates the necessity of User
                  Experience designers having programming knowledge.
                </h3>
              </div>
              <div>
                <h3>
                  Various perspectives exist on this matter. From my standpoint,
                  having an understanding of programming can provide designers
                  with a broader, more comprehensive view, ultimately leading to
                  more advanced design approaches.
                </h3>
              </div>
              <div>
                <h3>
                  For instance, when developing a reusable component, having
                  knowledge of how objects are generated is crucial to avoid
                  creating a design that would be challenging to implement in
                  the user interface.
                </h3>
              </div>
              <div>
                <h3>
                  Implementing this approach not only enhances the developer's
                  workflow but also contributes to reducing project costs. This
                  project has yielded significant profits as a result.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>
        </motion.div>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Article_Portfolio;
