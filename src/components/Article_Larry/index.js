import React from "react";
import { motion } from "framer-motion";
import {
  HomeIconWrapper,
  HomeIcon,
  FullWidthContainer,
  FullWidthSmWrapper,
  ColumnLg,
  ColumnContentLgTxt,
  ColumnContentLg,
  SingleColumnContainer,
  SingleColumnWrapper,
  Image,
  Video,
  VideoBottom,
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
} from "./LarryElements";
import LarryArticle_11 from "../../images/LarryArticle_11.png";
import LarryArticle_2 from "../../images/LarryArticle_2.png";
import LarryArticle_3 from "../../images/LarryArticle_3.png";
import LarryArticle_4 from "../../images/LarryArticle_4.png";
import LarryArticle_5 from "../../images/LarryArticle_5.png";
import LarryArticle_6 from "../../images/LarryArticle_6.png";
import LarryArticle_7 from "../../images/LarryArticle_7.png";
import LarryArticle_8 from "../../images/LarryArticle_8.png";
import LarryArticle_9 from "../../images/LarryArticle_9.png";
import LarryMovie_1 from "../../videos/LarryMovie_1.mp4";
import LarryMovie_2 from "../../videos/LarryMovie_2.mp4";
import case2_closing from "../../images/case2_closing.png";

const Article_Larry = () => {
  return (
    <CaseContainer id="larry" style={{ background: "white" }}>
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
            <HeroImage src={LarryArticle_11} id="" />
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
                    <p>Motion Prototype</p>
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
                    <p>Logo Design</p>
                  </Tag>
                </TagWrapper>
                <div>
                  <h1>
                    Larry Linton was tasked with creating his own website,
                    addressing the unique needs for the publications
                    introduction website.
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
                  Larry had just published a book about Parkinson’s disease,
                  which he also suffers from, and was trying to create a website
                  to spread the book around the world.
                </h3>
              </div>
              <div>
                <h3>
                  After connecting with the agency through Riipen, he initiated
                  the project with us as he fulfilled the final project
                  recruitment requirements.
                </h3>
              </div>
              <div>
                <h3>
                  We split into four groups, competing for Larry's trust. I took
                  charge of all the first-stage presentations and, fortunately,
                  was selected from the four groups, ultimately succeeding in
                  gaining his trust.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>
                  We received his conviction in the idea of "Living Your Most
                  Authentic Life Possible".
                </span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={LarryArticle_2} />
              <Captions>
                <div>
                  <p className="lastCaption">
                    Winning designs for final project
                  </p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>My role</h2>
              </div>
              <div>
                <p>
                  I worked on the project as a UI/UX designer, together with the
                  development team.
                </p>
                <p>
                  The image alongside is the initial prototype that I proposed,
                  earning credibility in the process.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Challenge</h2>
                <p>
                  The intention of having a home page was certainly to make
                  money for books, but another intention was to share his own
                  experience and knowledge.
                </p>
                <p>
                  One of the reasons he decided to create a site was because he
                  wanted to convey his own words to other Parkinson's patients
                  on the website. He already has his own blog, and it was also a
                  question of how his blog would appear on the website.
                </p>
                <p>
                  He already has his own blog, and it was also a question of how
                  his blog would appear on the website.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Solution</h2>
                <p>
                  My first job when this project started was to guide the team
                  on the best path towards the goals of the project. Therefore,
                  I was responsible for building each section of the project,
                  designing it for different devices, managing the timeline,
                  giving detailed instructions to each developer, and overseeing
                  the whole process.
                </p>
                <p>
                  My first job when this project started was to guide the team
                  on the best path towards the goals of the project. Therefore,
                  I was responsible for building each section of the project,
                  designing it for different devices, managing the timeline,
                  giving detailed instructions to each developer, and overseeing
                  the whole process.
                </p>
                <p>
                  This way we could also achieve a more consistent user
                  experience across the different end-users.
                </p>
                <p>
                  Design methods used during the project included journey
                  mapping, UI/UX design, and prototyping solutions. During the
                  project, I also designed features needed for a wider launch.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={LarryArticle_3} />
              <Captions>
                <div>
                  <p>Agile Workflow</p>
                </div>
              </Captions>

              <Image src={LarryArticle_4} />
              <Captions>
                <div>
                  <p className="lastCaption">Agile Design System for Team</p>
                </div>
              </Captions>
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

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={LarryArticle_5} />
              <Captions>
                <div>
                  <p className="lastCaption">
                    Agile Instructions for Developers
                  </p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

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

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={LarryArticle_6} />
              <Captions>
                <div>
                  <p className="lastCaption">Overall art board view</p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLgTxt>
              <div>
                <p>
                  After a few meetings with Larry, I saw what he really needed,
                  so I decided to create a landing page and homepage to
                  implement it concretely.
                </p>
                <p>
                  The most important thing in doing so was to create a
                  consistent design to get the most out of his brand.
                </p>
                <p>
                  The problem is that if we were able to communicate with the
                  clients deeper in terms of functionality during the meeting, I
                  think the project would have progressed a little faster.
                </p>
                <p>
                  It's a problem with every project, regardless of language or
                  culture, but the challenge is how to deal with it. I've
                  learned a lot from this experience and I'm ready to move on to
                  the next stage.
                </p>
              </div>
            </ColumnContentLgTxt>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthSmWrapper>
              <ColumnLg>
                <Video
                  autoPlay
                  playsInline
                  loop
                  muted
                  src={LarryMovie_1}
                  type="video/mp4"
                />
              </ColumnLg>
              <ColumnLg>
                <VideoBottom
                  autoPlay
                  playsInline
                  loop
                  muted
                  src={LarryMovie_2}
                  type="video/mp4"
                />
              </ColumnLg>
            </FullWidthSmWrapper>
            <Captions>
              <div>
                <p className="lastCaption">Agile Instructions for Developers</p>
              </div>
            </Captions>
          </FullWidthContainer>

          <ContentInfoContainer>
            <ColumnContentLgTxt>
              <div>
                <p>
                  At the beginning, I didn't plan to create blog content, but at
                  the time of the meeting, I received a request to create a blog
                  section, so I decided to do it in a hurry.
                </p>
                <p>
                  At first, it was a key to create individual blog article pages
                  on the homepage, but since Larry wanted to make the system
                  simple to update and edit, end-users can touch the outline of
                  the article and assist clicking.
                </p>
                <p>I designed a UI that possible to do it.</p>
              </div>
            </ColumnContentLgTxt>
          </ContentInfoContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={LarryArticle_7} />
              <Captions>
                <div>
                  <p className="lastCaption">Finalized design images</p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>The Outcome</h2>
              </div>
              <div>
                <p>
                  The essential intention of this project is to make Larry's
                  experiences and books known to people all over the world.
                </p>
                <p>
                  Not to let people know about their suffering, but to convey
                  their hope.
                </p>
                <p>
                  I was convinced that at least my design would reach as many
                  people as possible.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div style={{ maxWidth: "1140px", margin: "auto" }}>
                <div style={{ textAlign: "center", maxWidth: "1140px" }}>
                  <Image
                    src={LarryArticle_8}
                    style={{
                      width: "6rem",
                      marginBottom: "2rem",
                      borderRadius: "50%",
                    }}
                  ></Image>
                </div>
                <div style={{ textAlign: "center" }}>
                  <h2>
                    " The end product exceeded my expectations. Thanks to each
                    member of the team, the website captures my personality - it
                    has a soul!! "
                  </h2>
                </div>
                <div className="feedback">
                  <p>
                    It’s one thing to design a website: With so many online
                    resources available to guide you - both free and
                    subscription based - a website can be uploaded and be
                    functioning within hours. But, to have a website designed
                    that captures the wishes and personality of the client is
                    quite different. This presents a unique challenge. It takes
                    talent. It takes skill, and it takes patience. I was
                    fortunate to experience this with the students from
                    Cornerstone International Community College of Canada.
                    Cornerstone is a fully accredited college offering diploma
                    programs in Web & Mobile App Development, Network Solutions
                    & System Specialist, International Business Management,
                    Digital Marketing Specialist, Hospitality Management, and
                    Advertising and Graphic Design, as well as, English as
                    Second Language training. Their high-quality educational
                    services and career counselling are delivered within a
                    positive team environment. It serves Canadian and
                    international students from over 20 countries, and is
                    committed to assisting their students obtain gainful
                    employment in the shortest possible time. A team consisting
                    of final year students was assigned to assist me with the
                    design of a landing page and website to support a book
                    launch and my personal brand. The team comprised of: Ayaka
                    Tsubouchi Yuya Hashirizaki Anzu Nakayama Gabriel Sciacca
                    Dias Alexandre Bellini Dias Each team member was engaged and
                    fully invested in the project. Over a series of zoom calls,
                    questions were asked of me on what I was seeking to achieve.
                    The end product exceeded my expectations. Thanks to each
                    member of the team, the website captures my personality - it
                    has a soul! I would encourage any employer who may be
                    looking to hire engaged, creative and talented students to
                    look no further than Cornerstone, and these students.
                  </p>
                </div>
                <Image src={LarryArticle_9} />
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          {/* <ClosingWrapper>
            <Image src={LarryArticle_9} />
          </ClosingWrapper> */}
        </CaseWrapper>
      </motion.div>
    </CaseContainer>
  );
};

export default Article_Larry;
