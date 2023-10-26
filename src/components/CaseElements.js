import styled from "styled-components";
import { Link } from "react-router-dom";

///// home button /////
export const HomeIconWrapper = styled.div`
  position: relative;
  z-index: 999;
`;

export const HomeIcon = styled(Link)`
  font-family: GT;
  font-size: 3rem;
  font-weight: 500;
  display: block;
  background: #fe0000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: fixed;
  top: 1.5rem;
  right: 3rem;
  transition: all 1s linear 0s;
  cursor: pointer;

  &:hover {
    animation: tilt-n-move-shaking 0.3s;
    animation-iteration-count: infinite;
  }

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

  @media screen and (max-width: 960px) {
    font-size: 5.5vw;
    padding: 0.5rem;
    position: fixed;
    top: 1.5rem;
    right: 2rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 17px;
    top: 1rem;
    right: 1.5rem;
  }
`;

///// global /////
export const CaseContainer = styled.div`
  background: #faf8f6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: #fe0000;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }

  h2 {
    color: #010606;
    font-weight: 600;
    font-size: 4rem;
    line-height: 1.25;

    @media only screen and (max-width: 1920px) {
      font-size: 3rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 540px) {
      font-size: 7.45vw;
    }
  }

  h3 {
    color: #fe0000;
    font-weight: 100;
    font-size: 3rem;
    line-height: 1.3;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }

  p {
    color: #fe0000;
    font-weight: 100;
    font-size: 3rem;
    line-height: 1.2;

    @media only screen and (max-width: 1920px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 540px) {
      font-size: 4.44vw;
    }
  }
`;

export const CaseWrapper = styled.div`
  max-width: 2560px;
  margin: 0 30px 0 30px;
  overflow: hidden;

  @media only screen and (max-width: 960px) {
    margin: 0 15px 0 15px;
  }
`;

export const FullWidthContainer = styled.div`
  padding: 110px 0;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`;

export const FullWidthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FullWidthFlipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const ColumnLg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  :first-child {
    margin-top: 34px;
  }

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ColumnContentLg = styled.div`
  padding: 34px;

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    :first-child {
      margin-top: 60px;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
      :first-child {
        margin-top: 44px;
      }
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
      :first-child {
        margin-top: 34px;
      }
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
      :first-child {
        margin-top: 5vw;
      }
    }
  }
`;

export const ColumnSm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: auto;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ColumnContentSm = styled.div`
  width: 100%;
  padding: 34px;

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  h2 {
    font-size: 44px;
    color: #fe0000;

    @media only screen and (max-width: 1920px) {
      font-size: 2rem;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 540px) {
      font-size: 6.3vw;
    }
  }

  p {
    font-size: 34px;
    margin-top: 34px;

    @media only screen and (max-width: 1920px) {
      font-size: 1.5rem;
      margin-top: 24px;
    }
    @media only screen and (max-width: 1024px) {
      font-size: 1.35rem;
      margin-top: 16px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 4vw;
      margin-top: 5vw;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  border: solid 2px #fe0000;
  border-radius: 15px;

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
`;

export const ImageSm = styled.img`
  max-width: 80%;
  margin-top: 34px;
  border: solid 2px #fe0000;
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    max-width: 40%;
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    max-width: 60%;
    border-radius: 10px;
  }
`;

export const ImageCircle = styled.img`
  width: 100%;
  border: solid 2px #fe0000;
  border-radius: 50%;

  @media only screen and (max-width: 960px) {
    border: solid 1.5px #fe0000;
  }
`;

///// hero /////
export const HeroImageWrapper = styled.div`
  margin: 30px 0 60px 0;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 24px;
  }
  @media only screen and (max-width: 960px) {
    margin-top: 15px;
  }
  @media only screen and (max-width: 540px) {
    margin-bottom: 16px;
  }
`;

///// title /////
export const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TitleWrapper = styled.div`
  max-width: 1756px;
`;

export const TitleColumn = styled.div`
  // md sm center //
  width: 100%;

  // lg left //
  :first-child {
    @media (min-width: 1024px) {
      width: calc(100% - 290px);
      padding-right: 24px;
    }
  }
  // lg right //
  :last-child {
    @media (min-width: 1024px) {
      width: 290px;
    }
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 34px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 16px;
  }
  @media only screen and (max-width: 960px) {
    margin-bottom: 6px;
  }
`;

export const Tag = styled.div`
  width: fit-content;
  border-radius: 50px;
  background: #fe0000;
  margin: 0 16px 9px 0;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #faf8f6;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  @media only screen and (max-width: 540px) {
    margin: 0 9px 6px 0;
    padding: 4px 12px;

    p {
      font-size: 9px;
    }
  }
`;

export const CreditWrapper = styled.div`
  p {
    color: #fe0000;
    font-size: 18px;
    font-weight: 700;

    @media only screen and (max-width: 960px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 2.9vw;
    }
  }

  @media only screen and (max-width: 1024px) {
    margin-top: 34px;
    width: fit-content;
    margin-left: auto;
  }
  @media only screen and (max-width: 540px) {
    padding-bottom: 7.4vw;
  }
`;

export const CreditTitle = styled.p`
  margin-bottom: 24px;

  @media only screen and (max-width: 540px) {
    margin-bottom: 12px;
  }
`;

export const CreditBody = styled.p`
  margin-bottom: 6px;

  @media only screen and (max-width: 540px) {
    margin-bottom: 3px;
  }
`;

///// closing image /////
export const ClosingWrapper = styled.div`
  margin-bottom: 30px;
  padding-top: 110px;

  @media only screen and (max-width: 960px) {
    margin-bottom: 15px;
  }
`;
