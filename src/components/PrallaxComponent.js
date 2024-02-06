import React from "react";
import styled from "styled-components";

export const ParallaxContainer = styled.div`
  margin: 0;
  background-color: var(--secondary-bg);
  max-height: 1440px;
  padding-left: 100px;

  @media only screen and (max-width: 960px) {
    padding-left: 15px;
  }

  .parallax-wrapper {
    max-width: 2560px;
    margin: 0 auto;
    height: 1440px;
    background-color: var(--secondary-bg);
    border-radius: 30%;
    /* border: solid 2px var(--primaly-bg); */
    overflow-x: hidden;
    perspective: 1px;
    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }
  }

  @media only screen and (max-width: 1920px) {
    .parallax-wrapper {
      height: 1080px;
    }
  }

  @media only screen and (max-width: 960px) {
    .parallax-wrapper {
      height: 640px;
      border-radius: 20%;
    }
  }
  @media only screen and (max-width: 540px) {
    .parallax-wrapper {
      height: 400px;
    }
  }

  .parallax-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .layer1 {
    transform: translateZ(-0px);
  }

  .layer2 {
    transform: translateZ(-2px);
  }

  .layer3 {
    transform: translateZ(-0.1px);
  }

  p {
    font-weight: 100;
    font-size: 18vw;
    color: var(--fourth-txt-color);
    text-align: center;

    /* @media only screen and (min-width: 2560px) {
      font-size: 470px;
    }
    @media only screen and (max-width: 2159px) {
      font-size: 17.8vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 21vw;
      line-height: 1.1;
    } */
  }

  .parallax-layer.layer1 {
    top: 10rem;
    width: 100%;
    height: 60rem;
    z-index: 999;
    border-radius: 0 0 50% 50%;
    background-color: var(--secondary-bg);
  }
  .parallax-layer.layer2 {
    top: 70rem;
    width: 100%;
    height: 100rem;
  }
  .parallax-layer.layer3 {
    top: 100rem;
    width: 100%;
    height: 50rem;
    border-radius: 50% 50% 0 0;
    background-color: var(--secondary-bg);
  }

  @media only screen and (max-width: 1920px) {
    .parallax-layer.layer1 {
      top: 22rem;
      height: 40rem;
    }
    .parallax-layer.layer2 {
      top: 70rem;
      height: 100rem;
    }
    .parallax-layer.layer3 {
      top: 88rem;
      height: 30rem;
    }
  }

  @media only screen and (max-width: 1280px) {
    .parallax-layer.layer3 {
      top: 87rem;
    }
  }

  @media only screen and (max-width: 960px) {
    .parallax-layer.layer1 {
      top: 17rem;
      height: 30rem;
    }
    .parallax-layer.layer2 {
      top: 55rem;
      height: 80rem;
    }
    .parallax-layer.layer3 {
      top: 70rem;
      height: 20rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .parallax-layer.layer1 {
      top: 17rem;
      height: 30rem;
    }
    .parallax-layer.layer2 {
      top: 45.5rem;
      height: 80rem;
    }
    .parallax-layer.layer3 {
      top: 60rem;
      height: 20rem;
    }
  }

  @media only screen and (max-width: 540px) {
    .parallax-layer.layer1 {
      top: 13rem;
      height: 20rem;
    }
    .parallax-layer.layer2 {
      top: 32rem;
      height: 60rem;
    }
    .parallax-layer.layer3 {
      top: 43rem;
      height: 15rem;
    }
  }

  @media only screen and (max-width: 470px) {
    .parallax-layer.layer1 {
      top: 11rem;
      height: 10rem;
    }
    .parallax-layer.layer2 {
      top: 20rem;
      height: 40rem;
    }
    .parallax-layer.layer3 {
      top: 27rem;
      height: 15rem;
    }
  }

  @media only screen and (max-width: 350px) {
    .parallax-layer.layer3 {
      top: 26.5rem;
      height: 15rem;
    }
  }
`;

const ParallaxComponent = () => {
  return (
    <ParallaxContainer>
      <div className="parallax-wrapper">
        <div className="parallax-layer layer1">
          <p className="hide">Let's make</p>
        </div>
        <div className="parallax-layer layer2">
          <p>Something</p>
        </div>
        <div className="parallax-layer layer3">
          <p>Amazing</p>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default ParallaxComponent;
