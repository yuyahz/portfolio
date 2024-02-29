import styled from "styled-components";
export const SliderContainer = styled.div`
  .slider {
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 1024px) {
      padding: 0 16.5vw;
    }

    @media only screen and (max-width: 540px) {
      padding: 0px;
    }
  }

  .image {
    width: 100%;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 960px) {
      border-radius: 10px;
    }

    @media only screen and (max-width: 540px) {
      width: 100%;
    }
  }

  .slide {
    opacity: 0;
    transform-origin: 93% 50%;
    transform: scaleX(0);
    transition: transform 0.4s ease-in-out;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 0.4s;
    transform: scale(1);
  }
`;

export const Image = styled.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    width: 40%;
  }

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* .right-arrow {
    position: absolute;
    bottom: -10%;
    right: 45%;
    font-size: 1.5rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    color: var(--primary-txt-color);;
  } */

  .left-arrow {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    color: var(--primary-txt-color);
    margin: 24px 24px 0 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    //// responsible button size ////
    @media only screen and (max-width: 1570px) {
      font-size: 3vw;
      margin: 1.6vw 1.6vw 0 0;
    }

    @media only screen and (max-width: 1024px) {
      right: 19%;
      font-size: 4.7vw;
      margin: 2.35vw 2.35vw 0 0;
    }

    @media only screen and (max-width: 960px) {
      font-size: 5vw;
      margin: 2.5vw 2.5vw 0 0;
    }

    @media only screen and (max-width: 540px) {
      right: 0;
      font-size: 9.5vw;
      margin: 3vw 3vw 0 0;
    }
  }

  svg:hover {
    animation: tilt-n-move-shaking 0.3s;
    animation-iteration-count: infinite;
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(2px, 2px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-2px, 2px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`;
