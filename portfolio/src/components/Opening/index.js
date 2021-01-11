import React, { useState } from "react";
import {
  Section,
  Container,
  ColumnLeft,
  ColumnRight,
  Image,
} from "./OpeningElements";
import { motion } from "framer-motion";
import PlanetOne from "../../images/ZigZag_111.svg";
import PlanetTwo from "../../images/ZigZag_222.svg";
import PlanetThree from "../../images/ZigZag_333.svg";
import PlanetFour from "../../images/ZigZag_444.svg";
import PlanetFive from "../../images/ZigZag_555.svg";

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to Space
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Journey to the unknown
          </motion.p>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 100 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt="planet"
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetFour}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetFive}
            alt="planet"
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default OpeningSection;
