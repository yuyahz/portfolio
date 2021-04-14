import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import FaceOne from "../../images/ZigZag_1.svg";
import FaceTwo from "../../images/ZigZag_2.svg";
import FaceThree from "../../images/ZigZag_3.svg";
import FaceFour from "../../images/ZigZag_4.svg";
import FaceFive from "../../images/ZigZag_5.svg";
import {
  Section,
  Text,
  Container,
  ColumnLeft,
  ColumnRight,
  Image,
} from "./OpeningElements";

const OpeningSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const rotate = keyframes`
  0% {
        transform: translate(0%,0);
    }
    25% {
        transform: translate(10%,0)
    }
    50% {
        transform: translate(15%,0)
    }
    75% {
        transform: translate(10%,0)
    }
    100% {
        transform: translate(0%,0)
    }
`;

  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
  `;

  return (
    <Section id="home">
      <Text>
        <Rotate>
          Let you create my face<div className="br_">creatively with</div>
          <div className="br_">drag or tap!!</div>
        </Rotate>
      </Text>
      <Container>
        <ColumnLeft>
          <Parallax y={[-40, 40]} tagOuter="figure">
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              Hello.
            </motion.h1>
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              I am a Yuya
            </motion.h2>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2.5 }}
            >
              UI UX Designer
            </motion.p>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 3 }}
            >
              Frontend Developer
            </motion.p>
          </Parallax>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={FaceOne}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -230, right: 300, top: -20, bottom: 330 }}
            initial={{ opacity: 0, y: -200 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 5, 10, -10, 0],
              transition: { duration: 1 },
            }}
          />
          <Image
            src={FaceTwo}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -300, right: 380, top: -165, bottom: 230 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, 5, 10, -10, 0],
              transition: { duration: 3 },
            }}
          />
          <Image
            src={FaceThree}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -480, right: 190, top: -55, bottom: 280 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 5, 10, -10, 0],
              transition: { duration: 1.5 },
            }}
          />
          <Image
            src={FaceFour}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -390, right: 290, top: -330, bottom: 120 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: [0, 5, 10, -10, 0],
              transition: { duration: 1 },
            }}
          />
          <Image
            src={FaceFive}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -590, right: 70, top: -150, bottom: 250 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, 5, 10, -10, 0],
              transition: { duration: 2.5 },
            }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default OpeningSection;