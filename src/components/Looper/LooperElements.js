import styled from "styled-components";

export const LooperContainer = styled.div`
  width: 100%;
  background: #faf8f6;
  -ms-user-select: none; /* IE 10+ */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  .looper-t {
    position: relative;
    height: 95px;
    overflow: hidden;

    @media only screen and (max-width: 960px) {
      height: 11vw;
    }
  }

  .looper-t::before,
  .looper-t::after {
    content: "☺︎ ☹︎ User Experience Design";
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    text-align: center;
    z-index: 1;
    color: #fe0000;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.5;

    @media only screen and (max-width: 960px) {
      font-size: 6.6vw;
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

    @media only screen and (max-width: 960px) {
      height: 11vw;
    }
  }

  .looper-b::before,
  .looper-b::after {
    content: "☹︎ ☺︎ User Interface Design";
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    background: #faf8f6;
    text-align: center;
    z-index: 1;
    color: #fe0000;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.5;

    @media only screen and (max-width: 960px) {
      font-size: 7.2vw;
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
