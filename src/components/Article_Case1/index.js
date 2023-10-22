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
  ImageCircle,
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
  CompetitorContainer,
  CompetitorImageWrapper,
  InsertContainer,
  InsertWrapper,
  ClosingWrapper,
} from "./CaseElements";
import case1_hero from "../../images/case1_hero.png";
import case1_closing from "../../images/case1_closing.png";
import case1_research from "../../images/case1_research.png";
import case1_cathy from "../../images/Cathy.png";
import case1_allison from "../../images/Allison.png";
import compatitor_laroche from "../../images/Compatitor_LA_ROCHE_POSAY.png";
import compatitor_neostrata from "../../images/Compatitor_NEOSTRATA.png";
import compatitor_perblle from "../../images/Compatitor_PERBLLE.png";
import compatitor_solvaderm from "../../images/Compatitor_SOLVADERM.png";
import compatitor_city from "../../images/Compatitor_City_Beauty.png";

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
                <h2>Empathy Map</h2>
                <p>
                  The empathy map serves as a collaborative tool that allows
                  design teams to cultivate a deeper understanding of their
                  customers. It is particularly useful for representing and
                  empathizing with distinct user groups or customer segments.
                </p>
              </div>
            </ColumnContentLg>
            <EmpathyWrapper>
              <div className="box">
                <ColumnContentSm>
                  <div className="empathy-border">
                    <p>Says:</p>
                    <p>• I’m always having trouble with my skin</p>
                    <p>• My daily routine is unstable</p>
                    <p>• I don’t have time to go to the store</p>
                    <p>• I don’t know how to take care of my skin</p>
                    <p>
                      • My sensitivities and allergies prevent buying products
                    </p>
                  </div>
                </ColumnContentSm>
              </div>
              <div className="box">
                <ColumnContentSm>
                  <div className="empathy-border">
                    <p>Thinks:</p>
                    <p>• I should try skincare products</p>
                    <p>• I should prevent factor of skincare troubles</p>
                    <p>• I should take care of my lifestyle</p>
                    <p>• I should have a better routine</p>
                    <p>• I should go to the skincare workshop</p>
                  </div>
                </ColumnContentSm>
              </div>
              <div className="box">
                <ColumnContentSm>
                  <div className="empathy-border">
                    <p>Does:</p>
                    <p>• I’m always having trouble with my skin</p>
                    <p>• I try to see a recurring dermatologist</p>
                    <p>
                      • Pays for a subscription to find solutions but not help
                    </p>
                    <p>• I always buy different products</p>
                    <p>
                      • I try to ask products reputation people who are familiar
                      with it
                    </p>
                  </div>
                </ColumnContentSm>
              </div>
              <div className="box">
                <ColumnContentSm>
                  <div className="empathy-border">
                    <p>Feels:</p>
                    <p>• Drained due to bad overall factors</p>
                    <p>
                      • I gave up finding a product due to sensitivities and
                      allergies
                    </p>
                    <p>
                      • I frustrated for finding all the things consuming time
                    </p>
                    <p>• Never seen ideal products for anti-aging</p>
                    <p>• Sensitive skin products make more trouble my skin</p>
                  </div>
                </ColumnContentSm>
              </div>
            </EmpathyWrapper>
          </EmpathyContainer>

          <CompetitorContainer>
            <ColumnContentLg>
              <div>
                <h2>Competitor Analysis</h2>
                <CompetitorImageWrapper>
                  <div className="image">
                    <ImageCircle src={compatitor_laroche} id="" />
                  </div>
                  <div className="image">
                    <ImageCircle src={compatitor_neostrata} id="" />
                  </div>
                  <div className="image">
                    <ImageCircle src={compatitor_perblle} id="" />
                  </div>
                  <div className="image">
                    <ImageCircle src={compatitor_solvaderm} id="" />
                  </div>
                  <div className="image">
                    <ImageCircle src={compatitor_city} id="" />
                  </div>
                </CompetitorImageWrapper>
                <p>
                  Through hands-on exploration of our competitors’ websites and
                  apps and an extensive review of Google feedback, I identified
                  significant challenges and uncovered prevalent user issues.
                </p>
                <div className="analysis-lists">
                  <p>• clutter UI</p>
                  <p>• difficult to find the customer’s type of issue</p>
                  <p>• overwhelming visuals</p>
                  <p>• confusing content placement</p>
                  <p>
                    • being hard to discover products along with your needs{" "}
                  </p>
                  <p>• products user guide issue</p>
                  <p>• complication of applying reward</p>
                  <p>• unclear method to apply seasonal rewards</p>
                  <p>• cart problems when combined with your rewards</p>
                  <p>• basic payment anxiety caused by unclear steps</p>
                </div>
              </div>
            </ColumnContentLg>
          </CompetitorContainer>

          <InsertContainer>
            <InsertWrapper>
              <div>
                <span>
                  In-depth research is essential because it forms the foundation
                  of informed design decisions.
                </span>
              </div>
            </InsertWrapper>
          </InsertContainer>

          <ClosingWrapper>
            <Image src={case1_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case1;
