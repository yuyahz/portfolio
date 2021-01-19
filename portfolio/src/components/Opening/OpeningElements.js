import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );

  /* for Surface duo to eliminate right space */
  @media screen and (max-width: 540px) {
    overflow: hidden;
  }

  @media screen and (max-width: 520px) {
    overflow: hidden;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  /* padding: 3rem calc((100vw - 1300px) / 2); */
  padding: 3rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: #444;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 3rem;
  /* background: skyblue; */

  h1 {
    font-weight: 900;
    margin-bottom: 0.5rem;
    font-size: 9rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  h2 {
    font-weight: 900;
    margin: 2rem 0 3rem 0;
    font-size: 7rem;
    line-height: 0.9;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  p {
    font-weight: 100;
    margin-top: 1rem;
    font-size: 1rem;
    letter-spacing: 0.7rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  @media screen and (max-width: 960px) {

  }

  @media screen and (max-width: 520px) {
    h1 {
      margin-bottom: 0rem;
      font-size: 8rem;
    }
    h2 {
      margin: 0 0 1rem 0;
      font-size: 5rem;
      line-height: 0.9;
    }
    p {
      font-size: 0.7rem;
      letter-spacing: 0.5rem;
    }
  }
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: auto;
  height: auto;
  filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  /* background: pink; */

  ${Image}:nth-child(1) {
    top: 150px;
    right: 150px;
  }

  ${Image}:nth-child(2) {
    bottom: 200px;
    right: 280px;
  }

  ${Image}:nth-child(3) {
    top: 220px;
    right: 390px;
  }

  ${Image}:nth-child(4) {
    bottom: 310px;
    right: 220px;
  }

  ${Image}:nth-child(5) {
    bottom: 200px;
    right: 120px;
  }

  /* for Tablet */
  @media screen and (max-width: 960px) {

    ${Image}:nth-child(1) {
      top: 150px;
      right: 120px;
    }

    ${Image}:nth-child(2) {
      bottom: 180px;
      right: 250px;
    }

    ${Image}:nth-child(3) {
      top: 230px;
      right: 350px;
    }

    ${Image}:nth-child(4) {
      bottom: 300px;
      right: 190px;
    }

    ${Image}:nth-child(5) {
      bottom: 200px;
      right: 90px;
    }
  }

  /* for Mobile */
  @media screen and (max-width: 520px) {
    padding: 0rem;

    ${Image}:nth-child(1) {
      max-width: 30%;
      height: auto;
      top: -300px;
      right: 10px;
    }

    ${Image}:nth-child(2) {
      max-width: 9%;
      height: auto;
      bottom: 290px;
      right: 80px;
    }

    ${Image}:nth-child(3) {
      max-width: 9%;
      height: auto;
      top: -180px;
      right: 10px;
    }

    ${Image}:nth-child(4) {
      max-width: 9%;
      height: auto;
      bottom: 320px;
      right: 50px;
    }

    ${Image}:nth-child(5) {
      max-width: 9%;
      height: auto;
      bottom: 230px;
      right: 45px;
    }
  }
`;
