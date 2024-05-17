import styled from "styled-components";

export const LooperContainer = styled.div`
  width: 100%;
  background: var(--primly-bg);
  color: var(--fourth-txt-color);
  -ms-user-select: none; /* IE 10+ */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  @media only screen and (max-width: 960px) {
    padding: 0.833vw 0;
  }

  .looper-t {
    position: relative;
    height: 95px;
    overflow: hidden;
    margin-bottom: 4rem;
    background: var(--secondary-bg);

    @media only screen and (max-width: 2300px) {
      height: 4.13vw;
      margin-bottom: 2.783vw;
    }

    @media screen and (max-width: 960px) {
      height: 40px;
    }

    @media screen and (max-width: 530px) {
      height: 7.547vw;
    }
  }

  .looper-t::before,
  .looper-t::after {
    content: "☺︎ Designing without research is like hopping into a taxi and just saying, 'Drive' ☹︎";
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    text-align: center;
    z-index: 1;
    font-family: "GT";
    font-weight: 500;
    font-size: 4rem;
    line-height: 1.5;

    @media only screen and (max-width: 2300px) {
      font-size: 2.783vw;
    }

    @media screen and (max-width: 960px) {
      content: "☺︎ Designing without research is like ☹︎";
      font-size: 24px;
    }

    @media screen and (max-width: 530px) {
      content: "☺︎ Designing without research is like ☹︎";
      font-size: 4.528vw;
    }
  }

  .looper-t::before {
    left: 0;
    animation: looper-t 20s linear infinite;
  }

  .looper-t::after {
    left: 100%;
    animation: looper-t 20s linear infinite;
  }

  @keyframes looper-t {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .looper-b {
    position: relative;
    height: 95px;
    overflow: hidden;
    background: var(--secondary-bg);

    @media only screen and (max-width: 2300px) {
      height: 4.13vw;
    }

    @media screen and (max-width: 960px) {
      height: 40px;
    }

    @media screen and (max-width: 530px) {
      height: 7.547vw;
    }
  }

  .looper-b::before,
  .looper-b::after {
    content: "☹︎ Once you reach your destination, settle in and kick off the iterative process ☺︎";
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    text-align: center;
    z-index: 1;
    font-family: "GT";
    font-size: 4rem;
    line-height: 1.5;

    @media only screen and (max-width: 2300px) {
      font-size: 2.783vw;
    }

    @media screen and (max-width: 960px) {
      content: "☺︎ hopping into a taxi and just saying, 'Drive' ☹︎";
      font-size: 24px;
    }

    @media screen and (max-width: 530px) {
      content: "☺︎ hopping into a taxi and just saying, 'Drive' ☹︎";
      font-size: 4.528vw;
    }
  }

  .looper-b::before {
    left: 0;
    animation: looper-b 20s linear infinite;
  }

  .looper-b::after {
    left: 100%;
    animation: looper-b 20s linear infinite;
  }

  @keyframes looper-b {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
