import styled from "styled-components";
import { motion, transform } from "framer-motion";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );

  /* for iphone se */
  @media screen and (max-width: 320px) {
    height: 110vh;
  }
`;

export const Text = styled.div`
  color: #444;
  text-align: right;
  font-weight: 300;
  font-size: 9px;
  letter-spacing: 0.2rem;
  line-height: 1.2rem;
  -ms-user-select: none; /* IE 10+ */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  position: absolute;
  right: 3%;
  top: 3%;

  .br_ {
    content: "\A";
    white-space: pre;
  }

  @media screen and (max-width: 896px) {
    font-size: 8px;
    line-height: 0.8rem;
    right: 6%;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* grid-template-columns: 1fr 1fr; */
  height: 100vh;
  /* padding: 3rem calc((100vw - 1300px) / 2); */
  padding: 3rem 3rem 3rem 7rem;

  /* My defaulft tablet is 970px but this exceptionl size for ipad and vertical ipad pro */
  @media screen and (max-width: 1366px) {
    height: 800px;
  }

  @media screen and (max-width: 520px) {
    padding: 1rem;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  grid-area: 1 / 1 / 2 / 2;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 1rem;

  h1 {
    background: linear-gradient(
      329deg,
      rgba(68, 68, 68, 1) 60%,
      rgba(47, 48, 48, 1) 85%,
      rgba(1, 6, 6, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    font-size: 9rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  h2 {
    color: #444;
    font-weight: 700;
    padding-left: 0.2rem;
    margin-bottom: 3rem;
    font-size: 7rem;
    line-height: 0.9;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  p {
    color: #444;
    font-weight: 300;
    margin: 0.5rem 0 0 0.8rem;
    font-size: 1rem;
    letter-spacing: 0.7rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* for vertical mobile */
  @media screen and (max-width: 896px) {
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 520px) {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;

    h1 {
      font-size: 6rem;
      margin-bottom: 0rem;
    }
    h2 {
      font-size: 3rem;
      text-indent: 0.1em;
      line-height: 1;
    }
    p {
      font-size: 0.7rem;
      letter-spacing: 0.5rem;
      line-height: 1;
    }
  }
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: auto;
  height: auto;
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));

  @media screen and (max-width: 896px) and (max-height: 427px) {
    display: none;
  }
`;

export const ColumnRight = styled.div`
  display: flex;
  grid-area: 1 / 1 / 2 / 2;
  z-index: 2;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 70px;
    right: 240px;
  }

  ${Image}:nth-child(2) {
    top: 215px;
    right: 320px;
  }

  ${Image}:nth-child(3) {
    top: 110px;
    right: 130px;
  }

  ${Image}:nth-child(4) {
    top: 380px;
    right: 230px;
  }

  ${Image}:nth-child(5) {
    top: 200px;
    right: 20px;
  }

  @media screen and (min-width: 1441px) {
    ${Image}:nth-child(1) {
      top: 250px;
      right: 240px;
    }

    ${Image}:nth-child(2) {
      top: 395px;
      right: 320px;
    }

    ${Image}:nth-child(3) {
      top: 290px;
      right: 130px;
    }

    ${Image}:nth-child(4) {
      top: 560px;
      right: 230px;
    }

    ${Image}:nth-child(5) {
      top: 380px;
      right: 20px;
    }
  }

  /* My defaulft tablet is 970px but this exceptionl size for ipad and ipad pro */
  @media screen and (max-width: 1366px) {
    ${Image}:nth-child(1) {
      top: 70px;
      right: 240px;
    }

    ${Image}:nth-child(2) {
      top: 215px;
      right: 320px;
    }

    ${Image}:nth-child(3) {
      top: 110px;
      right: 130px;
    }

    ${Image}:nth-child(4) {
      top: 380px;
      right: 230px;
    }

    ${Image}:nth-child(5) {
      top: 200px;
      right: 20px;
    }
  }

  /* My defaulft tablet is 970px but this exceptionl size
   for vertical ipad pro */
  @media screen and (max-width: 1024px) {
    ${Image}:nth-child(1) {
      top: 140px;
      right: 240px;
    }

    ${Image}:nth-child(2) {
      top: 285px;
      right: 320px;
    }

    ${Image}:nth-child(3) {
      top: 180px;
      right: 130px;
    }

    ${Image}:nth-child(4) {
      top: 450px;
      right: 230px;
    }

    ${Image}:nth-child(5) {
      top: 270px;
      right: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    ${Image}:nth-child(1) {
      top: 70px;
      right: 200px;
    }

    ${Image}:nth-child(2) {
      top: 215px;
      right: 280px;
    }

    ${Image}:nth-child(3) {
      top: 100px;
      right: 100px;
    }

    ${Image}:nth-child(4) {
      top: 450px;
      right: 240px;
    }

    ${Image}:nth-child(5) {
      top: 320px;
      right: 160px;
    }
  }

  /* for Mobile */
  @media screen and (max-width: 520px) {
    padding: 0rem;

    ${Image}:nth-child(1) {
      top: 185px;
      right: 0px;
      max-width: 50%;
    }

    ${Image}:nth-child(2) {
      top: 305px;
      right: 80px;
      max-width: 17%;
    }

    ${Image}:nth-child(3) {
      top: 265px;
      right: 18px;
      max-width: 20%;
    }

    ${Image}:nth-child(4) {
      top: 315px;
      right: 195px;
      max-width: 16%;
    }

    ${Image}:nth-child(5) {
      top: 370px;
      right: 140px;
      max-width: 18%;
    }
  }
`;
