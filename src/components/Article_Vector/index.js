import React from "react";
import { motion } from "framer-motion";
import AutoHidingNavBar from "../AutoHidingNavBar";
import {
  FullWidthContainer,
  FullWidthImageContainer,
  FullWidthWrapper,
  ColumnImage,
  ColumnContentLg,
  SingleColumnContainer,
  SingleColumnWrapper,
  Image,
  ImageNoBorder,
  ImageCircleFb,
  Video,
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
} from "../ArticleElements";
import {
  HeroImage,
  IntroContainer,
  IntroWrapper,
  ContentInfoContainer,
  ContentTitleContainer,
  ContentTitleWrapper,
} from "./VectorElements";
import VectorArticle_1 from "../../images/VectorArticle_1.png";
import VectorArticle_2 from "../../images/VectorArticle_2.png";
import VectorArticle_3 from "../../images/VectorArticle_3.png";
import VectorArticle_4 from "../../images/VectorArticle_4.png";
import VectorArticle_5 from "../../images/VectorArticle_5.png";
import VectorArticle_6 from "../../images/VectorArticle_6.png";
import VectorArticle_7 from "../../images/VectorArticle_7.png";
import VectorArticle_8 from "../../images/VectorArticle_8.png";
import VectorArticle_9 from "../../images/VectorArticle_9.png";
import VectorArticle_10 from "../../images/VectorArticle_10.png";
import VectorArticle_11 from "../../images/VectorArticle_11.png";
import VectorArticle_12 from "../../images/VectorArticle_12.png";
import VectorArticle_13 from "../../images/VectorArticle_13.png";
import mari from "../../images/mari.png";
import VectorMovie_1 from "../../videos/VectorMovie_1.mp4";

const Article_Vector = () => {
  return (
    <CaseContainer id="vector" style={{ background: "white" }}>
      <AutoHidingNavBar />
      <CaseWrapper>
        <motion.div
          animate={{
            x: 0,
            opacity: 1,
          }}
          initial={{
            x: -700,
            opacity: 0,
          }}
          exit={{
            x: 700,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <HeroImageWrapper>
            <HeroImage src={VectorArticle_1} id="" />
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
                </TagWrapper>
                <div>
                  <h1>
                    Hired by Vector International Academy, I modernized websites
                    and brochures with innovative design, gaining valuable
                    insights.
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
                  Suggested by a friend, I offered my design services on a
                  project basis for Vector International Academy. After a few
                  meetings, my portfolio was accepted, and I dedicated myself to
                  meeting Vector's requirements.
                </h3>
              </div>
              <div>
                <h3>
                  An idea that first seemed exciting and intriguing, and turned
                  into a journey full of excitement, surprises with lots of ups
                  and downs.
                </h3>
              </div>
            </IntroWrapper>
          </IntroContainer>

          <ContentTitleContainer>
            <ContentTitleWrapper>
              <div>
                <span>Design lead for Vector International Academy</span>
              </div>
            </ContentTitleWrapper>
          </ContentTitleContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={VectorArticle_2} />
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
                <h2>How it all started</h2>
              </div>
              <div>
                <p>
                  The school had already built its own website, but they wanted
                  to create a more intriguing platform for new content.
                </p>
                <p>
                  In the early days, my primary approach to shaping the idea and
                  progressing with this project was to craft multiple web design
                  prototypes for the website's construction.
                </p>
                <p>
                  We held several meetings to ensure smooth collaboration and
                  facilitate communication.
                </p>
                <p>
                  To pinpoint the right problems, I asked myself what the
                  previous site intentionally did or what service I was
                  building.
                </p>
                <p>These considerations guided my approach to the project.</p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>My role</h2>
                <p>
                  As a UI/UX designer, I collaborated with the development team
                  on multiple projects for Vector, including the main site and
                  brochure. Additionally, I provided input on content
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthImageContainer>
            <FullWidthWrapper>
              <ColumnImage>
                <Image src={VectorArticle_3} />
              </ColumnImage>
              <ColumnImage>
                <Image src={VectorArticle_4} />
              </ColumnImage>
              <Captions>
                <div>
                  <p className="lastCaption">
                    The initial prototype presented to the client
                  </p>
                </div>
              </Captions>
            </FullWidthWrapper>
          </FullWidthImageContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Challenge</h2>
                <p>
                  The significant challenge faced by the client was establishing
                  an accessible means to navigate testimonials and essential
                  sections effortlessly while creating an engaging and powerful
                  website.
                </p>
                <p>
                  Following multiple meetings, I grasped the project's
                  challenges and the client's vision for the most effective
                  site, leading to the proposal of the aforementioned prototype.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnImage>
                <Image src={VectorArticle_5} />
              </ColumnImage>
              <ColumnImage>
                <Image src={VectorArticle_6} />
              </ColumnImage>
              <Captions>
                <div>
                  <p className="lastCaption">
                    The client proposed loading the video upon laptop startup
                  </p>
                </div>
              </Captions>
            </FullWidthWrapper>
          </FullWidthContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={VectorArticle_7} />
              <Captions>
                <div>
                  <p className="lastCaption">
                    Completed the home page design, showcasing Vector and its
                    features
                  </p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Solution</h2>
                <p>
                  We prioritized content unification and adaptability to
                  individual customer needs. Incorporating dynamic content, like
                  slides absent from the previous site, was a focus.
                </p>
                <p>
                  The goal was to offer a seamless experience for diverse
                  customer groups, catering to both non-students and infrequent
                  visitors, ensuring easy access to relevant information.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>Final thoughts</h2>
                <p>
                  I anticipated that the level of involvement from designers and
                  developers in the project's completion would be contingent on
                  the budget and timeline. My approach to this project was
                  centered on thoroughly researching its scalability.
                </p>
                <p>
                  Post the completion of the home page, the client's intentions
                  changed, leading to an increased content load. This posed
                  challenges in modifying previously completed work.
                </p>
                <p>
                  In a project emphasizing consistent design, adaptability
                  proved crucial. It was a valuable experience, underscoring the
                  importance of understanding the client's core intentions.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Image src={VectorArticle_8} />
              <Captions>
                <div>
                  <p>
                    Initiation of Phase One for the Interactive Activities Page
                  </p>
                </div>
              </Captions>

              <Image src={VectorArticle_9} />
              <Captions>
                <div>
                  <p>
                    Completed the design for the Interactive Activities Page and
                    menu bar
                  </p>
                </div>
              </Captions>

              <Image src={VectorArticle_10} />
              <Captions>
                <div>
                  <p className="lastCaption">
                    Completed the design for the remaining pages
                  </p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <Video
                autoPlay
                playsInline
                loop
                muted
                src={VectorMovie_1}
                type="video/mp4"
              />
              <Captions>
                <div>
                  <p className="lastCaption">
                    Developed a motion prototype for the contact form
                  </p>
                </div>
              </Captions>
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <FullWidthContainer>
            <FullWidthWrapper>
              <ColumnImage>
                <Image src={VectorArticle_11} />
              </ColumnImage>
              <ColumnImage>
                <Image src={VectorArticle_12} />
              </ColumnImage>
              <Captions>
                <div>
                  <p className="lastCaption">
                    Completed the brochure design tailored for the Japanese
                    customer
                  </p>
                </div>
              </Captions>
            </FullWidthWrapper>
          </FullWidthContainer>

          <SingleColumnContainer>
            <SingleColumnWrapper>
              <ImageNoBorder src={VectorArticle_13} />
            </SingleColumnWrapper>
          </SingleColumnContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div>
                <h2>The Outcome</h2>
              </div>
              <div>
                <p>
                  Throughout this project, I encountered challenges at each
                  stage, gradually developing and designing the website to a
                  functional and valuable state.
                </p>
                <p>
                  Looking back, it has been quite a ride. This highly valuable
                  experience continues to impact my career today, providing a
                  better understanding of the web design working environment and
                  opening my eyes to the product creation process. The effort
                  and sacrifices required to launch a product into the world
                  exceeded my expectations.
                </p>
                <p>
                  However, once the product takes its dive and comes 'alive,'
                  the real journey begins. Reflecting on it now, I am genuinely
                  excited.
                </p>
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>

          <ContentInfoContainer>
            <ColumnContentLg>
              <div style={{ maxWidth: "1140px", margin: "auto" }}>
                <div style={{ textAlign: "center", maxWidth: "1140px" }}>
                  <ImageCircleFb src={mari} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <h2>
                    " He is a versatile designer who creates a wide range from
                    modern to traditional. I believe his patience with a string
                    of requests and revisions from me eventually enabled my
                    website to be born. "
                  </h2>
                </div>
                <div className="feedback">
                  <p>
                    His design first caught my eyes when I had been spending
                    long time looking for a way to embody the unique feature of
                    my school business. His astute sense of identifying the
                    perfect colors, shapes, and space usage helped my website
                    convey what we are at a glance. I believe his patience with
                    a string of requests and revisions from me eventually
                    enabled my website to be born. He is a versatile designer
                    who creates a wide range from modern to traditional.
                  </p>
                </div>
                {/* <Image src={} /> */}
              </div>
            </ColumnContentLg>
          </ContentInfoContainer>
        </motion.div>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Article_Vector;
