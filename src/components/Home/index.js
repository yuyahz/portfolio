import React from "react";
import { motion } from "framer-motion";
import win from "../../images/icon-win.png";
import mac from "../../images/icon-mac.png";
import { HomeContainer, HomeWrapper, ImageWin, ImageMac } from "./HomeElements";

const Home = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -120 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <HomeContainer id="home">
      <HomeWrapper>
        <div>
          <div className="inner-component">
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.1 }}
            >
              H
            </motion.h1>
            <ImageWin src={win} alt="icon-win" />
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2 }}
            >
              llo.
            </motion.h1>
          </div>
          <div className="inner-component">
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.3 }}
            >
              I am
            </motion.h2>
            <ImageMac src={mac} alt="icon-mac" />
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.4 }}
            >
              Yuya
            </motion.h2>
          </div>
          <div className="inner-component">
            <div className="home-subtitle">
              <motion.p
                className="subtitle"
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.5 }}
              >
                Creative Problem Solver
              </motion.p>

              <motion.p
                className="caption"
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.6 }}
              >
                UX/UI & Brand Storytelling Designer
              </motion.p>
              <motion.p
                className="caption"
                variants={fadeLeft}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1.7 }}
              >
                with Front-End and UI Development
              </motion.p>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
