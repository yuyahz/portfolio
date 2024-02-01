import styled from "styled-components";

///// hero /////
export const HeroImage = styled.img`
  max-width: 50%;
  margin: auto;
  padding: 10rem 0 5rem 0;
  display: block;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    padding: 16vw 0 8vw 0;
  }
`;

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
