import styled from "styled-components";

export const TickerContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  $duration: 40s;

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  max-width: 100%;
  overflow: hidden;
  height: auto;
  padding-left: 100%;
  box-sizing: content-box;
  background: #faf8f6;
`;

export const TickerWrapper = styled.div`
  display: inline-block;
  /* height: 4rem; */
  line-height: 8rem;
  white-space: nowrap;
  padding-right: 100%;
  padding-left: 70px;
  box-sizing: content-box;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-name: ticker;
  animation-name: ticker;
  -webkit-animation-duration: 40s;
  animation-duration: 40s;
`;

export const TickerItem = styled.div`
  display: inline-block;
  font-size: 4.5rem;
  font-weight: 900;
  color: #fe0000;
`;
