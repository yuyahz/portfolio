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
} from "./LarryElements";

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
          <LarryH1>Platform for Publications Introduction website</LarryH1>
          <LarryColumn>
            <LarryP>1</LarryP>
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
