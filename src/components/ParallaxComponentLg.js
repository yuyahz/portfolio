import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const ParallaxContainer = styled.div`
  margin: 0;
  max-height: 4320px;
  background-color: var(--secondary-bg);
  padding-left: 100px;
  overflow: hidden;
  overscroll-behavior: auto !important;

  @media only screen and (max-width: 960px) {
    display: none;
    padding-left: 15px;
  }
  @media only screen and (max-width: 470px) {
    padding-right: 15px;
  }

  .parallax-wrapper {
    max-width: 2560px;
    margin: 0 auto;
    height: 100vh;
    border-radius: 10%;
    overflow-x: hidden;
    perspective: 1px;
    scroll-behavior: smooth;
    overscroll-behavior: auto !important;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  @media only screen and (max-width: 540px) {
    .parallax-wrapper {
      border-radius: 5%;
    }
  }

  .parallax-layer {
    display: flex;
    position: absolute;
    top: 0;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 460px;
    font-weight: 100;
    color: var(--fourth-txt-color);
    text-align: center;
  }

  @media only screen and (max-width: 2560px) {
    p {
      font-size: 17.969vw;
    }
  }
  @media only screen and (max-width: 1960px) {
    p {
      font-size: 18vw;
    }
  }
  @media only screen and (max-width: 960px) {
    p {
      font-size: 20vw;
    }
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 19vw;
    }
  }
  @media only screen and (max-width: 369px) {
    p {
      font-size: 17.5vw;
    }
  }

  .parallax-layer p {
    width: 100%;
    background: rgb(254, 0, 0);
    background: -moz-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 97%,
      rgba(250, 248, 246, 0) 100%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 97%,
      rgba(250, 248, 246, 0) 100%
    );
    background: linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 97%,
      rgba(250, 248, 246, 0) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe0000",endColorstr="#faf8f6",GradientType=1);
  }

  .parallax-layer {
    width: 100%;
    max-height: 2160px;
  }
  .parallax-layer.layer1 {
    z-index: 10;
    transition: all 0.6s ease-out;
  }
  .parallax-layer.layer2 {
    z-index: 20;
    transition: all 1.5s ease-out;
  }
  .parallax-layer.layer3 {
    z-index: 20;
    transition: all 3.5s ease-out;
    background: rgb(254, 0, 0);
    background: -moz-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 75%,
      rgba(250, 248, 246, 0) 85%
    );
    background: -webkit-linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 75%,
      rgba(250, 248, 246, 0) 85%
    );
    background: linear-gradient(
      180deg,
      rgba(254, 0, 0, 1) 75%,
      rgba(250, 248, 246, 0) 85%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe0000",endColorstr="#faf8f6",GradientType=1);

    @media only screen and (max-width: 810px) {
      background: rgb(254, 0, 0);
      background: -moz-linear-gradient(
        180deg,
        rgba(254, 0, 0, 1) 60%,
        rgba(250, 248, 246, 0) 69%
      );
      background: -webkit-linear-gradient(
        180deg,
        rgba(254, 0, 0, 1) 60%,
        rgba(250, 248, 246, 0) 69%
      );
      background: linear-gradient(
        180deg,
        rgba(254, 0, 0, 1) 60%,
        rgba(250, 248, 246, 0) 69%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fe0000",endColorstr="#faf8f6",GradientType=1);
    }

    .vertical {
      display: block;
      span::after {
        content: "Amazing";
      }

      .moon {
        z-index: 30;
        border-radius: 50% 50% 0 0;
        background: rgb(250, 248, 246);
        background: linear-gradient(
          180deg,
          rgba(250, 248, 246, 1) 0%,
          rgba(251, 167, 166, 1) 10%,
          rgba(252, 108, 107, 1) 20%,
          rgba(254, 0, 0, 0) 30%
        );
        animation-name: sway;
        animation-duration: 4s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes sway {
          from {
            padding: 160px;
          }
          to {
            padding: 80px;
          }
        }
        @media only screen and (max-width: 1920px) {
          @keyframes sway {
            from {
              padding: 122px;
            }
            to {
              padding: 66px;
            }
          }
        }
        @media only screen and (max-width: 1280px) {
          @keyframes sway {
            from {
              padding: 84px;
            }
            to {
              padding: 44px;
            }
          }
        }
        @media only screen and (max-width: 960px) {
          @keyframes sway {
            from {
              padding: 74px;
            }
            to {
              padding: 24px;
            }
          }
        }
        @media only screen and (max-width: 540px) {
          @keyframes sway {
            from {
              padding: 54px;
            }
            to {
              padding: 30px;
            }
          }
        }
      }
      //Amazing//
      font-size: 460px;
      font-weight: 100;
      color: var(--fourth-txt-color);
      text-align: center;

      @media only screen and (max-width: 2560px) {
        font-size: 17.969vw;
      }
      @media only screen and (max-width: 1920px) {
        font-size: 18vw;
      }
      @media only screen and (max-width: 960px) {
        font-size: 20vw;
      }
      @media only screen and (max-width: 540px) {
        font-size: 19vw;
      }
      @media only screen and (max-width: 369px) {
        font-size: 17.5vw;
      }
    }
  }
  .parallax-layer.layer4 {
    z-index: 30;
    transition: all 3s ease-out;
  }
  .parallax-layer.layer5 {
    z-index: 30;
    transition: all 2s ease-out;
  }

  h3 {
    color: var(--fourth-txt-color);
    font-family: "GT";
    font-size: 48px;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding-bottom: 100px;

    @media screen and (max-width: 540px) {
      font-size: 32px;
    }
  }
`;

export const SocialIcons = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 44px;
`;

export const SocialIconLink = styled.a`
  color: var(--primary-bg);
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    padding: 0 0 16px 0;
  }
`;

const ParallaxComponentLg = () => {
  const parallaxRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const parallaxElement = parallaxRef.current;
    const position = 100; // Example start position
    const positionBottom = 100; // Example end position

    if (parallaxElement) {
      const top = parallaxElement.offsetTop;
      if (scrollY >= top) {
        console.log("Parallax element reached the top of the viewport");
      }
      const layers = parallaxElement.querySelectorAll(".parallax-layer");
      layers.forEach((layer, index) => {
        const depth = (index + 1) * 1;
        const depthAdjusted = (scrollY - top) * depth;
        layer.style.transform = `translateY(${depthAdjusted}px)`;
      });

      if (scrollY > position && scrollY < positionBottom) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxContainer id="parallaxLg" ref={parallaxRef}>
      <div className="parallax-wrapper">
        <div className={`parallax-layer layer1 ${active ? "act" : ""}`}>
          <p className="first-copy">Let's Make</p>
        </div>
        <div className="parallax-layer layer2">
          <p>Something</p>
        </div>
        <div className="parallax-layer layer3">
          <div className="vertical">
            <span className="moon"></span>
          </div>
        </div>
        <div className="parallax-layer layer4">
          <h3>Thank you.</h3>
        </div>
        <div className="parallax-layer layer5">
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/in/yuya-hashirizaki"
              target="_blank"
              aria-label="linkedIn"
            >
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/Yuya61"
              target="_blank"
              aria-label="github"
            >
              <FiGithub />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.behance.net/yuyahashirizaki"
              target="_blank"
              aria-label="Instagram"
            >
              <FaBehance />
            </SocialIconLink>
            <SocialIconLink
              href="https://dribbble.com/yuya-hashirizaki"
              target="_blank"
              aria-label="dribbble"
            >
              <FaDribbble />
            </SocialIconLink>
          </SocialIcons>
          {/* <div className="parallax-layer layer6">
            <p className="rights">
              {" "}
              &copy; {new Date().getFullYear()} Your Website. All rights
              reserved.
            </p>
          </div> */}
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default ParallaxComponentLg;

// v2
// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";

// export const ParallaxContainer = styled.div`
//   margin: 0;
//   max-height: 4320px;
//   background-color: var(--secondary-bg);
//   padding: 16px 0 0 100px;
//   overscroll-behavior: auto !important;

//   @media only screen and (max-width: 960px) {
//     padding-left: 15px;
//   }
//   @media only screen and (max-width: 470px) {
//     padding-right: 15px;
//   }

//   .parallax-wrapper {
//     max-width: 2560px;
//     margin: 0 auto;
//     height: 100vh;
//     border-radius: 10%;
//     overflow-x: hidden;
//     perspective: 1px;
//     scroll-behavior: smooth;
//     overscroll-behavior: auto !important;
//     -webkit-overflow-scrolling: touch;
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//     ::-webkit-scrollbar {
//       display: none;
//     }
//   }
//   @media only screen and (max-width: 540px) {
//     .parallax-wrapper {
//       border-radius: 5%;
//     }
//   }

//   .parallax-layer {
//     position: absolute;
//     top: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//   }

//   /// font size ///
//   p {
//     font-size: 460px;
//     font-weight: 100;
//     color: var(--fourth-txt-color);
//     text-align: center;
//   }
//   @media only screen and (max-width: 2560px) {
//     p {
//       font-size: 17.969vw;
//     }
//   }
//   @media only screen and (max-width: 1960px) {
//     .layer2 {
//       transform: translateZ(-1px);
//     }
//     p {
//       font-size: 18vw;
//     }
//   }
//   @media only screen and (max-width: 960px) {
//     p {
//       font-size: 20vw;
//     }
//   }
//   @media only screen and (max-width: 540px) {
//     p {
//       font-size: 19vw;
//     }
//   }

//   /// layer positions ///
//   .parallax-layer {
//     width: 100%;
//     max-height: 2160px;
//   }
//   .parallax-layer.layer1 {
//     z-index: 20;
//     background-color: var(--secondary-bg);
//     border-radius: 0 0 50% 50%;
//   }
//   .parallax-layer.layer2 {
//     z-index: 30;
//     padding-top: 60%;
//   }
//   .parallax-layer.layer3 {
//     z-index: 10;
//     height: 350px;
//     margin-top: 125%;
//     border-radius: 50%;
//     background: rgb(250, 248, 246);
//     background: linear-gradient(
//       180deg,
//       rgba(250, 248, 246, 1) 0%,
//       rgba(251, 167, 166, 1) 10%,
//       rgba(252, 108, 107, 1) 20%,
//       rgba(254, 0, 0, 1) 30%
//     );
//   }
//   .parallax-layer.layer4 {
//     z-index: 10;
//     padding-top: 100%;
//   }

//   @media only screen and (max-width: 1280px) {
//     .parallax-layer.layer3 {
//       height: 400px;
//       margin-top: 110%;
//     }
//   }

//   @media only screen and (max-width: 960px) {
//     .parallax-layer.layer3 {
//       margin-top: 125%;
//       border-radius: 50%;
//     }
//   }

//   @media only screen and (max-width: 834px) {
//     .parallax-layer.layer3 {
//       margin-top: 140%;
//     }
//   }

//   @media only screen and (max-width: 540px) {
//     .parallax-layer.layer3 {
//       margin-top: 170%;
//     }
//   }
//   @media only screen and (max-width: 470px) {
//     .parallax-wrapper .layer3 {
//       margin-top: 180%;
//     }
//   }
// `;

// /* @media only screen and (max-width: 540px) {
//     .parallax-wrapper {
//       max-height: 650px;
//       height: 70vh;
//     }
//   } */

// /* @media only screen and (max-width: 1920px) {
//     .parallax-wrapper {
//       height: 1080px;
//     }
//   }
//   @media only screen and (max-width: 960px) {
//     .parallax-wrapper {
//       height: 1024px;
//       border-radius: 20px 20px 60px 60px;
//     }
//   }
//   @media only screen and (max-width: 470px) {
//     .parallax-wrapper {
//       height: 670px;
//     }
//   } */

// const ParallaxComponent = () => {
//   const parallaxRef = useRef(null);

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const parallaxElement = parallaxRef.current;
//     if (parallaxElement) {
//       const top = parallaxElement.offsetTop;
//       if (scrollY >= top) {
//         console.log("Parallax element reached the top of the viewport");
//         // Add your actions here
//       }
//       const layers = parallaxElement.querySelectorAll(".parallax-layer");
//       layers.forEach((layer, index) => {
//         const depth = (index + 1) * 0.5; // Adjust depth calculation
//         const depthAdjusted = (scrollY - top) * depth;
//         layer.style.transform = `translateY(${depthAdjusted}px)`;
//       });
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <ParallaxContainer id="parallax" ref={parallaxRef}>
//       <div className="parallax-wrapper">
//         <div className="parallax-layer layer1">
//           <p>Let's Make</p>
//         </div>
//         <div className="parallax-layer layer2">
//           <p>Something</p>
//         </div>

//         <div className="parallax-layer layer3"></div>
//         <div className="parallax-layer layer4">
//           <p>Amazing</p>
//         </div>
//       </div>
//     </ParallaxContainer>
//   );
// };

// export default ParallaxComponent;

// v1
// import React from "react";
// import styled from "styled-components";

// export const ParallaxContainer = styled.div`
//   margin: 0;
//   background-color: var(--secondary-bg);
//   max-height: 1440px;
//   padding: 16px 0 0 100px;
//   height: 100%;
//   /* overflow: hidden; */
//   overscroll-behavior: auto !important;
//   /* -webkit-overflow-scrolling: touch;
//   -ms-overflow-style: none;
//   scrollbar-width: none;
//   ::-webkit-scrollbar {
//     display: none;
//   } */

//   @media only screen and (max-width: 960px) {
//     padding-left: 15px;
//   }
//   @media only screen and (max-width: 470px) {
//     padding-right: 15px;
//   }

//   /// height ///
//   .parallax-wrapper {
//     max-width: 2560px;
//     margin: 0 auto;
//     height: 1440px;
//     /* background-color: var(--secondary-bg); */
//     border-radius: 10% 10% 50% 50%;
//     overflow-x: hidden;
//     perspective: 1px;
//     scroll-behavior: smooth;
//     overscroll-behavior: auto !important;
//     -webkit-overflow-scrolling: touch;
//     -ms-overflow-style: none;
//     scrollbar-width: none;
//     ::-webkit-scrollbar {
//       display: none;
//     }
//   }

//   @media only screen and (max-width: 1920px) {
//     .parallax-wrapper {
//       height: 1080px;
//     }
//   }
//   @media only screen and (max-width: 960px) {
//     .parallax-wrapper {
//       height: 1024px;
//       border-radius: 20px 20px 60px 60px;
//     }
//   }
//   @media only screen and (max-width: 540px) {
//     .parallax-wrapper {
//       height: 926px;
//       border-radius: 100px;
//     }
//   }
//   @media only screen and (max-width: 470px) {
//     .parallax-wrapper {
//       height: 670px;
//       /* border-radius: 50%;
//       border: solid 2px var(--primary-bg); */
//     }
//   }

//   /// text area ///
//   .parallax-layer {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//   }

//   .layer1 {
//     transform: translateZ(0);
//   }
//   .layer2 {
//     transform: translateZ(-2px);
//   }
//   .layer3 {
//     transform: translateZ(-2.5px);
//   }
//   .layer4 {
//     transform: translateZ(0);
//   }

//   /// text size ///
//   p {
//     font-size: 460px;
//     font-weight: 100;
//     color: var(--fourth-txt-color);
//     text-align: center;
//   }

//   @media only screen and (max-width: 2560px) {
//     p {
//       font-size: 17.969vw;
//     }
//   }

//   @media only screen and (max-width: 1960px) {
//     .layer2 {
//       transform: translateZ(-1px);
//     }
//     p {
//       font-size: 18vw;
//     }
//   }

//   @media only screen and (max-width: 960px) {
//     p {
//       font-size: 25vw;
//     }
//     .txt-sm {
//       font-size: 20vw;
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     p {
//       font-size: 24.5vw;
//     }
//   }

//   @media only screen and (max-width: 540px) {
//     p {
//       font-size: 24vw;
//     }
//   }

//   @media only screen and (max-width: 470px) {
//     p {
//       font-size: 22.3vw;
//     }
//   }

//   /// text positions ///
//   .parallax-layer.layer1 {
//     top: 20rem;
//     width: 100%;
//     height: 60rem;
//     z-index: 999;
//     border-radius: 0 0 50% 50%;
//     background-color: var(--secondary-bg);
//   }
//   .parallax-layer.layer2 {
//     top: 32rem;
//     width: 100%;
//     height: 45rem;
//     /* border-radius: 350px;
//     border: solid 10px var(--primary-bg); */
//   }
//   .parallax-layer.layer3 {
//     top: 60rem;
//     width: 100%;
//     height: 50rem;
//     border-radius: 50%;
//     background: rgb(250, 248, 246);
//     background: linear-gradient(
//       180deg,
//       rgba(250, 248, 246, 1) 0%,
//       rgba(251, 167, 166, 1) 10%,
//       rgba(252, 108, 107, 1) 20%,
//       rgba(254, 0, 0, 1) 30%
//     );
//   }
//   .parallax-layer.layer4 {
//     top: 92rem;
//     width: 100%;
//     height: 54rem;
//   }

//   @media only screen and (max-width: 1920px) {
//     .parallax-layer.layer1 {
//       top: 15rem;
//       height: 53rem;
//     }
//     .parallax-layer.layer2 {
//       z-index: 998;
//       top: 73rem;
//       height: 45rem;
//     }
//     .parallax-layer.layer3 {
//       z-index: 997;
//       top: 88rem;
//       height: 28rem;
//     }
//     .parallax-layer.layer4 {
//       z-index: 998;
//       top: 102rem;
//       height: 40rem;
//     }
//   }

//   @media only screen and (max-width: 1280px) {
//     .parallax-layer.layer1 {
//       top: 20rem;
//       height: 44rem;
//     }
//     .parallax-layer.layer2 {
//       top: 69rem;
//       height: 45rem;
//     }
//     .parallax-layer.layer3 {
//       top: 70rem;
//       height: 28rem;
//     }
//     .parallax-layer.layer4 {
//       top: 98rem;
//       height: 44rem;
//     }
//   }

//   @media only screen and (max-width: 960px) {
//     .parallax-layer.layer1 {
//       top: 17rem;
//       height: 50rem;
//     }
//     .parallax-layer.layer2 {
//       top: 74rem;
//       height: 45rem;
//     }
//     .parallax-layer.layer3 {
//       top: 76rem;
//       height: 40rem;
//     }
//     .parallax-layer.layer4 {
//       top: 100rem;
//       height: 44rem;
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     .parallax-layer.layer1 {
//       top: 17rem;
//       height: 49rem;
//     }
//     .parallax-layer.layer2 {
//       top: 80rem;
//       height: 80rem;
//     }
//     .parallax-layer.layer3 {
//       top: 81rem;
//       height: 20rem;
//     }
//     .parallax-layer.layer4 {
//       top: 103rem;
//       height: 40rem;
//     }
//   }

//   @media only screen and (max-width: 540px) {
//     .parallax-layer.layer1 {
//       top: 17rem;
//       height: 60rem;
//     }
//     .parallax-layer.layer2 {
//       top: 85rem;
//       height: 80rem;
//     }
//     .parallax-layer.layer3 {
//       top: 76rem;
//       height: 20rem;
//     }
//     .parallax-layer.layer4 {
//       top: 106rem;
//       height: 40rem;
//     }
//   }

//   @media only screen and (max-width: 470px) {
//     .parallax-layer.layer1 {
//       top: 14rem;
//       height: 27rem;
//     }
//     .parallax-layer.layer2 {
//       top: 49rem;
//       height: 33rem;
//     }
//     .parallax-layer.layer3 {
//       top: 50rem;
//       height: 24rem;
//     }
//     .parallax-layer.layer4 {
//       top: 59rem;
//       height: 10rem;
//     }
//   }

//   /* @media only screen and (max-width: 390px) {
//     .parallax-layer.layer1 {
//       top: 20rem;
//       height: 43rem;
//     }
//     .parallax-layer.layer2 {
//       top: 93rem;
//       height: 71rem;
//     }
//     .parallax-layer.layer3 {
//       top: 84rem;
//       height: 21rem;
//     }
//     .parallax-layer.layer4 {
//       top: 110rem;
//       height: 34rem;
//     }
//   } */
// `;

// const ParallaxComponent = () => {
//   return (
//     <ParallaxContainer id="parallax">
//       <div className="parallax-wrapper">
//         <div className="parallax-layer layer1">
//           <p className="hide">Let's Make</p>
//         </div>
//         <div className="parallax-layer layer2">
//           <p className="txt-sm">Something</p>
//         </div>
//         <div className="parallax-layer layer3">{/* <p>Amazing</p> */}</div>
//         <div className="parallax-layer layer4">
//           <p>Amazing</p>
//         </div>
//       </div>
//     </ParallaxContainer>
//   );
// };

// export default ParallaxComponent;
