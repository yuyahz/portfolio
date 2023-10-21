import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  ColumnLg,
  ColumnSm,
  ColumnContentLg,
  ColumnContentSm,
  Image,
  ImageSm,
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
  IntroContainer,
  IntroWrapper,
  ResearchContainer,
  ResearchWrapper,
  ResearchInsight,
  PersonaContainer,
  PersonaWrapper,
  EmpathyContainer,
  EmpathyWrapper,
  ClosingWrapper,
} from "./CaseElements";
import case1_hero from "../../images/case1_hero.png";
import case1_closing from "../../images/case1_closing.png";
import case1_research from "../../images/case1_research.png";
import case1_cathy from "../../images/Cathy.png";
import case1_allison from "../../images/Allison.png";

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
          <HeroImageWrapper>
            <Image src={case1_hero} id="" />
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
                  <p>Design Lead: Yuya Hashirizaki</p>
                </CreditBody>
                <CreditBody>
                  <p>Development: Aaron Johnson</p>
                </CreditBody>
                <CreditBody>
                  <p>Project Manager: Ed Rushton</p>
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

          <ResearchContainer>
            <ResearchWrapper>
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
                </ColumnContentLg>
              </ColumnLg>
            </ResearchWrapper>
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
                    Analyzing the daily skincare challenges faced by these users
                    served as a wellspring of inspiration, propelling me to
                    ideate and devise optimal design solutions.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </ResearchContainer>

          <PersonaContainer>
            <ColumnContentLg>
              <div>
                <h2>User Personas</h2>
                <p>
                  I utilized the survey findings to craft user personas, laying
                  the foundation for the project ahead.
                </p>
                <p>
                  I utilized the survey findings to craft user personas, laying
                  the foundation for the project ahead.
                </p>
              </div>
            </ColumnContentLg>
            <PersonaWrapper>
              <ColumnSm>
                <ImageSm src={case1_cathy} id="" />
              </ColumnSm>
              <ColumnSm>
                <ColumnContentSm>
                  <div>
                    <h2>Cathy - 60 year old with sensitive skin</h2>
                  </div>
                  <div>
                    <p>
                      Cathy has had sensitive skin all her life, forcing her
                      into having to understand good skincare at a very early
                      age. Finding products that work without a reaction to her
                      dry, reactive skin has been a difficult process – but
                      something she’s come to terms with, trying every product
                      in every price range. Since finding Riversol, she’s
                      narrowed down her routine, and has freed up storage space
                      in her bathroom because she no longer holds onto the
                      graveyard of skincare that didn’t work.
                    </p>
                  </div>
                </ColumnContentSm>
              </ColumnSm>
            </PersonaWrapper>
            <PersonaWrapper>
              <ColumnSm>
                <ColumnContentSm>
                  <div>
                    <h2>
                      Allison - 70 year old who wants to look as young as she
                      feels
                    </h2>
                  </div>
                  <div>
                    <p>
                      Allison is no stranger to the cliché of wanting to look
                      younger than she feels. She’s a relatively active and
                      healthy person – but just wishes the lines on her face and
                      neck never had to happen. Allison spent a lot of her
                      younger years sunbathing and is now looking to correct the
                      damage caused. Dark spots, lines, and general aging has
                      her feeling less confident than usual. Her best friend is
                      a breast cancer survivor who discovered Riversol through
                      necessity – the only products that would help her skin
                      after chemotherapy – and as soon as she told Allison about
                      the sampler, she had to try it. Since then, she’s been
                      hooked.
                    </p>
                  </div>
                </ColumnContentSm>
              </ColumnSm>
              <ColumnSm>
                <ImageSm src={case1_allison} id="" />
              </ColumnSm>
            </PersonaWrapper>
          </PersonaContainer>

          <EmpathyContainer>
            <ColumnContentLg>
              <div>
                <h2>User Personas</h2>
                <p>
                  I utilized the survey findings to craft user personas, laying
                  the foundation for the project ahead.
                </p>
                <p>
                  I utilized the survey findings to craft user personas, laying
                  the foundation for the project ahead.
                </p>
              </div>
            </ColumnContentLg>
            <EmpathyWrapper>
              <ColumnSm>
                <ImageSm src={case1_cathy} id="" />
              </ColumnSm>
              <ColumnSm>
                <ColumnContentSm>
                  <div>
                    <h2>Cathy - 60 year old with sensitive skin</h2>
                  </div>
                  <div>
                    <p>
                      Cathy has had sensitive skin all her life, forcing her
                      into having to understand good skincare at a very early
                      age. Finding products that work without a reaction to her
                      dry, reactive skin has been a difficult process – but
                      something she’s come to terms with, trying every product
                      in every price range. Since finding Riversol, she’s
                      narrowed down her routine, and has freed up storage space
                      in her bathroom because she no longer holds onto the
                      graveyard of skincare that didn’t work.
                    </p>
                  </div>
                </ColumnContentSm>
              </ColumnSm>
            </EmpathyWrapper>
          </EmpathyContainer>

          <ClosingWrapper>
            <Image src={case1_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case1;
