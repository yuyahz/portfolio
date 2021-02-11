import React from "react";
import { motion } from "framer-motion";
import {
  LarryContainer,
  LarryIcon,
  LarryH1,
  LarryWrapper,
  LarryCard,
  LarryH2,
  LarryP,
} from "./LarryElements";

const Article_Larry = () => {
  return (
    <LarryContainer id="Larry">
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
        <LarryIcon to="/">Larry</LarryIcon>
        <LarryH1>Our Larry</LarryH1>
        <LarryWrapper>
          <LarryCard>
            {/* <LarryIcon src={Icon1} /> */}
            <LarryH2>dummy Text</LarryH2>
            <LarryP>
              dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
              dummy Text dummy Text
            </LarryP>
          </LarryCard>
          <LarryCard>
            {/* <LarryIcon src={Icon2} /> */}
            <LarryH2>dummy Text</LarryH2>
            <LarryP>
              dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
              dummy Text dummy Text
            </LarryP>
          </LarryCard>
          <LarryCard>
            {/* <LarryIcon src={Icon3} /> */}
            <LarryH2>dummy Text</LarryH2>
            <LarryP>
              dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
              dummy Text dummy Text
            </LarryP>
          </LarryCard>
        </LarryWrapper>
      </motion.div>
    </LarryContainer>
  );
};

export default Article_Larry;
