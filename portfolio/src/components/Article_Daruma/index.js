import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import {
  DarumaContainer,
  DarumaTitle,
  DarumaWrapper,
  Icon,
  IconWrapper,
  DarumaH1,
  DarumaH2,
  DarumaP,
  DarumaCaption,
  Image,
  ImageTop,
  ImageDown,
  Feedback,
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
            The restaurant asked me to create a new concept, rethinking to build
            a more smooth accessible site for customers. I took the
            responsibility to build a website from scratch.
          </DarumaH2>
          <Parallax y={[-15, 15]} tagOuter="figure">
            <div style={{ textAlign: "center" }}>
              <ImageTop src={DarumaArticle_1} id="" />
            </div>
          </Parallax>
          <DarumaH1>Background</DarumaH1>
          <DarumaP>
            The restaurant wanted to renew the website, a website that serves
            customers in Japan and people who come to Japan.
          </DarumaP>
          <DarumaP style={{ marginTop: "1.5rem" }}>
            Daruma had made a strategic choice to bring all of their offerings
            and new service under one website. Previously, The website had very
            ancient designs and made it difficult for clients to navigate the
            website and reach services offered.
          </DarumaP>
          {/* <DarumaP style={{ marginTop: "1.5rem" }}>
            They had that those painful therefore Daruma asked me to create a
            renovated website have through my connection.
          </DarumaP> */}
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={DarumaArticle_2} id="" />
          </div>
          <DarumaCaption>Flow sheet.</DarumaCaption>
          <DarumaH1>The Goal</DarumaH1>
          <DarumaP>
            The primary website idea is to allow users to easily create, share.
            Whether it immediately needs to reserve or just a night out with
            friends and familly in this restaurant. There are many similar
            websites already on the market, however, most of them provide very
            complexly and similar.
          </DarumaP>
          <DarumaP style={{ marginTop: "1.5rem" }}>
            The restaurant's main requirement has always been to keep the
            website usable, reliable, and functional. Aesthetically minimal,
            simple, and clean. There are no ads and also no tricks, but there is
            a consistent and intuitive user experience, providing value to our
            users, keeping them satisfied and engaged. And the client wanted to
            me create the website quickly.
          </DarumaP>
          <div style={{ textAlign: "center" }}>
            <Image
              style={{ marginBottom: "1rem" }}
              src={DarumaArticle_3}
              id=""
            />
          </div>
          <DarumaCaption style={{ marginBottom: "3rem" }}>
            Images for wireframe.
          </DarumaCaption>
          <div style={{ textAlign: "center" }}>
            <Image
              style={{ margin: "0 0 1rem 0" }}
              src={DarumaArticle_4}
              id=""
            />
          </div>
          <DarumaCaption>Images for website journey map.</DarumaCaption>
          <DarumaH1>My role</DarumaH1>
          <DarumaP>
            I worked on this project as a UI/UX designer and developer as well.
            In addition to those, I gave input as an adviser for all of the
            website and I have in charge of that position as an administrator
            for this website.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Challenge</DarumaH1>
          <DarumaP>
            As outlined above, I have had to do everything to design and develop
            for this project with my own skills, so that it was the most
            significant requirement to give this finalized product as soon as
            possible.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Solution</DarumaH1>
          <DarumaP>
            It was necessary to consider both of these perspectives about
            designer and developer are notable points and I wanted to treat both
            skills equally. I have felt that it is important to keep both
            perspectives in careful consideration before deciding to dive into
            coding. I approached to do design to secure what clients proposed.
            Aesthetically minimal, simple, clean, and move ahead at a fast pace,
            those things were the highest priority for this project. First of
            all, as a result of those requirements, I thought "React" was the
            best fitting library for this project in terms of overall sights
            multi-directionally. From sights of trend (but not only reason for
            trend, React has several logical advantages), end-users who will
            have feelings that loading speed is fast, and because of my
            proficiency in this language. And, I also have chosen "React
            Bootstrap" as a reliable framework that will be able to address
            those pain points for quick development mainly to achieve a
            consistent design.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Final thoughts</DarumaH1>
          <DarumaP>
            While I was in this project, few issues have become clear about
            Bootstrap. That framework wasn't flexible more than I have imagined,
            I will address future issues and problems from the standpoint of
            circumstances of this project. I wouldn't see it as just problems, I
            would like it to turn into productive, future outcomes. I had to
            create an efficient configuration that in order to avoid future
            problems. Especially if I have to work on the project longer. This
            project gave me the significance to become more proficient as a
            digital creator.
          </DarumaP>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={DarumaArticle_5} id="" />
          </div>
          <DarumaCaption>Finalized mobile images.</DarumaCaption>
          <Parallax y={[-25, 20]} tagOuter="figure">
            <div style={{ textAlign: "center" }}>
              <ImageDown src={DarumaArticle_6} id="" />
            </div>
          </Parallax>
          <DarumaH1 style={{ marginTop: "5rem" }}>The outcome</DarumaH1>
          <DarumaP>
            Through this project, and, looking back at it now I can surely say
            it was the quickest project I had ever done. However, I could
            deliver a valuable website for my client. To have both perspectives
            is an important practice for my career but I learned that more
            effort and time is needed, I could understand the value of both
            required elements to increase good teamwork.
          </DarumaP>
          {/* feedback section */}
          <Feedback>
            <div style={{ textAlign: "center" }}>
              <Image
                src={DarumaArticle_7}
                id=""
                style={{ width: "4rem", marginBottom: "1rem" }}
              />
            </div>
            <DarumaH1 className="title">
              " The outstanding product created by talented web specialist by
              Yuya Hashirizaki that the product is very content even though I
              couldn't make to him enough time to build up for our desirable web
              site. "
            </DarumaH1>
            <DarumaP style={{ fontSize: "14px", lineHeight: "1.5" }}>
              I am pleased to be able to write this letter of recommendation for
              Yuya Hashirizaki. In my opinion, Yuya is a hard-working
              self-starter who invariably understands exactly what a project is
              all about. That those skills were required especially in this
              project. Our thoughts of the previous website were that it had old
              fashioned style. So that we couldn’t understand why we have to
              renew it until we get complaints from our regular customers. But
              we couldn’t spend money to renovate for a new web site. I was just
              about to start to search how do I find the proper person and, my
              co-worker found out dependable web specialist among a lot of
              candidates in IT industry. He consistently produced high-quality
              work in a timely fashion so far invariably. After starting the
              project with him, first of all, we have made meetings frequently
              to reduce pain points for the future. It was a necessary thing
              because we couldn’t invest much in this project so that, we had to
              reduce the possibility to generate misunderstandings for each
              other to avoid changes after finalized. I so much respect Yuya’s
              attitude toward his work. I am therefore very pleased to be able
              to recommend Yuya for future positions.
            </DarumaP>
          </Feedback>
          {/* feedback section */}
        </DarumaWrapper>
      </motion.div>
    </DarumaContainer>
  );
};

export default Article_Daruma;
