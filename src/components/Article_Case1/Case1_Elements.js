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

    &:first-child {
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

  p {
    &:first-child {
      margin-top: 0px;
      color: var(--secondary-txt-color);
      font-weight: 600;

      @media (max-width: 540px) {
        margin-top: 16px;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

///// persoan /////
export const PersonaContainer = styled.div`
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

export const PersonaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    :last-child {
      flex-direction: column-reverse;
    }
  }
`;

///// empathy /////
export const EmpathyContainer = styled.div`
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

export const EmpathyWrapper = styled.div`
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
  .empathy-border {
    padding: 24px;
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

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

    p {
      margin-top: 16px;
      padding-left: 0.7em;
      text-indent: -0.7em;

      &:first-child {
        margin-top: 0;
        color: var(--secondary-txt-color);
        font-weight: 600;
      }
    }
  }
`;

///// competitor /////
export const CompetitorContainer = styled.div`
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

  .analysis-lists {
    padding-left: 0.7em;
    text-indent: -0.7em;

    p:not(&:first-child) {
      margin-top: 6px;
    }
  }
`;

export const CompetitorImageWrapper = styled.div`
  display: flex;
  padding: 0 5%;
  margin-top: 44px;

  @media only screen and (max-width: 1920px) {
    margin-top: 34px;
  }
  @media only screen and (max-width: 1024px) {
    margin-top: 24px;
  }
  @media only screen and (max-width: 540px) {
    margin-top: 5.5vw;
  }

  .image {
    width: 17%;
    margin-right: auto;

    :last-child {
      margin-right: 0px;
    }
  }
`;

///// insert /////
export const InsertContainer = styled.div`
  padding: 110px 0;

  @media only screen and (max-width: 960px) {
    padding-bottom: 11.5vw;
  }
  @media only screen and (max-width: 540px) {
    padding-top: 7.4vw;
  }
`;

export const InsertWrapper = styled.div`
  max-width: 1756px;

  span {
    font-size: 7rem;
    font-weight: 100;
    line-height: 1.2;
    color: var(--primary-txt-color);
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
