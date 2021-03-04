import React from "react";
import { motion } from "framer-motion";
import {
  LarryContainer,
  LarryTitle,
  LarryColumn,
  LarryWrapper,
  Icon,
  IconWrapper,
  LarryH1,
  LarryH2,
  LarryP,
  Image,
} from "./LarryElements";
import LarryArticle_1 from "../../images/LarryArticle_1.png";

const Article_Larry = () => {
  return (
    <LarryContainer id="larry">
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
        <LarryWrapper>
          <LarryTitle>Living Your Most Authentic Life Possible</LarryTitle>
          <LarryH2>Platform for Publications Introduction website</LarryH2>
          <div style={{ textAlign: "center" }}>
            <Image src={LarryArticle_1} id="2" />
          </div>
          <LarryH1>Background</LarryH1>
          <LarryColumn>
            <LarryP>Background</LarryP>
            <LarryP>2</LarryP>
            <LarryP>3</LarryP>
            <LarryP>4</LarryP>
          </LarryColumn>
        </LarryWrapper>
      </motion.div>
    </LarryContainer>
  );
};

export default Article_Larry;
