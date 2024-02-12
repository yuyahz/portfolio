import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import win from "../../images/icon-win.png";
import mac from "../../images/icon-mac.png";
// import FaceTwo from "../../images/ZigZag_2.svg";
// import FaceThree from "../../images/ZigZag_3.svg";
// import FaceFour from "../../images/ZigZag_4.svg";
// import FaceFive from "../../images/ZigZag_5.svg";
import {
  HomeContainer,
  HomeWrapper,
  // Section,
  // Container,
  // ColumnLeft,
  // ColumnRight,
  // ColumnMobile,
  ImageWin,
  ImageMac,
} from "./HomeElements";

const Home = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

  const constraintsRef = useRef(null);

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
    <HomeContainer id="home">
      <HomeWrapper ref={constraintsRef}>
        <Parallax y={[10, -10]}>
          <div>
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              H
            </motion.h1>
            <ImageWin
              src={win}
              alt="icon-win"
              drag={true}
              // dragConstraints={constraintsRef}
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={3}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [0, 5, 10, -10, 0],
                transition: { duration: 1 },
              }}
            />
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            >
              llo.
            </motion.h1>
          </div>
        </Parallax>
        <Parallax y={[-15, 15]}>
          <div>
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              I am
            </motion.h2>
            <ImageMac
              src={mac}
              alt="icon-mac"
              drag={true}
              // dragConstraints={constraintsRef}
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragElastic={3}
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                rotate: [0, 5, 10, -10, 0],
                transition: { duration: 1 },
              }}
            />
            <motion.h2
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              Yuya
            </motion.h2>
          </div>
        </Parallax>
        {/* <Parallax y={[-130, 130]}> */}
        <div>
          <div className="home-subtitle">
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2.5 }}
            >
              Multimedia Designer
            </motion.p>
            <motion.p
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 3 }}
            >
              Frontend Developer
            </motion.p>
          </div>
        </div>
        {/* </Parallax> */}
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;

// Archive of 2021
// const HomeSection = () => {
//   const fadeLeft = {
//     hidden: { opacity: 0, x: -200 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const rotate = keyframes`
//   0% {
//         transform: translate(0%,0);
//     }
//     25% {
//         transform: translate(10%,0)
//     }
//     50% {
//         transform: translate(15%,0)
//     }
//     75% {
//         transform: translate(10%,0)
//     }
//     100% {
//         transform: translate(0%,0)
//     }
// `;

//   const Rotate = styled.div`
//     display: inline-block;
//     animation: ${rotate} 2s linear infinite;
//   `;

//   return (
//     <Section id="home">
//       <Container>
//         <ColumnLeft>
//           <Parallax y={[-40, 40]} tagOuter="figure">
//             <motion.h1
//               variants={fadeLeft}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 1 }}
//             >
//               Hello.
//             </motion.h1>
//             <motion.h2
//               variants={fadeLeft}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 1.5 }}
//             >
//               I am a Yuya
//             </motion.h2>
//             <motion.p
//               variants={fadeLeft}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 2.5 }}
//             >
//               UI UX Designer
//             </motion.p>
//             <motion.p
//               variants={fadeLeft}
//               initial="hidden"
//               animate="visible"
//               transition={{ duration: 3 }}
//             >
//               Frontend Developer
//             </motion.p>
//           </Parallax>
//         </ColumnLeft>

//         <ColumnRight>
//           <Image
//             src={FaceOne}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             // dragConstraints={{ left: -230, right: 300, top: -20, bottom: 330 }}
//             dragConstraints={{ left: -230, right: 300, top: -20, bottom: 330 }}
//             initial={{ opacity: 0, y: -200 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 1 },
//             }}
//           />
//           <Image
//             src={FaceTwo}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             // dragConstraints={{ left: -300, right: 380, top: -165, bottom: 230 }}
//             dragConstraints={{ left: -300, right: 380, top: -165, bottom: 230 }}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 3 },
//             }}
//           />
//           <Image
//             src={FaceThree}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             // dragConstraints={{ left: -480, right: 190, top: -55, bottom: 280 }}
//             dragConstraints={{ left: -480, right: 190, top: -55, bottom: 280 }}
//             initial={{ opacity: 0, y: -100 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 1.5 },
//             }}
//           />
//           <Image
//             src={FaceFour}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             // dragConstraints={{ left: -390, right: 290, top: -330, bottom: 120 }}
//             dragConstraints={{ left: -390, right: 290, top: -330, bottom: 120 }}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 1 },
//             }}
//           />
//           <Image
//             src={FaceFive}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             // dragConstraints={{ left: -590, right: 70, top: -150, bottom: 250 }}
//             dragConstraints={{ left: -590, right: 70, top: -150, bottom: 250 }}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 2.5 },
//             }}
//           />
//         </ColumnRight>
//         <ColumnMobile>
//           <Image
//             src={FaceOne}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             dragConstraints={{ left: -160, right: 30, top: -30, bottom: 320 }}
//             initial={{ opacity: 0, y: -200 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 1 },
//             }}
//           />
//           <Image
//             src={FaceTwo}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             dragConstraints={{ left: -175, right: 110, top: -145, bottom: 230 }}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 3 },
//             }}
//           />
//           <Image
//             src={FaceThree}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             dragConstraints={{ left: -240, right: 45, top: -110, bottom: 225 }}
//             initial={{ opacity: 0, y: -100 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 1.5 },
//             }}
//           />
//           <Image
//             src={FaceFour}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             dragConstraints={{ left: -70, right: 220, top: -160, bottom: 255 }}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 1 },
//             }}
//           />
//           <Image
//             src={FaceFive}
//             alt="Face"
//             whileTap={{ scale: 0.9 }}
//             drag={true}
//             dragConstraints={{ left: -115, right: 165, top: -210, bottom: 165 }}
//             initial={{ opacity: 0, x: 100 }}
//             animate={{
//               opacity: 1,
//               x: 0,
//               rotate: [0, 5, 10, -10, 0],
//               transition: { duration: 2.5 },
//             }}
//           />
//         </ColumnMobile>
//       </Container>
//     </Section>
//   );
// };

// export default HomeSection;
