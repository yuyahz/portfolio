import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeContainer = styled.section`
  width: 100%;
  height: 100vh;
`;

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;
  color: var(--fourth-txt-color);
  background: var(--secondary-bg);
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div .inner-component {
    display: flex;
    .home-subtitle {
      position: relative;
      flex-flow: column;
    }
  }

  h1 {
    font-weight: 700;
    font-size: 9.9vw;
    margin-bottom: 6px;

    @media only screen and (max-width: 1919px) {
      font-size: 150px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 25vw;
    }
  }

  h2 {
    font-family: "GT";
    font-weight: 500;
    font-size: 6.7vw;
    margin-bottom: 16px;
    line-height: 0.9;

    @media only screen and (max-width: 1919px) {
      font-size: 120px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 17.5vw;
    }
  }

  p {
    font-weight: 300;
    font-size: 1.1vw;
    letter-spacing: 0.1rem;

    @media only screen and (max-width: 1919px) {
      font-size: 19px;
    }
    @media only screen and (max-width: 480px) {
      letter-spacing: 0.05rem;
      font-size: 4vw;
    }
  }

  .subtitle {
    margin: 0.5rem 0;

    @media only screen and (max-width: 480px) {
      margin: 1.667vw 0;
    }
    @media only screen and (max-width: 376px) {
      margin: 0 0 2.13vw 0;
      font-size: 5.6vw;
    }
  }

  .caption {
    font-size: 0.7vw;

    @media only screen and (max-width: 1919px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 480px) {
      font-size: 2.5vw;
    }
    @media only screen and (max-width: 376px) {
      font-size: 3.2vw;
    }
  }
`;

export const ImageWin = styled(motion.img)`
  /* position: relative; */
  object-fit: contain;
  width: 6.8vw;
  height: auto;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 2s;
  animation-iteration-count: infinite;

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media only screen and (max-width: 1919px) {
    width: 100px;
  }

  @media only screen and (max-width: 960px) {
    width: 17.5vw;
  }
`;

export const ImageMac = styled(motion.img)`
  object-fit: contain;
  width: 5.8vw;
  height: auto;
  padding-bottom: 24px;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 3s;
  animation-iteration-count: infinite;

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media only screen and (max-width: 1919px) {
    width: 95px;
  }

  @media only screen and (max-width: 960px) {
    width: 13.7vw;
  }
`;
