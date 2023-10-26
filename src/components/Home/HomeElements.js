import styled from "styled-components";
import { motion, transform } from "framer-motion";

export const HomeContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #faf8f6;

  @media only screen and (max-width: 540px) {
    height: 183vw;
  }
`;

export const HomeWrapper = styled.div`
  /* align-items: flex-start; */
  text-align: left;
  white-space: nowrap;
  color: #fe0000;
  margin: 30px;

  div {
    display: flex;
    .home-subtitle {
      position: relative;
      flex-flow: column;
    }
  }

  h1 {
    color: #fe0000;
    font-weight: 700;
    font-size: 9.9vw;
    margin-bottom: 6px;
    pointer-events: none;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1919px) {
      font-size: 150px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 25vw;
    }

    /* @media only screen and (max-width: 539px) {
      font-size: 6rem;
    }

    @media only screen and (max-width: 374px) {
      font-size: 4rem;
    } */
  }

  h2 {
    font-family: "GT";
    font-weight: 500;
    font-size: 6.7vw;
    margin-bottom: 34px;
    line-height: 0.9;
    pointer-events: none;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1919px) {
      font-size: 120px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 17.5vw;
    }
    /* 
    @media only screen and (max-width: 539px) {
      font-size: 4rem;
    }

    @media only screen and (max-width: 374px) {
      font-size: 3rem;
    } */
  }

  h2:first-child {
    margin-left: 32px;

    @media only screen and (max-width: 539px) {
      margin-left: 16px;
      margin-bottom: 16px;
    }
  }

  p {
    font-weight: 300;
    font-size: 1.1vw;
    margin: 0.5rem 0 0 0.8rem;
    letter-spacing: 0.3rem;
    pointer-events: none;
    user-select: none;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1919px) {
      font-size: 24px;
    }

    @media only screen and (max-width: 960px) {
      font-size: 3.3vw;
    }
  }
`;

export const ImageWin = styled(motion.img)`
  position: relative;
  object-fit: contain;
  width: 6.8vw;
  height: auto;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 0.2s;
  animation-iteration-count: 15;

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

  /* @media only screen and (max-width: 539px) {
    width: 70px;
  }

  @media only screen and (max-width: 374px) {
    width: 45px;
  } */
`;

export const ImageMac = styled(motion.img)`
  object-fit: contain;
  width: 5.8vw;
  height: auto;
  padding-bottom: 24px;
  filter: drop-shadow(0 1px 7px #0000001a) drop-shadow(0 2px 3px #00000014)
    drop-shadow(0 4px 7px #00000029);
  animation: tilt-n-move-shaking 0.2s;
  animation-iteration-count: 15;

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

  /* @media only screen and (max-width: 539px) {
    width: 60px;
  }

  @media only screen and (max-width: 374px) {
    width: 40px;
  } */
`;

// Archive of 2021
// export const Section = styled.section`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #faf8f6;
//   /* for iphone se */
//   @media screen and (max-width: 320px) {
//     height: 110vh;
//   }

//   @media screen and (max-width: 320px) {
//     overflow: hidden;
//   }
// `;

// export const Container = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   grid-template-rows: 1fr;
//   grid-column-gap: 0px;
//   grid-row-gap: 0px;
//   /* grid-template-columns: 1fr 1fr; */
//   height: 100vh;
//   /* padding: 3rem calc((100vw - 1300px) / 2); */
//   padding: 3rem 3rem 3rem 7rem;

//   /* My defaulft tablet is 970px but this exceptionl size for ipad and vertical ipad pro */
//   @media screen and (max-width: 1366px) {
//     height: 800px;
//   }

//   @media screen and (max-width: 520px) {
//     padding: 1rem;
//   }
// `;

// export const ColumnLeft = styled.div`
//   display: flex;
//   grid-area: 1 / 1 / 2 / 2;
//   z-index: 1;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   text-align: left;
//   padding: 1rem;

//   h1 {
//     background: #fe0000;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     font-weight: 700;
//     font-size: 9rem;
//     -ms-user-select: none; /* IE 10+ */
//     -moz-user-select: -moz-none;
//     -khtml-user-select: none;
//     -webkit-user-select: none;
//     user-select: none;
//   }

//   h2 {
//     color: #fe0000;
//     font-family: "GT";
//     font-weight: 700;
//     padding-left: 2rem;
//     margin-bottom: 3rem;
//     font-size: 7rem;
//     line-height: 0.9;
//     -ms-user-select: none; /* IE 10+ */
//     -moz-user-select: -moz-none;
//     -khtml-user-select: none;
//     -webkit-user-select: none;
//     user-select: none;
//   }

//   p {
//     color: #fe0000;
//     font-weight: 300;
//     margin: 0.5rem 0 0 0.8rem;
//     font-size: 1rem;
//     letter-spacing: 0.7rem;
//     -ms-user-select: none; /* IE 10+ */
//     -moz-user-select: -moz-none;
//     -khtml-user-select: none;
//     -webkit-user-select: none;
//     user-select: none;
//   }

//   /* for vertical mobile */
//   @media screen and (max-width: 896px) {
//     h1 {
//       font-size: 6rem;
//     }
//     h2 {
//       font-size: 3rem;
//     }
//     p {
//       font-size: 0.7rem;
//     }
//   }

//   @media screen and (max-width: 520px) {
//     grid-area: 1 / 1 / 2 / 2;
//     z-index: 1;

//     h1 {
//       font-size: 6rem;
//       margin-bottom: 0rem;
//     }
//     h2 {
//       font-size: 3rem;
//       text-indent: 0.1em;
//       line-height: 1;
//     }
//     p {
//       font-size: 0.7rem;
//       letter-spacing: 0.5rem;
//       line-height: 1;
//     }
//   }
// `;

// // export const ColumnLeft = styled.div`
// //   display: flex;
// //   grid-area: 1 / 1 / 2 / 2;
// //   z-index: 1;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: flex-start;
// //   text-align: left;
// //   padding: 1rem;

// //   h1 {
// //     background: #fe0000;
// //     -webkit-background-clip: text;
// //     -webkit-text-fill-color: transparent;
// //     font-weight: 700;
// //     font-size: 9rem;
// //     -ms-user-select: none; /* IE 10+ */
// //     -moz-user-select: -moz-none;
// //     -khtml-user-select: none;
// //     -webkit-user-select: none;
// //     user-select: none;
// //   }

// //   h2 {
// //     color: #fe0000;
// //     font-family: "GT";
// //     font-weight: 700;
// //     padding-left: 2rem;
// //     margin-bottom: 3rem;
// //     font-size: 7rem;
// //     line-height: 0.9;
// //     -ms-user-select: none; /* IE 10+ */
// //     -moz-user-select: -moz-none;
// //     -khtml-user-select: none;
// //     -webkit-user-select: none;
// //     user-select: none;
// //   }

// //   p {
// //     color: #fe0000;
// //     font-weight: 300;
// //     margin: 0.5rem 0 0 0.8rem;
// //     font-size: 1rem;
// //     letter-spacing: 0.7rem;
// //     -ms-user-select: none; /* IE 10+ */
// //     -moz-user-select: -moz-none;
// //     -khtml-user-select: none;
// //     -webkit-user-select: none;
// //     user-select: none;
// //   }

// //   /* for vertical mobile */
// //   @media screen and (max-width: 896px) {
// //     h1 {
// //       font-size: 6rem;
// //     }
// //     h2 {
// //       font-size: 3rem;
// //     }
// //     p {
// //       font-size: 0.7rem;
// //     }
// //   }

// //   @media screen and (max-width: 520px) {
// //     grid-area: 1 / 1 / 2 / 2;
// //     z-index: 1;

// //     h1 {
// //       font-size: 6rem;
// //       margin-bottom: 0rem;
// //     }
// //     h2 {
// //       font-size: 3rem;
// //       text-indent: 0.1em;
// //       line-height: 1;
// //     }
// //     p {
// //       font-size: 0.7rem;
// //       letter-spacing: 0.5rem;
// //       line-height: 1;
// //     }
// //   }
// // `;

// export const Image = styled(motion.img)`
//   position: absolute;
//   width: auto;
//   height: auto;
//   filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));

//   @media screen and (max-width: 896px) and (max-height: 427px) {
//     display: none;
//   }
// `;

// export const ColumnRight = styled.div`
//   display: flex;
//   grid-area: 1 / 1 / 2 / 2;
//   z-index: 2;
//   justify-content: center;
//   align-items: center;
//   padding: 2rem;
//   position: relative;

//   ${Image}:nth-child(1) {
//     top: 70px;
//     right: 240px;
//   }

//   ${Image}:nth-child(2) {
//     top: 215px;
//     right: 320px;
//   }

//   ${Image}:nth-child(3) {
//     top: 110px;
//     right: 130px;
//   }

//   ${Image}:nth-child(4) {
//     top: 380px;
//     right: 230px;
//   }

//   ${Image}:nth-child(5) {
//     top: 200px;
//     right: 20px;
//   }

//   @media screen and (min-width: 1441px) {
//     ${Image}:nth-child(1) {
//       top: 250px;
//       right: 240px;
//     }

//     ${Image}:nth-child(2) {
//       top: 395px;
//       right: 320px;
//     }

//     ${Image}:nth-child(3) {
//       top: 290px;
//       right: 130px;
//     }

//     ${Image}:nth-child(4) {
//       top: 560px;
//       right: 230px;
//     }

//     ${Image}:nth-child(5) {
//       top: 380px;
//       right: 20px;
//     }
//   }

//   /* My defaulft tablet is 970px but this exceptionl size for ipad and ipad pro */
//   @media screen and (max-width: 1366px) {
//     ${Image}:nth-child(1) {
//       top: 70px;
//       right: 240px;
//     }

//     ${Image}:nth-child(2) {
//       top: 215px;
//       right: 320px;
//     }

//     ${Image}:nth-child(3) {
//       top: 110px;
//       right: 130px;
//     }

//     ${Image}:nth-child(4) {
//       top: 380px;
//       right: 230px;
//     }

//     ${Image}:nth-child(5) {
//       top: 200px;
//       right: 20px;
//     }
//   }

//   /* My defaulft tablet is 970px but this exceptionl size
//    for vertical ipad pro */
//   @media screen and (max-width: 1024px) {
//     ${Image}:nth-child(1) {
//       top: 140px;
//       right: 240px;
//     }

//     ${Image}:nth-child(2) {
//       top: 285px;
//       right: 320px;
//     }

//     ${Image}:nth-child(3) {
//       top: 180px;
//       right: 130px;
//     }

//     ${Image}:nth-child(4) {
//       top: 450px;
//       right: 230px;
//     }

//     ${Image}:nth-child(5) {
//       top: 270px;
//       right: 20px;
//     }
//   }

//   @media screen and (max-width: 768px) {
//     ${Image}:nth-child(1) {
//       top: 70px;
//       right: 200px;
//     }

//     ${Image}:nth-child(2) {
//       top: 215px;
//       right: 280px;
//     }

//     ${Image}:nth-child(3) {
//       top: 100px;
//       right: 100px;
//     }

//     ${Image}:nth-child(4) {
//       top: 450px;
//       right: 240px;
//     }

//     ${Image}:nth-child(5) {
//       top: 320px;
//       right: 160px;
//     }
//   }

//   /* for Mobile */
//   @media screen and (max-width: 520px) {
//     display: none;
//   }
// `;

// export const ColumnMobile = styled.div`
//   display: flex;
//   grid-area: 1 / 1 / 2 / 2;
//   z-index: 2;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   ${Image}:nth-child(1) {
//     top: 185px;
//     right: 0px;
//     max-width: 50%;
//   }

//   ${Image}:nth-child(2) {
//     top: 305px;
//     right: 80px;
//     max-width: 17%;
//   }

//   ${Image}:nth-child(3) {
//     top: 265px;
//     right: 18px;
//     max-width: 20%;
//   }

//   ${Image}:nth-child(4) {
//     top: 315px;
//     right: 195px;
//     max-width: 16%;
//   }

//   ${Image}:nth-child(5) {
//     top: 370px;
//     right: 140px;
//     max-width: 18%;
//   }

//   @media screen and (min-width: 521px) {
//     display: none;
//   }
// `;
