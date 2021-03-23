import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import {
  DarumaContainer,
  DarumaTitle,
  DarumaGridHalf,
  DarumaGridHalfBottom,
  DarumaWrapper,
  Icon,
  IconWrapper,
  DarumaH1,
  DarumaH2,
  DarumaP,
  DarumaCaption,
  DarumaCol,
  Image,
  ImageTop,
  ImageGrid,
  VideoBg,
  Feedback,
} from "./DarumaElements";
import DarumaArticle_1 from "../../images/DarumaArticle_1.png";
import DarumaArticle_2 from "../../images/DarumaArticle_2.png";
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
import VectorMovie_1 from "../../videos/VectorMovie_1.mp4";

const Article_Daruma = () => {
  return (
    <DarumaContainer id="daruma">
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
        <DarumaWrapper>
          <DarumaTitle>
            Integrated building website project for specialty Korean cuisine and
            BBQ restaurant
          </DarumaTitle>
          <DarumaH2>
            The restaurant asked me to create a new concept rethinking to build
            a more smooth accessible site for customers and I took
            responsibility it for all by myself in order to build a website from
            scratch.
          </DarumaH2>
          <Parallax y={[-15, 15]} tagOuter="figure">
            <div style={{ textAlign: "center" }}>
              <ImageTop src={DarumaArticle_1} id="" />
            </div>
          </Parallax>
          <DarumaH1>Background</DarumaH1>
          <DarumaP>
            In 2020 I have been dedicated to my time to acquire new programming
            skills. and one of my friends suggested to me to provide my design
            for a vector international academy as a freelance designer. ​ After
            few meetings, I was so pleased that my portfolio was accepted by
            them so that I was trying to do dedicated to my expressions for
            vector's requirements.
          </DarumaP>
          <DarumaP style={{ marginTop: "1.5rem" }}>
            An idea that first seemed exciting and intriguing, and turned into a
            journey full of excitement, surprises with lots of ups and downs.
          </DarumaP>
          <div style={{ textAlign: "center" }}>
            <Image src={DarumaArticle_2} id="" />
          </div>
          <DarumaH1>How it all started</DarumaH1>
          <DarumaP>
            The School had built an own website already. But they have wanted to
            create a more intriguing website for new content. In the early days,
            my primary process of an idea in order to proceed with this project
            was to create several web design prototypes for building a website.
            So that we needed to take several meetings to work smoothly and
            facilitate communication. and to find the right problems I asked
            myself what the previous site does intentionally or how service am I
            building? I approached this project from these things.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>My role</DarumaH1>
          <DarumaP>
            I worked on multiple projects related to Vector as a UI/UX designer
            together with the development team, including the main site and
            brochure. In addition to those, I gave input regarding the as an
            adviser for new contents.
          </DarumaP>
          <DarumaGridHalf>
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
          </DarumaGridHalf>
          <DarumaCaption>
            The prototype that was first proposed to the client.
          </DarumaCaption>
          <DarumaH1>Challenge</DarumaH1>
          <DarumaP>
            The big challenge the client had was how to build an accessible way
            to reach the contents of testimonials or significant sections else
            easily, and create an intriguing website even more powerful. After
            several meetings, I heard about the challenges of this project and
            the concept of the most useful site that the client feels, and then
            proposed the above prototype.
          </DarumaP>
          <DarumaGridHalf>
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
          </DarumaGridHalf>
          <DarumaCaption style={{ marginBottom: "2.5rem" }}>
            The client suggested load the video when LapTop boot up.
          </DarumaCaption>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_7} id="" />
          </div>
          <DarumaCaption>
            Finalized top page design promoting the vector and its feature.
          </DarumaCaption>
          <DarumaH1>Solution</DarumaH1>
          <DarumaP>
            Great emphasis was placed on content unification and adaptability to
            the individual needs of customers. And how to incorporate dynamic
            content such as slides that were not on the previous site. We wanted
            to provide a smooth experience for customers who even not aim to be
            students or who weren't very frequent. The content on this site is
            designed to make it easy for all customer groups to find relevant
            information.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Final thoughts</DarumaH1>
          <DarumaP>
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
          </DarumaP>
          <div style={{ textAlign: "center", margin: "6rem 0 0.5rem 0" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_8} id="" />
          </div>
          <DarumaCaption style={{ marginBottom: "2.5rem" }}>
            Phase one of the interactive activities page.
          </DarumaCaption>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_9} id="" />
          </div>
          <DarumaCaption style={{ marginBottom: "2.5rem" }}>
            Finalized interactive activities page and menu bar design.
          </DarumaCaption>
          <div style={{ textAlign: "center", marginBottom: "0.5rem" }}>
            <Image style={{ margin: "0" }} src={VectorArticle_10} id="" />
          </div>
          <DarumaCaption style={{ marginBottom: "0" }}>
            Finalized remainning page design.
          </DarumaCaption>
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
          <DarumaCaption>Contact form motion prototype</DarumaCaption>
          <DarumaGridHalfBottom>
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
          </DarumaGridHalfBottom>
          <DarumaCaption>
            Finalized brochure design for Japanese end-user.
          </DarumaCaption>
          <Parallax y={[-20, 20]} tagOuter="figure">
            <div style={{ textAlign: "center", margin: "8rem 0 7rem 0" }}>
              <ImageTop style={{ margin: "0" }} src={VectorArticle_13} id="" />
            </div>
          </Parallax>
          <DarumaH1>The outcome</DarumaH1>
          <DarumaP>
            Through this project, I have found out challenges gradually on each
            stage and developed and designed the website to a stage that was
            functional and valuable.
          </DarumaP>
          <DarumaP style={{ marginTop: "1.5rem" }}>
            Looking back at it now I can surely say it's been quite a ride. A
            hight valuable experience that has still left an impact on me and my
            career today. It helps me better understand the working environment
            as a web designer in different with own my country and opened my
            eyes to the product creation process. The effort and sacrifices that
            are required to send off a product into the world were beyond my
            expectations. However, once the product lets it dive into the world
            and turn into “alive” is the time when the real journey actually
            launches. Now that I think about it, I am so excited.
          </DarumaP>
        </DarumaWrapper>
      </motion.div>
    </DarumaContainer>
  );
};

export default Article_Daruma;
