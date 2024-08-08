import styled from "styled-components";

///// hero alternative /////
export const CaseWrapper = styled.div`
  max-width: 2560px;
  margin: 180px 30px 0 30px;
  overflow: hidden;

  @media only screen and (max-width: 960px) {
    margin: 130px 15px 0 15px;
  }

  @media only screen and (max-width: 540px) {
    margin: 70px 15px 0 15px;
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
