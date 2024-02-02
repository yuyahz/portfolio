import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  ColumnLg,
  ColumnContentLgMd,
  ColumnContentLg,
  ColumnContentMd,
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
} from "../CaseElements";
import {
  IntroContainer,
  IntroWrapper,
  ResearchInsight,
  ContentInfoContainer,
  ContentTitleContainer,
  ContentTitleWrapper,
} from "./Case3_Elements";
import case3_hero from "../../images/case3_hero.png";
import case3_snackbar_ensure from "../../images/case3_snackbar_ensure.png";
import case3_snackbar_responsive from "../../images/case3_snackbar_responsive.png";
import case3_snackbar_result from "../../images/case3_snackbar_result.png";
import case3_sales_integrating from "../../images/case3_sales_integrating.png";
import case3_sales_components from "../../images/case3_sales_components.png";
import case3_sales_consistency from "../../images/case3_sales_consistency.png";
import case3_sales_result from "../../images/case2_about_result.png";
import case3_pdp_integrating from "../../images/case3_pdp_integrating.png";
import case3_pdp_usability from "../../images/case3_pdp_usability.png";
import case3_pdp_engagement from "../../images/case3_pdp_engagement.png";
import case3_pdp_additional from "../../images/case3_pdp_additional.png";
import case3_pdp_altenative from "../../images/case3_pdp_alternative.png";
import case3_pdp_result from "../../images/case3_pdp_result.png";
import case3_closing from "../../images/case3_closing.png";

const Article_Case3 = () => {
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
            <ImageCs src={case3_hero} id="" />
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

          {/* Snackbar */}
          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>
                  Create a component for running sales promotions between
                  regular terms
                </span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Snackbar</h2>
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
                    • Develop a component that provides users with a sense of
                    benefit
                  </p>
                  <p>
                    • Ensure that the presence of the component doesn’t disrupt
                    the user experience
                  </p>
                  <p>
                    • Integrate it with other components for seamless
                    functionality
                  </p>
                  <p>• Enhance the conversion rate through a deliverable</p>
                </div>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_snackbar_ensure} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Ensure and attempte</h2>
                  </div>
                  <div>
                    <p>
                      To prevent issues from becoming permanent, it’s crucial to
                      start by exploring the layout and space to meet the
                      necessary requirements. This involves brainstorming ideas,
                      implementing them, and then analyzing them with teams or
                      collaborators to identify any unclear factors.
                    </p>
                    <p>
                      Indeed, the iterative process I practiced helped uncover
                      and address potential problems. It’s a proactive approach
                      to identifying issues and finding solutions to them,
                      ensuring a smoother and more effective project
                      development.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_snackbar_responsive} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Responsive Design and Attention to Detail</h2>
                  </div>
                  <div>
                    <p>
                      Absolutely, ensuring responsible design and paying
                      attention to details play a crucial role in maintaining
                      the consistency of branding and leveraging the
                      Aesthetic-Usability Effect.
                    </p>
                    <p>
                      Meeting requirements within limited spaces can be a
                      challenge, but effective collaboration with a copywriter
                      through mutual discussion can help address this challenge.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_snackbar_result} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Result</h2>
                  </div>
                  <div>
                    <p>
                      After the iterative process, the clarification of various
                      factors greatly contributed to our decision-making.
                    </p>
                    <p>
                      The final product transformed into an interactive
                      component, effectively addressing limited spacing while
                      engaging users through non-disruptive animations.
                    </p>
                    <p>
                      Additionally, the introduction of a dedicated tag to
                      associate this function with product pages and collections
                      became a crucial necessity and also, The analysis of
                      Snackbar results demonstrated a consistent increase in the
                      conversion rate, as indicated in monthly reports.
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
                    The website had previously assigned a modal window to notify
                    customers who hadn’t subscribed.
                  </p>
                  <p>
                    Initially, when I proposed the first ideas of modal windows
                    used in this project, there was concern about whether this
                    was too inhibited when had proposed the first ideas of modal
                    windows used in this project.
                  </p>
                  <p>
                    However, after considering various options, I decided to
                    incorporate static animations that could be used flexibly.
                    While creative implementation is essential and enjoyable, it
                    must also account for the limits and requirements of the
                    project, and balancing creative implementation with
                    limitations and requirements is essential, and I am always
                    dedicated to approaching this with empathy.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

          {/* Cross-sell */}
          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>
                  Implemented user-friendly upselling and cross-selling for an
                  enhanced customer experience.
                </span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>
                  Component-based Design & Content for Cross-sell and Upsell
                </h2>
                <p>
                  Refined the user interface and user experience for upselling
                  and cross-selling based on our analysis, aiming for increased
                  engagement and ultimately driving customer purchases.
                </p>
                <p className="caption">
                  Project Requirements and Responsibilities:
                </p>
                <div className="list">
                  <p>
                    • Explored strategies to enhance product attraction within
                    limited space
                  </p>
                  <p>• Ensured consistent UI design across all product</p>
                  <p>• Contributed to enhancing user engagement</p>
                  <p>
                    • Creating designs that support intuitive user interactions
                    and usability
                  </p>
                </div>
                <p className="caption">
                  Project Clarification: Ensuring Understanding and Effective
                  Execution
                </p>
                <p>
                  <p className="caption-inner">Upselling</p>Upselling is a
                  strategy where a seller encourages a customer to buy
                  additional items or upgrades that may be more expensive,
                  ultimately aiming to increase the overall sale value.
                </p>
                <p>
                  <p className="caption-inner">Cross-selling</p>Cross-selling is
                  a sales technique to get the customer to spend more money by
                  adding more products from other categories than the product
                  being viewed or purchased.
                </p>
                <p>
                  *This case study primarily focuses on cross-selling
                  strategies.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_sales_integrating} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>
                      Integrating design elements for a logical user experience
                    </h2>
                  </div>
                  <div>
                    <p>
                      The project required an effective and intuitive component
                      to support profitability so, to increase engagement, I
                      applied pricing psychology and designed fundamental
                      components in a logical manner.
                    </p>
                    <p>
                      Psychology alone may not solve all problems, but
                      integrating psychological concepts can guide effective A/B
                      testing to enhance a product.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_sales_components} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>
                      Creating interactive components with a seamless user
                      experience
                    </h2>
                  </div>
                  <div>
                    <p>
                      The static version before the user selects is indicated
                      right-side picture. After selecting, the frame will be
                      filled gradually with a blue color as indicated left side.
                    </p>
                    <p>
                      In this project, addressing the constraints of design
                      space has primarily involved incorporating animation,
                      which, in turn, enhances intuitive user interaction.
                    </p>
                    <p>
                      Additionally, products are added only when the user
                      selects “add to cart,” regardless of when they added them.
                      This ensures that the user stays on the page, providing a
                      seamless user experience.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_sales_consistency} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>
                      Maintaining consistency through an agile style guide
                    </h2>
                  </div>
                  <div>
                    <p>
                      Meeting requirements within limited spaces can be a
                      challenge, but effective collaboration with a copywriter
                      through mutual discussion can help address this challenge.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_sales_result} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Result</h2>
                  </div>
                  <div>
                    <p>
                      In conclusion, addressing challenges comprehensively was a
                      crucial process in this project. The outcome contributed
                      to improving key metrics, particularly in terms of
                      profitability.
                    </p>
                    <p>
                      Implementing a component design is crucial for ensuring
                      easy maintenance post-deployment, a key priority for
                      cutting-edge digital products. This approach facilitates
                      optimization after the analysis process.
                    </p>
                    <p>
                      Indeed, considering ease of optimization post-analysis is
                      crucial for efficient time management and overall project
                      success.
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
                    Absolutely, considering the user’s perspective and
                    preferences is key to creating effective upselling and
                    cross-selling strategies. Avoiding obnoxious and intrusive
                    approaches and aligning with user expectations can
                    significantly enhance the success of such techniques.
                  </p>
                  <p>
                    It’s essential to pre-make decisions based on user needs and
                    wants before moving forward with the implementation. Through
                    a systematic approach, I am confident that the products will
                    be robust and cater to our specific requirements.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

          {/* PDP */}
          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>
                  Enhancing the Product Page for Maximum Engagement and
                  Conversion with Crafting Seamless User Journeys
                </span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Optimizing Product Pages</h2>
                <p>
                  Analyzing metrics over time, my teams identified opportunities
                  to enhance customer lifetime value. The analysis highlighted
                  areas for improvement on product pages, prompting me to
                  conceptualize ways to unlock their fundamental potential.
                </p>
                <p>
                  Outstanding product pages can not make the risk of profit
                  loss, even when serving as landing pages without extensive
                  preparation. A well-designed page has sufficient space to
                  effectively communicate product value and benefits to
                  customers so The key lies in the designer’s ability to create
                  a thoughtful and considerate page that takes various factors
                  into account.
                </p>
                <p>
                  Based on the identified factors, we made the decision to
                  proceed with this project.
                </p>
                <p className="caption">
                  Project Requirements and Responsibilities:
                </p>
                <div className="list">
                  <p>
                    • Enhanced the overall design based on collaborative
                    analysis with team members
                  </p>
                  <p>
                    • Consciously integrate profitable elements and an aesthetic
                    focus
                  </p>
                  <p>
                    • Integrating a section to PDP page with high enhancement
                    opportunities
                  </p>
                  <p>
                    • Presenting prototypes to incorporate new ideas discovered
                    during the project’s progression
                  </p>
                </div>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_pdp_integrating} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLgMd>
                  <div>
                    <h2>Integrating requirements seamlessly into the design</h2>
                  </div>
                  <div>
                    <p>
                      Following the team’s analysis, a decision was reached
                      regarding the elements to be incorporated into the hero
                      section, following these guidelines, three prototypes were
                      created.
                    </p>
                    <p>
                      <p style={{ color: "#010606" }}>Video:</p>I incorporated
                      the video in the hero section, keeping in mind our
                      discussion about the importance of exercising caution for
                      appropriateness, preserving a seamless user experience
                      with clear guidelines based on requirements, and through
                      that, recognizing the importance of conveying information
                      about the product.
                    </p>
                  </div>
                </ColumnContentLgMd>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentMd>
                <div>
                  <p>
                    <p style={{ color: "#010606" }}>Promotion offer:</p>
                    There’s no reason to exclude benefits; the key is finding
                    the right way to seamlessly integrate valuable information
                    with visually compelling material to make it stand out
                    effectively.
                  </p>
                  <p>
                    <p style={{ color: "#010606" }}>
                      Simplify info with make it effective:
                    </p>
                    Analyzing abandonment and bounce rates revealed an
                    inappropriate layout affecting user experience. Considering
                    the analysis, replacing organic text with icons and a
                    thoughtful redesign have clarified and addressed these
                    issues.
                  </p>
                </div>
              </ColumnContentMd>
            </ResearchInsight>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_pdp_usability} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Enhancing interactive usability</h2>
                  </div>
                  <div>
                    <p>
                      Resolved the prior issue of a cluttered and
                      non-communicative UI by incorporating and adjusting CSS
                      animations, collapses, drop-downs, and icons. This
                      maintained consistency with the defined design, resulting
                      in improved communication with customers.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_pdp_engagement} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Organize to maintain user engagement</h2>
                  </div>
                  <div>
                    <p>
                      These design components were assigned based on the I
                      created in the previous steps, resulting in a more
                      aesthetic and improved usability. However, for analysis
                      purposes, we took to hide the reviews section and overlay
                      it, deviating from the theoretical approach.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_pdp_additional} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLgMd>
                  <div>
                    <h2>Explore additional opportunities</h2>
                  </div>
                  <div>
                    <p>
                      I identified opportunities to integrate new functions,
                      providing additional avenues for product purchases. We’ve
                      been implementing a website function to help users
                      determine their skin type, a significant contributor to
                      enhancing user engagement.
                    </p>
                    <p>
                      Additionally, the Product Detail Page (PDP) features the
                      same function, although it was not initially optimized for
                      a seamless user experience tied to the purchase and
                      enhancement of increase rate. I have since made
                      adjustments to enhance its usability.
                    </p>
                  </div>
                </ColumnContentLgMd>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentMd>
                <div>
                  <p>
                    Ensure alignment with UI design standards, incorporate clear
                    call-to-action (CTA) elements, and display the included
                    products prominently within the modal window components.
                  </p>
                </div>
              </ColumnContentMd>
            </ResearchInsight>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_pdp_altenative} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>
                      Explore alternative perspectives and leverage ideas from
                      different angles
                    </h2>
                  </div>
                  <div>
                    <p>
                      Apart from this project, I’ve been contemplating the use
                      of sticky components to enhance the user experience and
                      potentially boost profitability. Recognizing the need for
                      a valid reason, I meticulously crafted this component for
                      proposing to the team as it could present another valuable
                      opportunity.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>
          </FullWidthContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnLg>
                <Image src={case3_pdp_result} id="" />
              </ColumnLg>
              <ColumnLg>
                <ColumnContentLg>
                  <div>
                    <h2>Result</h2>
                  </div>
                  <div>
                    <p>
                      In the final decision, we opted to integrate a sticky CTA
                      that smoothly hides when it’s not in focus on essential
                      elements. Additionally, the CTA has been transformed into
                      a distinct section, enhancing the navigation of the eye
                      trajectory.
                    </p>
                    <p>
                      Product pages in any industry have the potential to be
                      both the first and last page a visitor interacts with.
                      Therefore, it is essential that these pages are designed
                      to independently meet and support the diverse needs of
                      customers.
                    </p>
                  </div>
                </ColumnContentLg>
              </ColumnLg>
            </FullWidthWrapper>

            <ResearchInsight>
              <ColumnContentMd>
                <div>
                  <p>
                    The quality of products will be evaluated through the PDP,
                    which directly links to the purchase. This will occur if the
                    page or app fulfills crystal-clear conditions, enclosing all
                    relevant factors.
                  </p>
                </div>
              </ColumnContentMd>
            </ResearchInsight>

            <ResearchInsight>
              <ColumnContentSm>
                <div>
                  <p className="text-bold">Insigns:</p>
                  <p>
                    Through this project, I’ve acquired valuable knowledge and
                    gained insight into iterative analysis. Continuously
                    analyzing these pages is crucial for contributing to the
                    growth of the company.
                  </p>
                </div>
              </ColumnContentSm>
            </ResearchInsight>
          </FullWidthContainer>

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

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>My strategy of KPI</h2>
                <p>
                  The KPI strategy I’ve dedicated to revolves around optimizing
                  conversion acquisition, ensuring every step aligns with
                  user-centric design principles, and employing a systematic
                  approach to refine and enhance the overall user experience.
                </p>
                <p className="caption">
                  Revitalizing User Engagement and Conversion Acquisition: Key
                  Responsibilities of the Project
                </p>
                <p style={{ color: "#010606" }}>Primary priorities of KPI</p>
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
                <p style={{ color: "#010606" }}>Secondary priorities of KPI </p>
                <div className="list">
                  <p>• Customer Acquisition Cost</p>
                  <p>• Customer Lifetime Value</p>
                  <p>• Marketing Return on Investment</p>
                  <p>• Churn Rate</p>
                  <p>• Full Product</p>
                </div>
                <p>
                  This involves iterative design practices, incorporating
                  pricing psychology, and utilizing A/B testing for continuous
                  improvement. The goal is to maximize engagement, support
                  profitability, and provide a seamless, intuitive experience
                  for users navigating the products and making purchase
                  decisions.
                </p>
                <p>
                  Frequently, exercising patience is crucial to achieving
                  meaningful contributions. The secure and experiential process
                  not only forms the foundation for results but also brings
                  expansive joy to my work through the satisfaction of
                  accomplishments.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ClosingWrapper>
            <Image src={case3_closing} id="" />
          </ClosingWrapper>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Case3;
