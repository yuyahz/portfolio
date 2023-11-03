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
  FullWidthContainer,
  FullWidthWrapper,
  FullWidthFlipWrapper,
  ClosingWrapper,
} from "../CaseElements";
import {
  IntroContainer,
  IntroWrapper,
  ResearchInsight,
  PersonaContainer,
  PersonaWrapper,
  EmpathyContainer,
  EmpathyWrapper,
  CompetitorContainer,
  CompetitorImageWrapper,
  InsertContainer,
  InsertWrapper,
  InsertImageContainer,
  InsertImageWrapper,
} from "./Case2_Elements";
import case2_hero from "../../images/case2_hero.png";
import case2_closing from "../../images/case2_closing.png";
import case1_research from "../../images/case1_research.png";
import case1_cathy from "../../images/Cathy.png";
import case1_allison from "../../images/Allison.png";
import compatitor_laroche from "../../images/Compatitor_LA_ROCHE_POSAY.png";
import compatitor_neostrata from "../../images/Compatitor_NEOSTRATA.png";
import compatitor_perblle from "../../images/Compatitor_PERBLLE.png";
import compatitor_solvaderm from "../../images/Compatitor_SOLVADERM.png";
import compatitor_city from "../../images/Compatitor_City_Beauty.png";
import case1_insert from "../../images/case1_insert.png";
import case1_journey from "../../images/case1_journey.png";
import case1_architecture from "../../images/case1_architecture.png";
import case1_flow from "../../images/case1_flow.png";
import case1_overview from "../../images/case1_overview.png";

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
            <Image src={case2_hero} id="" />
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
                    Analyzing the daily skincare challenges faced by these users
                    served as a wellspring of inspiration, propelling me to
                    ideate and devise optimal design solutions.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

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

          <InsertImageContainer>
            <InsertImageWrapper>
              <ImageSm src={case1_insert} id="" />
            </InsertImageWrapper>
            <ColumnContentLg>
              <p>
                Building on the insights gained from our research, I identified
                critical factors that compelled us to adopt a different
                approach, allowing us to continue progressing with the project.
              </p>
            </ColumnContentLg>
          </InsertImageContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case1_journey} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>User Journey</h2>
                  </div>
                  <div>
                    <p>
                      The user journey, often represented through a visual
                      journey map, illustrates the sequential path a person
                      takes while interacting with a product, service, or brand.
                      It encompasses the stages of discovery, the
                      decision-making process regarding whether to make a
                      purchase.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthFlipWrapper>
              <ColumnLg>
                <Image src={case1_architecture} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Information Architecture</h2>
                  </div>
                  <div>
                    <p>
                      Effective design, when executed, seamlessly integrates
                      with the user experience, becoming invisible. It’s only in
                      cases of poor design that its presence becomes noticeable.
                      Information architecture plays a crucial role in ensuring
                      a smooth and user-friendly experience.
                    </p>
                    <p>
                      This not only enhances the user experience but also
                      minimizes the risk of costly redesigns and ensures that
                      our product or interface is more likely to succeed in the
                      market.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthFlipWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case1_flow} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>User Flow</h2>
                  </div>
                  <div>
                    <p>
                      The user flow outlines the journey a user takes from the
                      moment they launch the application to exploring all
                      website functionalities and performing various actions.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthFlipWrapper>
              <ColumnLg>
                <Image src={case1_overview} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Branding Style Guide</h2>
                  </div>
                  <div>
                    <p>
                      A brand style guide dictates the composition, design
                      principles, and overall visual identity of a company’s
                      branding.
                    </p>
                    <p>
                      My role, which primarily centers on digital product
                      design, played a pivotal role in unifying and enhancing
                      the UI/UX understanding across teams.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthFlipWrapper>
          </FullWidthContainer>

          <ClosingWrapper>
            <Image src={case2_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case1;
