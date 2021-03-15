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
  VectorCol,
  Image,
  ImageGrid,
  VideoBg,
  Feedback,
} from "./VectorElements";
import VectorArticle_1 from "../../images/VectorArticle_1.png";
import VectorArticle_2 from "../../images/VectorArticle_2.png";
import VectorArticle_3 from "../../images/VectorArticle_3.png";

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
            <Image src={VectorArticle_1} id="" />
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
          <VectorGridHalf>
            <div style={{ textAlign: "center" }}>
              <ImageGrid style={{ maxWidth: "100%" }} src={VectorArticle_2} id="" />
            </div>
            <div style={{ textAlign: "center" }}>
              <ImageGrid style={{ maxWidth: "100%" }} src={VectorArticle_3} id="" />
            </div>
          </VectorGridHalf>
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
          <VectorH1 style={{ marginTop: "6rem" }}>My role</VectorH1>
          <VectorP>
            I worked on the project as a UI/UX designer, together with a and the
            development team.
          </VectorP>
          <VectorP>article</VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>Challenge</VectorH1>
          <VectorP>article</VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>Solution</VectorH1>
          <VectorP>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          <VectorP style={{ marginTop: "5rem" }}>article</VectorP>
          <VectorP>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          {/* <VectorGrid style={{ paddingRight: "3.5rem" }}>
            <VectorCol>
              <div>
                <VideoBg
                  autoPlay
                  loop
                  muted
                  playsinline
                  src={VectorMovie_1}
                  type="video/mp4"
                />
              </div>
            </VectorCol>
            <VectorCol>
              <div>
                <VideoBg
                  autoPlay
                  loop
                  muted
                  src={VectorMovie_2}
                  type="video/mp4"
                />
              </div>
              <VectorP style={{ textAlign: "right", fontSize: "14px" }}>
                Motion prototypes
              </VectorP>
            </VectorCol>
          </VectorGrid> */}
          <VectorP style={{ marginTop: "2rem" }}>article</VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_7} id="7" />
          </div> */}
          <VectorH1>The outcome</VectorH1>
          <VectorP>article</VectorP>
          {/* <VectorColumn>
            <VectorCol>1</VectorCol>
            <VectorCol>2</VectorCol>
            <VectorCol>3</VectorCol>
            <VectorCol>4</VectorCol>
          </VectorColumn> */}
        </VectorWrapper>
      </motion.div>
    </VectorContainer>
  );
};

export default Article_Vector;
