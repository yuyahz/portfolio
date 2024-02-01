import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  ColumnContentLgTxt,
  ColumnContentLg,
  SingleColumnContainer,
  SingleColumnWrapper,
  Image,
  ImageCircleFb,
  CaseContainer,
  CaseWrapper,
  HeroImageWrapper,
  TitleContainer,
  TitleColumn,
  TitleWrapper,
  TagWrapper,
  Tag,
  Captions,
  CreditWrapper,
  CreditTitle,
  CreditBody,
} from "../CaseElements";
import {
  HeroImage,
  IntroContainer,
  IntroWrapper,
  ContentInfoContainer,
  ContentTitleContainer,
  ContentTitleWrapper,
} from "./DarumaElements";
import DarumaArticle_1 from "../../images/DarumaArticle_1.png";
import DarumaArticle_2 from "../../images/DarumaArticle_2.png";
import DarumaArticle_3 from "../../images/DarumaArticle_3.png";
import DarumaArticle_4 from "../../images/DarumaArticle_4.png";
import DarumaArticle_5 from "../../images/DarumaArticle_5.png";
import DarumaArticle_6 from "../../images/DarumaArticle_6.png";
import DarumaArticle_7 from "../../images/DarumaArticle_7.png";

const Article_Daruma = () => {
  return (
    <CaseContainer id="daruma" style={{ background: "white" }}>
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
            <HeroImage src={DarumaArticle_1} id="" />
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
                    <p>User Interview</p>
                  </Tag>
                  <Tag>
                    <p>Wireframing</p>
                  </Tag>
                  <Tag>
                    <p>Prototyping</p>
                  </Tag>
                  <Tag>
                    <p>Information Architecture</p>
                  </Tag>
                  <Tag>
                    <p>Desing System</p>
                  </Tag>
                  <Tag>
                    <p>Agile Development</p>
                  </Tag>
                  <Tag>
                    <p>Vector - illustration</p>
                  </Tag>
                  <Tag>
                    <p>Arrange Photographer</p>
                  </Tag>
                  <Tag>
                    <p>Web Management</p>
                  </Tag>
                  <Tag>
                    <p>Website Maintenance</p>
                  </Tag>
                </TagWrapper>
                <div>
                  <h1>
                    The restaurant requested a new concept, aiming for a
                    smoother and more accessible website for customers.
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
                  <p>Developer: Yuya Hashirizaki</p>
                </CreditBody>
              </CreditWrapper>
            </TitleColumn>
          </TitleContainer>

          <IntroContainer>
            <IntroWrapper>
              <div>
                <h3>
                  The restaurant aimed to revamp its website, catering to
                  customers in Japan and those visiting the country.
                </h3>
              </div>
              <div>
                <h3>
                  The website previously featured outdated designs, making it
                  challenging for clients to navigate and access the offered
                  services.
                </h3>
              </div>
              <div>
                <h3>
                  Daruma had made a strategic choice to bring all of their
                  offerings and new service under one website.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>
                  I took on the responsibility of building the website project
                  for a specialty Korean cuisine and BBQ restaurant, gaining
                  magnificent experience in the process.
                </span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={DarumaArticle_2} />
              <Captions>
                <div>
                  <p className="lastCaption">Agile Workflow</p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>The Goal</h2>
              </div>
              <div>
                <p>
                  The primary idea for the website is to enable users to easily
                  create and share reservations for a night out with friends and
                  family at the restaurant.
                </p>
                <p>
                  While there are many similar websites on the market, most of
                  them are complex and similar in functionality.
                </p>
                <p>
                  The restaurant's main requirement has always been to keep the
                  website usable, reliable, and functional with an aesthetic
                  that is minimal, simple, and clean.
                </p>
                <p>
                  No ads or tricks, just a consistent and intuitive user
                  experience aimed at providing value and keeping users
                  satisfied and engaged.
                </p>
                <p>
                  The client emphasized agile work to deliver the product
                  efficiently.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image
                style={{ padding: "clamp(15px, 10%, 140px)" }}
                src={DarumaArticle_3}
              />
              <Captions>
                <div>
                  <p>Images for wireframe</p>
                </div>
              </Captions>

              <Image
                style={{ padding: "clamp(15px, 10%, 140px)" }}
                src={DarumaArticle_4}
              />
              <Captions>
                <div>
                  <p className="lastCaption">Images for user journey map</p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>My role</h2>
                <p>
                  In this project, I served as a versatile UI/UX designer and
                  developer, providing advisory input for the website.
                </p>
                <p>
                  Moreover, I held the position of an administrator, overseeing
                  the project's overall management.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Challenge</h2>
                <p>
                  As mentioned earlier, I undertook the entire design and
                  development process for this project using my skills.
                </p>
                <p>
                  Timely delivery was a critical requirement, making it
                  imperative to present the finalized product quickly.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Solution</h2>
                <p>
                  It was essential to balance the perspectives of both a
                  designer and developer, and I aimed to treat both skill sets
                  with equal importance.
                </p>
                <p>
                  Considering the client's requirements for an aesthetically
                  minimal, simple, and clean design, coupled with the need for a
                  swift development pace, I found "React" to be the most
                  suitable library.
                </p>
                <p>
                  This decision was driven by its alignment with current trends,
                  its logical advantages, the perception of fast loading speed
                  by end-users, and my proficiency in the language.
                </p>
                <p>
                  Additionally, I chose for "React Bootstrap" as a reliable
                  framework to facilitate quick development and achieve a
                  consistent design.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Final thoughts</h2>
                <p>
                  During this project, I encountered some limitations with
                  Bootstrap, which led me to consider future issues and find
                  solutions based on the context of this project.
                </p>
                <p>
                  Rather than viewing them as problems, I saw them as
                  opportunities for productive outcomes.
                </p>
                <p>
                  I established an efficient configuration to prevent potential
                  challenges, particularly for long-term project involvement.
                </p>
                <p>
                  This experience emphasized the importance of enhancing my
                  proficiency as a digital creator.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={DarumaArticle_5} />
              <Captions>
                <div>
                  <p>Finalized mobile images</p>
                </div>
              </Captions>

              <Image src={DarumaArticle_6} />
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLgTxt>
              <div>
                <p>
                  Design and developer collaboration is a most challenging
                  problem and there are many opportunities how to sync each
                  other.
                </p>
                <p>
                  All the design tools that exist today isn't enforcing that
                  behavior.
                </p>
                <p>
                  All they do is attempt to do similar things. Unless design to
                  development all share the same settings or agreed on setting,
                  there is no real "bridge” between developers and designers.
                </p>
              </div>
            </ColumnContentLgTxt>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLgTxt>
              <div>
                <p>
                  While some developers were inexperienced, it was a difficult
                  to proceed with the project in a limited time to convey the
                  first instruction with the design tool.
                </p>
                <p>
                  In order to get a better understanding of the design, I
                  created it myself without using Adobe XD only at the
                  beginning.
                </p>
                <p>
                  After a few meetings with Larry, I saw what he really needed,
                  so I decided to create a landing page and homepage to
                  implement it concretely.
                </p>
                <p>
                  The most important thing in doing so was to create a
                  consistent design to get the most out of his brand.
                </p>
              </div>
            </ColumnContentLgTxt>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>The Outcome</h2>
              </div>
              <div>
                <p>
                  Navigating through this project, and reflecting on it now, it
                  was undoubtedly the most fast-paced project I've ever
                  undertaken, emphasizing the necessity to deliver the product
                  quickly.
                </p>
                <p>
                  Despite the tight timeline, I successfully delivered a
                  valuable website for my client.
                </p>
                <p>
                  In my career at that time, I recognized Balancing both design
                  and development perspectives was crucial for my career growth.
                </p>
                <p>
                  This experience taught me the importance of investing more
                  effort and time, emphasizing the value of both elements to
                  foster effective teamwork.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div style={{ maxWidth: "1140px", margin: "auto" }}>
                <div style={{ textAlign: "center", maxWidth: "1140px" }}>
                  <ImageCircleFb src={DarumaArticle_7} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h2>
                    " The outstanding product created by talented web specialist
                    by Yuya Hashirizaki that the product is very content even
                    though I couldn't make to him enough time to build up for
                    our desirable web site. "
                  </h2>
                </div>
                <div className="feedback">
                  <p>
                    I am pleased to be able to write this letter of
                    recommendation for Yuya Hashirizaki. In my opinion, Yuya is
                    a hard-working self-starter who invariably understands
                    exactly what a project is all about. That those skills were
                    required especially in this project. Our thoughts of the
                    previous website were that it had old fashioned style. So
                    that we couldn’t understand why we have to renew it until we
                    get complaints from our regular customers. But we couldn’t
                    spend money to renovate for a new web site. I was just about
                    to start to search how do I find the proper person and, my
                    co-worker found out dependable web specialist among a lot of
                    candidates in IT industry. He consistently produced
                    high-quality work in a timely fashion so far invariably.
                    After starting the project with him, first of all, we have
                    made meetings frequently to reduce pain points for the
                    future. It was a necessary thing because we couldn’t invest
                    much in this project so that, we had to reduce the
                    possibility to generate misunderstandings for each other to
                    avoid changes after finalized. I so much respect Yuya’s
                    attitude toward his work. I am therefore very pleased to be
                    able to recommend Yuya for future positions.
                  </p>
                </div>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Daruma;
