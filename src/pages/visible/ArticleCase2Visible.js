import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import AutoHidingNavBar from "../../components/AutoHidingNavBar";
import {
  ColumnLg,
  ColumnContentLgMd,
  ColumnContentLg,
  ColumnContentMd,
  ColumnContentSm,
  ColumnInsertContent,
  Image,
  ImageCs,
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
  FullWidthContainer,
  FullWidthWrapper,
  ClosingWrapper,
} from "../../components/ArticleElements";
import {
  IntroContainer,
  IntroWrapper,
  ResearchInsight,
  BoxWrapper,
  ContentInfoContainer,
  ContentTitleContainer,
  ContentTitleWrapper,
  InsertImageContainer,
  InsertImageWrapper,
} from "./Case2_Elements";
import case2_hero from "../../images/case2_hero.png";
import case2_filter_initial from "../../images/case2_filter_initial.png";
import case2_filter_iterative from "../../images/case2_filter_iterative.png";
import case2_filter_usability from "../../images/case2_filter_usability.png";
import case2_filter_chip from "../../images/case2_filter_chip.png";
import case2_filter_result from "../../images/case2_filter_result.png";
import case2_replenishment_mockup from "../../images/case2_replenishment_mockup.png";
import case2_replenishment_userflow from "../../images/case2_replenishment_userflow.png";
import case2_replenishment_result from "../../images/case2_replenishment_result.png";
import case2_about_identify from "../../images/case2_about_identify.png";
import case2_about_credibility from "../../images/case2_about_credibility.png";
import case2_about_customerbase from "../../images/case2_about_customerbase.png";
import case2_about_responsible from "../../images/case2_about_responsible.png";
import case2_about_insert from "../../images/case2_about_insert.png";
import case2_about_result from "../../images/case2_about_result.png";
import case2_closing from "../../images/case2_closing.png";

const Article_Case2_Visible = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";

    if (!isAuthenticated) {
      navigate("/Article_Case2");
    } else {
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  return (
    <CaseContainer>
      <AutoHidingNavBar />
      <motion.div
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 700,
          opacity: 0,
        }}
        exit={{
          y: -700,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <CaseWrapper>
          <HeroImageWrapper>
            <ImageCs src={case2_hero} id="" />
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
                  <p>• Preventing time-consuming and frustrating experiences</p>
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
                encountered a lot of challenges that I never considered possible
                to be complicated so I decided to organize a meeting as a
                brainstorm to narrow down requirements before moving on to
                actual and We could decide on minimum conditions. We ended up
                deciding on four categories as prerequisites for creating the
                filter.
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
                      in designing the product card UI due to space constraints.
                      As a result, the initial prototype posed challenges in
                      delivering a seamless user experience for applied filters.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_filter_iterative} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Iterative Design for Robust Solutions</h2>
                  </div>
                  <div>
                    <p>
                      I diligently tackled iterative desing to address the
                      challenges, with a specific focus on managing chips after
                      applying the filter. The process was approached from
                      bottom to up.
                    </p>
                    <p>
                      In our effort to enhance intuitive user searches, the
                      decision was made to implement a horizontal scroll where
                      chips should be anchored at the bottom.
                    </p>
                    <p>
                      Additionally, it facilitates the utilization of space for
                      product cards, effectively minimizing time-consuming
                      interactions. The best solution might not have been found
                      had it not been for the Phase 3 process.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_filter_usability} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Enhance Usability with Defined Criteria</h2>
                  </div>
                  <div>
                    <p>
                      Making specific criteria a top priority for this project
                      for has been proven by extensive research. Furthermore,
                      employing this concept ensures an efficient search
                      experience.
                    </p>
                    <p>
                      We arrived at a robust solution, and in Phase 4, I
                      expanded the filter by incorporating a large drop-down
                      menu to emphasize the presence of specific criteria.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_filter_chip} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Optimizing Chip Design</h2>
                  </div>
                  <div>
                    <p>
                      After establishing a solid design foundation and
                      conducting practice, I refined the chip designs. The chips
                      are grouped by different colors.
                    </p>
                    <p>
                      Consistency is a key principle in constructing a robust
                      UI, so the colors are derived from the design overview I
                      created earlier.
                    </p>
                    <p>
                      This chip design is grounded in the concept of aiding
                      users in product search, even when they don’t have a
                      specific name in mind.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_filter_result} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Result</h2>
                  </div>
                  <div>
                    <p>
                      This project demanded careful consideration to avoid
                      unintentional user conflicts, which led to longer
                      decision-making time for our teams than usual.
                    </p>
                    <p>
                      Although this case study doesn’t delve into the mobile
                      aspect, the concept remains the same; however, it requires
                      a different approach to UX and UI design, especially
                      considering that over 70% of our users employ mobile
                      devices. I dedicated significant effort to mobile design.
                    </p>
                    <p>
                      Filtering is a substantial undertaking for designers and
                      developers, but the real satisfaction comes when we
                      successfully launch products that work seamlessly in the
                      long run.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentSm>
                <div>
                  <p className="text-bold">Insights:</p>
                  <p>
                    The overall project has been highly satisfying, and we
                    established a strong collaboration with the backend team.
                  </p>
                  <p>
                    A valuable insight gained is that sorting through filtering
                    is a crucial and core element in improving user experience.
                  </p>
                  <p>
                    It’s evident that this will further enhance the integration
                    of marketing features, ultimately contributing to the
                    company’s profitability.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

          {/* Auto-Replenishment */}
          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>Creating an Auto-Replenishment Functionality</span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Auto-Replenishment</h2>
                <p>
                  The marketing team suggested the implementation of a new
                  purchasing function to boost profitability. In alignment with
                  their requirements, I initiated the project.
                </p>
                <p className="caption">
                  Project Requirements and Responsibilities:
                </p>
                <div className="list">
                  <p>
                    • Developing a system for product subscription purchases
                  </p>
                  <p>
                    • Designing an interface with the aesthetic-usability effect
                  </p>
                  <p>
                    • Designing thoughtful functions with integrated benefits
                    (Points and Discounts)
                  </p>
                  <p>• Building a seamless and stress-free user experience</p>
                  <p>
                    • Seamless integration with Auto-Replenishment related pages
                  </p>
                </div>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_replenishment_mockup} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Mockup with Comprehensive Functionality</h2>
                  </div>
                  <div>
                    <p>
                      Projects often come with tight deadlines, requiring a
                      comprehensive approach from both designers and developers.
                      Following a series of meetings, I began the mockup
                      creation process.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_replenishment_userflow} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Ensuring Complete User Flow</h2>
                  </div>
                  <div>
                    <p>
                      Before implementation, I prepared a mock-up, but by
                      creating a user flow, I was able to identify missing
                      elements and ensure the smooth integration of functions to
                      avoid conflict in user experience.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_replenishment_result} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Result</h2>
                  </div>
                  <div>
                    <p>
                      Through several steps, We could launch addressed products
                      that the core problem and user needs. Relatively, could be
                      carried out without a critical problem but in the final
                      steps after testing, we have changed a couple of UI to
                      simplify in order to consider UX enhancements.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentSm>
                <div>
                  <p className="text-bold">Insights:</p>
                  <p>
                    The functions associated with different components need to
                    be carefully considered within the user flow to ensure a
                    seamless user experience.
                  </p>
                  <p>
                    If there are issues at any point, it can compromise the
                    functionality of the entire system and impact profitability.
                  </p>
                  <p>
                    This approach has been invaluable in shaping my perspective.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

          {/* About */}
          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>Revamping the About Page to Emphasize Value</span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>About page</h2>
                <p>
                  It can be challenging to allocate resources to projects that
                  don’t directly contribute to profits, especially for a company
                  in the midst of growth. Nevertheless, I always seek
                  opportunities to create comprehensive value. The About page,
                  which consolidates history, values, and mission in one place,
                  serves as a crucial destination for users making their first
                  visit to the website and whether to purchase or not. It
                  presents an opportunity to enhance engagement, which is why we
                  chose to revamp the About page.
                </p>
                <p className="caption">
                  Project Requirements and Responsibilities:
                </p>
                <div className="list">
                  <p>• Strengthening page credibility for a robust web age</p>
                  <p>
                    • Designing an interface with the aesthetic-usability effect
                  </p>
                  <p>• Capturing UI Design Trends</p>
                  <p>• Add a section to tie to the purchase</p>
                </div>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_about_identify} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Identifying Missing Significance First</h2>
                  </div>
                  <div>
                    <p>
                      In the initial project stage, I was fully engaged in
                      generating mock-ups and brainstorming ideas. These are
                      pivotal steps in establishing a solid foundation.
                    </p>
                    <p>
                      Key tasks included crafting a mission statement, outlining
                      the company’s narrative, showcasing its evolution,
                      highlighting pivotal ‘aha!’ moments, clarifying the target
                      audience, specifying the offered products/services,
                      providing examples of past clients, and articulating the
                      core values.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_about_credibility} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Enhancing Credibility Aesthetically</h2>
                  </div>
                  <div>
                    <p>
                      I believe that the top priority for the About page is to
                      reinforce and enhance credibility throughout this project.
                    </p>
                    <p>
                      In this process, I’ve carefully curated aesthetically
                      pleasing images and crafted a consistent design to enhance
                      visual appeal and credibility.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_about_customerbase} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLgMd>
                  <div>
                    <h2>Expanding the Potential Customer Base</h2>
                  </div>
                  <div>
                    <p>
                      As I progressed with the project, focused on the potential
                      profitability of the About page. Since most visitors to
                      this page are new customers, there’s a chance to turn them
                      into a customer base with proper navigation.
                    </p>
                    <p>
                      To seize this opportunity, I created clickable Free Sample
                      Kit Cards that guide users to the customer application
                      page.
                    </p>
                    <p>
                      Additionally, I designed Cards that direct users to sorted
                      collection pages based on their selected categories.
                    </p>
                  </div>
                </ColumnContentLgMd>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentMd>
                <div>
                  <p>
                    I generated many user interface ideas, with a focus on
                    creating visually engaging elements. Many users are
                    naturally attracted to websites that incorporate interactive
                    animations, making them visually appealing.
                  </p>
                  <p>
                    As a result of thorough research, I’ve decided on the
                    parallax animation function, along with icons, simplified
                    assets, and a signature stump SVG, to create a more refined
                    UI.
                  </p>
                  <p>
                    I incorporated those benefits in this phase, along with
                    creating components for the business section.
                  </p>
                </div>
              </ColumnContentMd>
            </ResearchInsight>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_about_responsible} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Responsible Desingn</h2>
                  </div>
                  <div>
                    <p>
                      In the modern web industry, ensuring responsive user
                      interface design for all devices is essential. On the flip
                      side, websites lacking responsive design are often viewed
                      as subpar.
                    </p>
                    <p>
                      Keeping this in mind, I never neglected the importance of
                      this consideration, right from the project’s initial
                      stages.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <InsertImageContainer>
            <InsertImageWrapper>
              <ImageSm src={case2_about_insert} id="" />
            </InsertImageWrapper>

            <ColumnInsertContent>
              <p>
                A componentized responsive design approach allows for
                flexibility when addressing future challenges that may not have
                been discovered yet.
              </p>
            </ColumnInsertContent>
          </InsertImageContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case2_about_result} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Result</h2>
                  </div>
                  <div>
                    <p>
                      I’ve worked on similar projects before, but each project
                      has unique and significant requirements. In the initial
                      stages of the process, I dedicate time to thoroughly
                      understand the project’s needs. I then move on to
                      subsequent steps, which include choosing the right color
                      scheme, incorporating creative visuals, selecting
                      appropriate staff photos, using readable fonts, and
                      ensuring the page is responsive.
                    </p>
                    <p>
                      All of these aspects are essentially the foundation I
                      focus on when creating an About page, and I apply similar
                      principles to other similar pages.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentSm>
                <div>
                  <p className="text-bold">Insigns:</p>
                  <p>
                    Insights: I’ve come to understand that a compelling About
                    page should be authentic, relatable, genuine, approachable,
                    distinguished, and unique.
                  </p>
                  <p>
                    To achieve this, it’s crucial to have a solid foundation
                    that conveys the brand’s concept or the specific task at
                    hand.
                  </p>
                  <p>
                    If I can’t find this foundation at the project’s outset, I
                    will explore it until I uncover it. This project has
                    reinforced the significance of this approach in my work.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

          <ClosingWrapper>
            <Image src={case2_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case2_Visible;
