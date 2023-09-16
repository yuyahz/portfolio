import React from "react";
import { motion } from "framer-motion";
import {
  ArticleContainer,
  ArticleTitle,
  ArticleGridHalf,
  ArticleGridHalfBottom,
  ArticleWrapper,
  Icon,
  IconWrapper,
  Article_h3,
  Article_p,
  ArticleCaption,
  Image,
  ImageTop,
  ImageGrid,
  VideoBg,
  Feedback,
} from "./ArticleElements";
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
    <ArticleContainer id="vector">
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
        <IconWrapper>
          <Icon to="/">Home</Icon>
        </IconWrapper>
        <ArticleWrapper>
          <ArticleTitle>
            Design lead for Vector International Academy
          </ArticleTitle>
          <Article_p>
            I was hired by Vector Internationa Academy to recreate and modernize
            their websites. I have applied design innovation to their website
            and brochure.
          </Article_p>
          <div style={{ textAlign: "center" }}>
            <ImageTop src={VectorArticle_1} id="" />
          </div>
          <Article_h3>Background</Article_h3>
          <Article_p>
            In 2020 I have dedicated my time to acquire new programming skills.
            and one of my friends suggested to me to provide my design for a
            vector international academy as a freelance designer. ​ After few
            meetings, I was so pleased that my portfolio was accepted by them so
            that I was trying to do dedicated to my expressions for vector's
            requirements.
          </Article_p>
          <Article_p style={{ marginTop: "1.5rem" }}>
            An idea that first seemed exciting and intriguing, and turned into a
            journey full of excitement, surprises with lots of ups and downs.
          </Article_p>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={VectorArticle_2} id="" />
          </div>
          <ArticleCaption>Flow sheet</ArticleCaption>
          <Article_h3>How it all started</Article_h3>
          <Article_p>
            The School had built an own website already. But they have wanted to
            create a more intriguing website for new content. In the early days,
            my primary process of an idea in order to proceed with this project
            was to create several web design prototypes for building a website.
            So that we needed to take several meetings to work smoothly and
            facilitate communication. and to find the right problems I asked
            myself what the previous site does intentionally or what service am
            I building? I approached this project from these things.
          </Article_p>
          <Article_h3 style={{ marginTop: "5rem" }}>My role</Article_h3>
          <Article_p>
            I worked on multiple projects related to Vector as a UI/UX designer
            together with the development team, including the main site and
            brochure. In addition to those, I gave input about the content.
          </Article_p>
          <ArticleGridHalf>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_3}
                id=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_4}
                id=""
              />
            </div>
          </ArticleGridHalf>
          <ArticleCaption>
            The prototype that was first proposed to the client.
          </ArticleCaption>
          <Article_h3>Challenge</Article_h3>
          <Article_p>
            The big challenge the client had was how to build an accessible way
            to reach the contents of testimonials or significant sections
            easily, and create an intriguing and more powerful website. After
            several meetings, I heard about the challenges of this project and
            the concept of the most useful site that the client requires, and
            then proposed the above prototype.
          </Article_p>
          <ArticleGridHalf>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_5}
                id=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_6}
                id=""
              />
            </div>
          </ArticleGridHalf>
          <ArticleCaption style={{ marginBottom: "2.5rem" }}>
            The client suggested load the video when LapTop boot up.
          </ArticleCaption>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_7} id="" />
          </div>
          <ArticleCaption>
            Finalized top page design promoting the vector and its feature.
          </ArticleCaption>
          <Article_h3>Solution</Article_h3>
          <Article_p>
            Great emphasis was placed on content unification and adaptability to
            the individual needs of customers. And how to incorporate dynamic
            content such as slides that were not on the previous site. We wanted
            to provide a smooth experience for customers who did not aim to be
            students or who weren't very frequent visitors. The content on this
            site is designed to make it easy for all customer groups to find
            relevant information.
          </Article_p>
          <Article_h3 style={{ marginTop: "5rem" }}>Final thoughts</Article_h3>
          <Article_p>
            I thought that the depth of involvement of designers and developers
            in the project by the time it is completed will change depending on
            the budget and period. What I thought about this project was to
            deeply research the scalability of the project. In fact, after the
            top page was completed, the client's intentions changed and the
            content increased. When that happens, it becomes difficult to modify
            the work that has already been completed. For this project, where
            the challenge was to have a consistent design, it was essential to
            have adaptability to it. It was a great experience, a project that
            reminded me of how to find out the client's core intention.
          </Article_p>
          <div style={{ textAlign: "center", margin: "6rem 0 0.5rem 0" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_8} id="" />
          </div>
          <ArticleCaption style={{ marginBottom: "2.5rem" }}>
            Phase one of the interactive activities page.
          </ArticleCaption>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_9} id="" />
          </div>
          <ArticleCaption style={{ marginBottom: "2.5rem" }}>
            Finalized interactive activities page and menu bar design.
          </ArticleCaption>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_10} id="" />
          </div>
          <ArticleCaption style={{ marginBottom: "0" }}>
            Finalized remainning page design.
          </ArticleCaption>
          <div style={{ textAlign: "center" }}>
            <VideoBg
              autoPlay
              playsInline
              loop
              muted
              src={VectorMovie_1}
              type="video/mp4"
            />
          </div>
          <ArticleCaption>Contact form motion prototype</ArticleCaption>
          <ArticleGridHalfBottom>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%", margin: "0" }}
                src={VectorArticle_11}
                id=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%", margin: "0" }}
                src={VectorArticle_12}
                id=""
              />
            </div>
          </ArticleGridHalfBottom>
          <ArticleCaption>
            Finalized brochure design for Japanese end-user.
          </ArticleCaption>
          <div style={{ textAlign: "center", margin: "8rem 0 7rem 0" }}>
            <ImageTop style={{ margin: "0" }} src={VectorArticle_13} id="" />
          </div>
          <Article_h3>The outcome</Article_h3>
          <Article_p>
            Through this project, I have found out challenges gradually on each
            stage and developed and designed the website to a stage that was
            functional and valuable.
          </Article_p>
          <Article_p style={{ marginTop: "1.5rem" }}>
            Looking back at it now I can surely say it's been quite a ride. A
            hightly valuable experience that has still left an impact on me and
            my career today. It helps me better understand the working
            environment as a web designer and opened my eyes to the product
            creation process. The effort and sacrifices that are required to
            send off a product into the world were beyond my expectations.
            However, once the product lets it dive into the world and turn into
            “alive” is the time when the real journey actually launches. Now
            that I think about it, I am so excited.
          </Article_p>
          {/* feedback section */}
          <Feedback>
            <div style={{ textAlign: "center" }}>
              <Image
                src={mari}
                id=""
                style={{ width: "4rem", marginBottom: "1rem" }}
              />
            </div>
            <Article_h3 className="title">
              " He is a versatile designer who creates a wide range from modern
              to traditional. I believe his patience with a string of requests
              and revisions from me eventually enabled my website to be born. "
            </Article_h3>
            <Article_p style={{ fontSize: "14px", lineHeight: "1.5" }}>
              His design first caught my eyes when I had been spending long time
              looking for a way to embody the unique feature of my school
              business. His astute sense of identifying the perfect colors,
              shapes, and space usage helped my website convey what we are at a
              glance. I believe his patience with a string of requests and
              revisions from me eventually enabled my website to be born. He is
              a versatile designer who creates a wide range from modern to
              traditional.
            </Article_p>
          </Feedback>
          {/* feedback section */}
        </ArticleWrapper>
      </motion.div>
    </ArticleContainer>
  );
};

export default Article_Vector;
