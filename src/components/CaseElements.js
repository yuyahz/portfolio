import styled from "styled-components";
import { Link } from "react-router-dom";

///// home button /////
export const HomeIconWrapper = styled.div`
  position: relative;
  z-index: 999;
`;

export const HomeIcon = styled(Link)`
  text-decoration: none;
  font-family: GT;
  font-size: 3rem;
  font-weight: 500;
  display: block;
  background-color: var(--secondary-bg);
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
  background: var(--primaly-bg);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  h1 {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.1;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }

  h2 {
    color: var(--secondary-txt-color);
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
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;
    line-height: 1.3;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }

  p {
    color: var(--primary-txt-color);
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

export const FullWidthImageContainer = styled.div`
  padding: 110px 0;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding: 0 0 11.5vw 0;
  }
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`;

export const FullWidthWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FullWidthSmWrapper = styled.div`
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
`;

export const FullWidthFlipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

export const SingleColumnContainer = styled.div`
  padding: 110px 0;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`;

export const SingleColumnWrapper = styled.div`
  max-width: 1400px;

  div {
    /* margin-top: 100px;

    :first-child {
      margin-top: 0px;
    }

    @media only screen and (max-width: 1024px) {
      margin-top: 7.8vw;
    }
    @media only screen and (max-width: 960px) {
      margin-top: 7.3vw;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 6.3vw;
    } */
  }
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

  .feedback {
    margin-bottom: 60px;

    @media only screen and (max-width: 540px) {
      margin-bottom: 34px;
    }
  }

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

export const ColumnContentLgMd = styled.div`
  padding: 34px;

  @media only screen and (max-width: 1024px) {
    padding: 34px 34px 0 34px;
  }

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

export const ColumnContentLgTxt = styled.div`
  max-width: 1140px;
  padding: 34px;
  margin: auto;

  @media only screen and (max-width: 540px) {
    padding: 7.2vw 6.3vw 0 6.3vw;
  }

  p {
    margin-top: 44px;
    :first-child {
      margin-top: 0;
    }

    @media only screen and (max-width: 1920px) {
      margin-top: 34px;
    }
    @media only screen and (max-width: 1024px) {
      margin-top: 24px;
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
    }
  }
`;

export const ColumnContentMd = styled.div`
  padding: 34px;

  @media only screen and (max-width: 1024px) {
    padding: 0 34px 34px 34px;
  }

  @media only screen and (max-width: 540px) {
    padding: 0 6.3vw 0 6.3vw;
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
        margin-top: 24px !important;
      }
    }
    @media only screen and (max-width: 540px) {
      margin-top: 5.5vw;
      :first-child {
        margin-top: 5.5vw;
      }
    }
  }
`;

export const ColumnInsertContent = styled.div`
  padding: 34px;

  @media only screen and (max-width: 1920px) {
    max-width: 860px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 960px) {
    max-width: 540px;
    margin: 0 auto;
  }

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
    color: var(--primary-txt-color);

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

export const ColumnImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: auto;
  padding: 0 6px;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 1024px) {
    padding: 0.88vw 0;
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
  background-color: var(--secondary-bg);
  margin: 0 16px 9px 0;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: var(--primaly-bg);
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
    color: var(--primary-txt-color);
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

export const Image = styled.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  margin-bottom: auto;

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    border: solid 0.5px var(--secondary-bg);
    border-radius: 6px;
  }
`;

export const ImageCs = styled.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  margin-bottom: auto;

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 767px) {
    min-height: 270px;
    object-fit: cover;
  }
  @media only screen and (max-width: 540px) {
    border: solid 0.5px var(--secondary-bg);
    border-radius: 6px;
  }
`;

export const ImageSm = styled.img`
  max-width: 80%;
  margin-top: 34px;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    max-width: 40%;
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }
  @media only screen and (max-width: 540px) {
    max-width: 60%;
    border: solid 0.5px var(--secondary-bg);
    border-radius: 10px;
  }
`;

export const ImageCircle = styled.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 50%;

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 540px) {
    border: solid 0.5px var(--secondary-bg);
  }
`;

export const ImageCircleFb = styled.img`
  width: clamp(45px, 20%, 130px);
  margin-bottom: 1.45vw;
  border-radius: 50%;
  border: solid 2px var(--secondary-bg);

  @media only screen and (max-width: 1024px) {
    border: solid 1px var(--secondary-bg);
  }
  @media only screen and (max-width: 540px) {
    border: solid 0.5px var(--secondary-bg);
  }
`;

export const ImageNoBorder = styled.img`
  width: 100%;
  border-radius: 50%;
`;

///// closing image /////
export const ClosingWrapper = styled.div`
  margin-bottom: 30px;
  padding-top: 110px;

  @media only screen and (max-width: 960px) {
    margin-bottom: 15px;
  }
`;

///// video /////
export const Video = styled.video`
  max-width: 960px;
  display: block;
  line-height: 100%;
  width: 100%;
  object-fit: fit;
  /* border: solid 2px var(--secondary-bg);
  border-radius: 15px; */

  @media only screen and (max-width: 1024px) {
    max-height: 800px;
  }
`;

///// video bottom /////
export const VideoBottom = styled.video`
  display: block;
  line-height: 100%;
  width: 100%;
  object-fit: fit;
  /* border: solid 2px var(--secondary-bg);
  border-radius: 15px; */

  @media only screen and (max-width: 1024px) {
    max-height: 300px;
    padding-top: 3rem;
  }
`;

///// captions /////
export const Captions = styled.div`
  max-width: 1400px;
  margin: auto;

  p {
    color: var(--secondary-txt-color);
    font-weight: 100;
    font-size: 1rem;
    line-height: 1.2;
    margin-top: 0px;
    text-align: center;
    padding: 16px 0 84px 0;

    @media only screen and (max-width: 540px) {
      padding: 6px 0 6.3vw 0;
      font-size: 2.96vw;
    }
  }

  .lastCaption {
    padding-bottom: 0;
  }
`;

///// hide /////
export const Hide = styled.div`
  filter: blur(1.5rem);
  padding: 5%;
`;
