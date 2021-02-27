import React from "react";
import { Parallaxr } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Larry from "../../images/Larry.png";
import {
  LarryContainer,
  LarryIcon,
  LarryH1,
  LarryWrapper,
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
        <LarryIcon to="/">Home</LarryIcon>
        <LarryH1>Our Larry</LarryH1>
        <LarryWrapper>
          <LarryH2>dummy Text</LarryH2>
          <LarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </LarryP>
        </LarryWrapper>
      </motion.div>
    </LarryContainer>
  );
};

export default Article_Larry;
