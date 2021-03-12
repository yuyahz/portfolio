import React from "react";
import { motion } from "framer-motion";
import {
  VectorContainer,
  VectorTitle,
  VectorGrid,
  VectorWrapper,
  Icon,
  IconWrapper,
  VectorH1,
  VectorH2,
  VectorP,
  VectorCol,
  Image,
  VideoBg,
  Feedback,
} from "./VectorElements";
import VectorArticle_1 from "../../images/VectorArticle_1.png";

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
          <VectorTitle>Title</VectorTitle>
          <VectorH2>Sub</VectorH2>
          <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_1} id="" />
          </div>
          <VectorH1>Background</VectorH1>
          <VectorP>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_2} id="2" />
          </div> */}
          <VectorH1>My role</VectorH1>
          <VectorP>article</VectorP>
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
