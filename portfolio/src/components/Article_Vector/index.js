import React from "react";
import { motion } from "framer-motion";
import {
  VectorContainer,
  VectorTitle,
  VectorColumn,
  VectorWrapper,
  Icon,
  IconWrapper,
  VectorH1,
  VectorH2,
  VectorP,
} from "./VectorElements";

const Article_Vector = () => {
  return (
    <VectorContainer id="vector">
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
          <VectorTitle>Living Your Most Authentic Life Possible</VectorTitle>
          <VectorH1>Platform for Publications Introduction website</VectorH1>
          <VectorColumn>
            <VectorP>1</VectorP>
            <VectorP>2</VectorP>
            <VectorP>3</VectorP>
            <VectorP>4</VectorP>
          </VectorColumn>
        </VectorWrapper>
      </motion.div>
    </VectorContainer>
  );
};

export default Article_Vector;
