import styled from "styled-components";

///// intro /////
export const IntroContainer = styled.div`
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

export const IntroWrapper = styled.div`
  max-width: 1140px;

  div {
    margin-top: 100px;

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
    }
  }
`;

///// research /////
export const ResearchInsight = styled.div`
  width: 50%;

  div .text-bold {
    margin-top: 0px;
    color: var(--secondary-txt-color);
    font-weight: 600;

    @media (max-width: 540px) {
      margin-top: 16px;
    }
  }

  p {
    :first-child {
      margin-top: 0px;
      /* 
      @media (max-width: 540px) {
        margin-top: 16px;
      } */
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

///// box /////
export const BoxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .box {
    display: flex;
    justify-content: center;
    vertical-align: auto;

    // md sm center //
    width: 100%;

    // lg //
    @media (min-width: 1024px) {
      width: 50%;
    }
  }
  .box-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      :first-child {
        margin-top: 0;
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`;

///// content title /////
export const ContentTitleContainer = styled.div`
  padding-top: 110px;

  /* @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  } */
  /* @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  } */
`;

export const ContentTitleWrapper = styled.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--secondary-txt-color);
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 7.656vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`;

///// content info /////
export const ContentInfoContainer = styled.div`
  max-width: 1400px;
  padding: 44px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding: 34px 0 11.5vw 0;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 6px;
  }

  .caption {
    color: var(--secondary-txt-color);
    font-weight: 600;
  }

  .caption-inner {
    color: var(--secondary-txt-color);
    font-weight: 500;
  }

  .list {
    padding-left: 2.2em;
    text-indent: -2.2em;

    @media only screen and (max-width: 1920px) {
      padding-left: 1.5em;
      text-indent: -1.5em;
    }
    @media only screen and (max-width: 1024px) {
      padding-left: 1.2em;
      text-indent: -1.2em;
      @media only screen and (max-width: 540px) {
        padding-left: 1em;
        text-indent: -1em;
      }
      @media only screen and (max-width: 400px) {
        padding-left: 0.8em;
        text-indent: -0.8em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.75em;
        text-indent: -0.75em;
      }
      @media only screen and (max-width: 330px) {
        padding-left: 0.6em;
        text-indent: -0.6em;
      }
    }

    p:first-child {
      margin-top: 0.5em;
    }

    p:not(:first-child) {
      margin-top: 6px;
    }
  }
`;

///// insert image /////
export const InsertImageContainer = styled.div`
  max-width: 1400px;
  padding: 110px 0;
  justify-content: center;
  margin: 0 auto;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`;

export const InsertImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;
