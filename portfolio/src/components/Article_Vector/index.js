import React from "react";
import { motion } from "framer-motion";
import {
  VectorContainer,
  VectorTitle,
  VectorGridHalf,
  VectorWrapper,
  Icon,
  IconWrapper,
  VectorH1,
  VectorH2,
  VectorP,
  VectorCaption,
  VectorCol,
  Image,
  ImageTop,
  ImageGrid,
  VideoBg,
  Feedback,
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
import VectorArticle_100 from "../../images/VectorArticle_100.png";
const Article_Vector = () => {
  return (
    <VectorContainer id="Vector">
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
          <Icon to="/">Yuya.Works</Icon>
        </IconWrapper>
        <VectorWrapper>
          <VectorTitle>Vector International Academy</VectorTitle>
          <VectorH2>
            Vector International Academy steered School through the creation of
            a new website and brochure that unified the latest school portfolio.
          </VectorH2>
          <div style={{ textAlign: "center" }}>
            <ImageTop src={VectorArticle_1} id="" />
          </div>
          <VectorH1>Background</VectorH1>
          <VectorP>
            In 2020 I have been dedicated to my time to acquire new programming
            skills. and one of my friends suggested to me to provide my design
            for a vector international academy as a freelance designer. ​ After
            few meetings, I was so pleased that my portfolio was accepted by
            them so that I was trying to do dedicated to my expressions for
            vector's requirements.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            An idea that first seemed exciting and intriguing, and turned into a
            journey full of excitement, surprises with lots of ups and downs.
          </VectorP>
          <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_2} id="" />
          </div>
          <VectorH1>How it all started</VectorH1>
          <VectorP>
            The School had built an own website already. But they have wanted to
            create a more intriguing website for new content. In the early days,
            my primary process of an idea in order to proceed with this project
            was to create several web design prototypes for building a website.
            So that we needed to take several meetings to work smoothly and
            facilitate communication. and to find the right problems I asked
            myself what the previous site does intentionally or how service am I
            building? I approached this project from these things.
          </VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>My role</VectorH1>
          <VectorP>
            I worked on multiple projects related to Vector as a UI/UX designer
            together with the development team, including the main site and
            brochure. In addition to those, I gave input regarding the as an
            adviser for new contents.
          </VectorP>
          <VectorGridHalf>
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
          </VectorGridHalf>
          <VectorCaption style={{ textAlign: "center" }}>
            The prototype that was first proposed to the client.
          </VectorCaption>
          <VectorH1>Challenge</VectorH1>
          <VectorP>
            The big challenge the client had was how to build an accessible way
            to reach the contents of testimonials or significant sections else
            easily, and create an intriguing website even more powerful. After
            several meetings, I heard about the challenges of this project and
            the concept of the most useful site that the client feels, and then
            proposed the above prototype.
          </VectorP>
          <VectorGridHalf>
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
          </VectorGridHalf>
          <VectorCaption
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            The client suggested load the video when LapTop boot up.
          </VectorCaption>
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_7} id="" />
          </div>
          <VectorCaption style={{ textAlign: "center" }}>
            Finalized top page design promoting the vector and its feature.
          </VectorCaption>
          <VectorH1>Solution</VectorH1>
          <VectorP>
            Great emphasis was placed on content unification and adaptability to
            the individual needs of customers. And how to incorporate dynamic
            content such as slides that were not on the previous site. We wanted
            to provide a smooth experience for customers who even not aim to be
            students or who weren't very frequent. The content on this site is
            designed to make it easy for all customer groups to find relevant
            information.
          </VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>Final thoughts</VectorH1>
          <VectorP>
            I think that the depth of involvement of designers and developers in
            the project by the time it is completed will change depending on the
            budget and period. What I thought about this project was to deeply
            research the extensibility of the project. In fact, after the top
            page was completed, the client's intentions changed and the content
            increased. When that happens, it becomes difficult to modify the
            work that has already been completed. For this project, where the
            challenge was to have a consistent design, it was essential to have
            adaptability to it. It was a great experience a project that
            reminded me of what significance to search to find out the client's
            core intention.
          </VectorP>
          <div style={{ textAlign: "center", margin: "6rem 0 1rem 0" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_8} id="" />
          </div>
          <VectorCaption
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            Phase one of the interactive activities page.
          </VectorCaption>
          <div style={{ textAlign: "center", margin: "0 0 1rem 0" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_9} id="" />
          </div>
          <VectorCaption
            style={{ textAlign: "center", marginBottom: "2.5rem" }}
          >
            Finalized interactive activities page and menu bar design.
          </VectorCaption>
          <div style={{ textAlign: "center", margin: "0 0 1rem 0" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_100} id="" />
          </div>
          <VectorCaption style={{ textAlign: "center" }}>
            Finalized remainning page design.
          </VectorCaption>
          <VectorH1>The outcome</VectorH1>
          <VectorP>
            Through this project, I have found out challenges gradually on each
            stage and developed and designed the website to a stage that was
            functional and valuable.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            Looking back at it now I can surely say it's been quite a ride. A
            hight valuable experience that has still left an impact on me and my
            career today. It helps me better understand the working environment
            as a web designer in different with own my country and opened my
            eyes to the product creation process. The effort and sacrifices that
            are required to send off a product into the world were beyond my
            expectations. However, once the product lets it dive into the world
            and turn into “alive” is the time when the real journey actually
            launches. Now that I think about it, I am so excited.
          </VectorP>
        </VectorWrapper>
      </motion.div>
    </VectorContainer>
  );
};

export default Article_Vector;
