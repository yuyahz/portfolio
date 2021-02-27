import React from "react";
import { motion } from "framer-motion";
import {
  DarumaContainer,
  DarumaTitle,
  DarumaColumn,
  DarumaWrapper,
  Icon,
  IconWrapper,
  DarumaH1,
  DarumaH2,
  DarumaP,
} from "./DarumaElements";

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
          <DarumaTitle>Living Your Most Authentic Life Possible</DarumaTitle>
          <DarumaH1>Platform for Publications Introduction website</DarumaH1>
          <DarumaColumn>
            <DarumaP>1</DarumaP>
            <DarumaP>2</DarumaP>
            <DarumaP>3</DarumaP>
            <DarumaP>4</DarumaP>
          </DarumaColumn>
        </DarumaWrapper>
      </motion.div>
    </DarumaContainer>
  );
};

export default Article_Daruma;
