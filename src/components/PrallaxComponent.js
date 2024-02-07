import React from "react";
import styled from "styled-components";

export const ParallaxContainer = styled.div`
  margin: 0;
  background-color: var(--secondary-bg);
  max-height: 1440px;
  padding: 16px 0 0 100px;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media only screen and (max-width: 960px) {
    padding-left: 15px;
  }
  @media only screen and (max-width: 470px) {
    padding-right: 15px;
  }

  /// height ///
  .parallax-wrapper {
    max-width: 2560px;
    margin: 0 auto;
    height: 1440px;
    background-color: var(--secondary-bg);
    border-radius: 10% 10% 50% 50%;
    overflow-x: hidden;
    perspective: 1px;
    padding: 100px;
  }

  @media only screen and (max-width: 1920px) {
    .parallax-wrapper {
      height: 1080px;
    }
  }
  @media only screen and (max-width: 960px) {
    .parallax-wrapper {
      height: 1024px;
      border-radius: 20px 20px 60px 60px;
    }
  }
  @media only screen and (max-width: 540px) {
    .parallax-wrapper {
      height: 926px;
      border-radius: 100px;
    }
  }
  @media only screen and (max-width: 470px) {
    .parallax-wrapper {
      height: 670;
      border-radius: 50%;
      border: solid 1px var(--primaly-bg);
    }
  }

  /// text area ///
  .parallax-layer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .layer1 {
    transform: translateZ(0);
  }
  .layer2 {
    transform: translateZ(-2px);
  }
  .layer3 {
    transform: translateZ(-2.5px);
  }
  .layer4 {
    transform: translateZ(0);
  }

  /// text size ///
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
    .layer2 {
      transform: translateZ(-1px);
    }
    p {
      font-size: 18vw;
    }
  }

  @media only screen and (max-width: 960px) {
    p {
      font-size: 25vw;
    }
    .txt-sm {
      font-size: 20vw;
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 24.5vw;
    }
  }

  @media only screen and (max-width: 540px) {
    p {
      font-size: 24vw;
    }
  }

  @media only screen and (max-width: 470px) {
    p {
      font-size: 22.3vw;
    }
  }

  /// text positions ///
  .parallax-layer.layer1 {
    top: 20rem;
    width: 100%;
    height: 60rem;
    z-index: 999;
    border-radius: 0 0 50% 50%;
    background-color: var(--secondary-bg);
  }
  .parallax-layer.layer2 {
    top: 32rem;
    width: 100%;
    height: 45rem;
    /* border-radius: 350px;
    border: solid 10px var(--primaly-bg); */
  }
  .parallax-layer.layer3 {
    top: 60rem;
    width: 100%;
    height: 50rem;
    border-radius: 50%;
    background: rgb(250, 248, 246);
    background: linear-gradient(
      180deg,
      rgba(250, 248, 246, 1) 0%,
      rgba(251, 167, 166, 1) 10%,
      rgba(252, 108, 107, 1) 20%,
      rgba(254, 0, 0, 1) 30%
    );
  }
  .parallax-layer.layer4 {
    top: 92rem;
    width: 100%;
    height: 54rem;
  }

  @media only screen and (max-width: 1920px) {
    .parallax-layer.layer1 {
      top: 15rem;
      height: 53rem;
    }
    .parallax-layer.layer2 {
      z-index: 998;
      top: 73rem;
      height: 45rem;
    }
    .parallax-layer.layer3 {
      z-index: 997;
      top: 88rem;
      height: 28rem;
    }
    .parallax-layer.layer4 {
      z-index: 998;
      top: 102rem;
      height: 40rem;
    }
  }

  @media only screen and (max-width: 1280px) {
    .parallax-layer.layer1 {
      top: 20rem;
      height: 44rem;
    }
    .parallax-layer.layer2 {
      top: 69rem;
      height: 45rem;
    }
    .parallax-layer.layer3 {
      top: 70rem;
      height: 28rem;
    }
    .parallax-layer.layer4 {
      top: 98rem;
      height: 44rem;
    }
  }

  @media only screen and (max-width: 960px) {
    .parallax-layer.layer1 {
      top: 17rem;
      height: 50rem;
    }
    .parallax-layer.layer2 {
      top: 74rem;
      height: 45rem;
    }
    .parallax-layer.layer3 {
      top: 76rem;
      height: 40rem;
    }
    .parallax-layer.layer4 {
      top: 100rem;
      height: 44rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .parallax-layer.layer1 {
      top: 17rem;
      height: 49rem;
    }
    .parallax-layer.layer2 {
      top: 80rem;
      height: 80rem;
    }
    .parallax-layer.layer3 {
      top: 81rem;
      height: 20rem;
    }
    .parallax-layer.layer4 {
      top: 103rem;
      height: 40rem;
    }
  }

  @media only screen and (max-width: 540px) {
    .parallax-layer.layer1 {
      top: 17rem;
      height: 60rem;
    }
    .parallax-layer.layer2 {
      top: 85rem;
      height: 80rem;
    }
    .parallax-layer.layer3 {
      top: 76rem;
      height: 20rem;
    }
    .parallax-layer.layer4 {
      top: 106rem;
      height: 40rem;
    }
  }

  @media only screen and (max-width: 470px) {
    .parallax-layer.layer1 {
      top: 17rem;
      height: 25rem;
    }
    .parallax-layer.layer2 {
      top: 42rem;
      height: 45rem;
    }
    .parallax-layer.layer3 {
      top: 39rem;
      height: 24rem;
    }
    .parallax-layer.layer4 {
      top: 56rem;
      height: 34rem;
    }
  }

  @media only screen and (max-width: 390px) {
    .parallax-layer.layer1 {
      top: 20rem;
      height: 43rem;
    }
    .parallax-layer.layer2 {
      top: 93rem;
      height: 71rem;
    }
    .parallax-layer.layer3 {
      top: 84rem;
      height: 21rem;
    }
    .parallax-layer.layer4 {
      top: 110rem;
      height: 34rem;
    }
  }
`;

const ParallaxComponent = () => {
  return (
    <ParallaxContainer>
      <div className="parallax-wrapper">
        <div className="parallax-layer layer1">
          <p className="hide">Let's Make</p>
        </div>
        <div className="parallax-layer layer2">
          <p className="txt-sm">Something</p>
        </div>
        <div className="parallax-layer layer3">{/* <p>Amazing</p> */}</div>
        <div className="parallax-layer layer4">
          <p>Amazing</p>
        </div>
      </div>
    </ParallaxContainer>
  );
};

export default ParallaxComponent;
