import React, { useState } from "react";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  Image,
} from "./OpeningElements";
import { motion } from "framer-motion";
import FaceOne from "../../images/ZigZag_1.svg";
import FaceTwo from "../../images/ZigZag_2.svg";
import FaceThree from "../../images/ZigZag_3.svg";
import FaceFour from "../../images/ZigZag_4.svg";
import FaceFive from "../../images/ZigZag_5.svg";

const OpeningSection = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
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
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={FaceOne}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -350, right: 300, top: -70, bottom: 450 }}
            initial={{ opacity: 0, y: -100 }}
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
            dragConstraints={{ left: -410, right: 390, top: -190, bottom: 380 }}
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
            dragConstraints={{ left: -500, right: 280, top: -260, bottom: 250 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              rotate: [0, 5, 10, -10, 0],
              transition: { duration: 1.5 },
            }}
          />
          <Image
            src={FaceFour}
            alt="Face"
            whileTap={{ scale: 0.95 }}
            drag={true}
            dragConstraints={{ left: -300, right: 500, top: -280, bottom: 340 }}
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
            dragConstraints={{ left: -600, right: 180, top: -190, bottom: 370 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
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
