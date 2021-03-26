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
            The restaurant wanted to refresh the website, a website that serves
            customers in Japan and someone else who comes to Japan.
          </DarumaP>
          <DarumaP style={{ marginTop: "1.5rem" }}>
            Daruma had made a strategic choice to bring all of their offerings
            and new service under one website. Previously web site had had very
            ancient designs and services which made it harder to utilize
            synergies between services by design and ultimately made it
            difficult for customers to find the relevant information to them.
          </DarumaP>
          <DarumaP style={{ marginTop: "1.5rem" }}>
            They had that those painful therefore Daruma asked me to create a
            renovated website have through my connection.
          </DarumaP>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={DarumaArticle_2} id="" />
          </div>
          <DarumaCaption>Flow sheet.</DarumaCaption>
          <DarumaH1>The Goal</DarumaH1>
          <DarumaP>
            The primary website idea is to allow users to easily create, share.
            Whether it immediately needs to reserve or just a night out with
            someone in this restaurant. There are many similar websites already
            on the market, however, most of them provide very complexly and
            similar.
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
            In addition to those, I gave input regarding the as an adviser for
            all of the website and I have in charge of that position as an
            administrator for this website.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Challenge</DarumaH1>
          <DarumaP>
            As outlined above, I have had to everything to design and develop
            for this project with my own skills, so that it was the most
            significant requirement to give this finalized product as soon as
            possible by following the client proposed demand.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Solution</DarumaH1>
          <DarumaP>
            It was necessary to consider both of these perspectives about
            designer and developer are notable points and I wanted to treat both
            they deserve. And I have felt that is important to keep both
            perspectives in careful consideration before decided to dive into
            coding. I approached to do design to secure what clients propose.
            Aesthetically minimal, simple, clean, and move ahead at a fast pace,
            those things were the highest priority for this project. First of
            all, as a result of those requirements, I thought to "React" was the
            most fits library for this project in terms of overall sights
            multi-directionally. from sights of trend (but not only reason for
            trend, React has several logical advantages), end-users who will
            have feelings that loading speed speedily, and my proficiency this
            language. And, I also have chosen "React Bootstrap" as a reliable
            framework that will be able to address those pain points for quick
            development mainly to achieve a consistent design.
          </DarumaP>
          <DarumaH1 style={{ marginTop: "5rem" }}>Final thoughts</DarumaH1>
          <DarumaP>
            While I was in this project, it has become clear about few issues
            about mainly by Bootstrup. That framework wasn't frexible more than
            I have known, I will address future issues and problems from the
            standpoint of circumstances of this project. I wouldn't see it was
            just problems. I would like to it became productive, future issues.
            I had to create an efficient configuration that in order to the
            possibility for something happen future carefully. Especially if I
            have to involve the project longer. This project gave me the
            significances to become more proficient as a digital creator.{" "}
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
            Through this project, And, Looking back at it now I can surely say
            the very quick project I had ever. However, I could deliver a
            valuable website for my client. To have both perspectives is high
            practice for my career but it was revealed have to put effort more
            but at the same time, I could understand the value of both required
            contents to increase good teamwork.
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
              " The end product exceeded my expectations. Thanks to each member
              of the team, the website captures my personality - it has a soul!!
              "
            </DarumaH1>
            <DarumaP style={{ fontSize: "14px", lineHeight: "1.5" }}>
              It’s one thing to design a website: With so many online resources
              available to guide you - both free and subscription based - a
              website can be uploaded and be functioning within hours. But, to
              have a website designed that captures the wishes and personality
              of the client is quite different. This presents a unique
              challenge. It takes talent. It takes skill, and it takes patience.
              I was fortunate to experience this with the students from
              Cornerstone International Community College of Canada. Cornerstone
              is a fully accredited college offering diploma programs in Web &
              Mobile App Development, Network Solutions & System Specialist,
              International Business Management, Digital Marketing Specialist,
              Hospitality Management, and Advertising and Graphic Design, as
              well as, English as Second Language training. Their high-quality
              educational services and career counselling are delivered within a
              positive team environment. It serves Canadian and international
              students from over 20 countries, and is committed to assisting
              their students obtain gainful employment in the shortest possible
              time. A team consisting of final year students was assigned to
              assist me with the design of a landing page and website to support
              a book launch and my personal brand. The team comprised of: Ayaka
              Tsubouchi Yuya Hashirizaki Anzu Nakayama Gabriel Sciacca Dias
              Alexandre Bellini Dias Each team member was engaged and fully
              invested in the project. Over a series of zoom calls, questions
              were asked of me on what I was seeking to achieve. The end product
              exceeded my expectations. Thanks to each member of the team, the
              website captures my personality - it has a soul! I would encourage
              any employer who may be looking to hire engaged, creative and
              talented students to look no further than Cornerstone, and these
              students.
            </DarumaP>
          </Feedback>
          {/* feedback section */}
        </DarumaWrapper>
      </motion.div>
    </DarumaContainer>
  );
};

export default Article_Daruma;
