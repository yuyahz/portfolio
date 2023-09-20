import styled from "styled-components";

export const CaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #faf8f6;
`;

export const CaseWrapper = styled.div`
  max-width: 2560px;
  margin: 0 30px 0 130px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ imageLeft }) => (imageLeft ? "none" : "row-reverse")};
  padding-top: ${({ paddingStart }) => (paddingStart ? "17rem" : "4rem")};
  padding-bottom: ${({ paddingEnd }) => (paddingEnd ? "17rem" : "4rem")};

  @media only screen and (max-width: 960px) {
    padding-top: ${({ paddingStart }) => (paddingStart ? "26.33vw;" : "3rem")};
    padding-bottom: ${({ paddingEnd }) => (paddingEnd ? "26.33vw;" : "3rem")};
  }

  @media only screen and (max-width: 1280px) {
    margin: 0 30px 0 110px;
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px 0 30px;
  }
`;

export const CaseContentsImg = styled.div`
  width: 100%;
  padding-left: ${({ imageSpaceLeft }) => (imageSpaceLeft ? "5vw" : "0")};
  padding-right: ${({ imageSpaceRight }) => (imageSpaceRight ? "5vw" : "0")};

  @media only screen and (max-width: 960px) {
    padding-left: 0;
    padding-right: 0;
  }

  @media only screen and (min-width: 960px) {
    width: 50%;
  }
`;

export const CaseContentsTxt = styled.div`
  width: 100%;
  padding: 0 1.5vw;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fe0000;
    font-weight: 700;
    font-size: 7rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    margin-bottom: 1rem;

    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }

  p {
    color: #fe0000;
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }

  @media only screen and (min-width: 960px) {
    width: 50%;
  }
`;

export const CaseImage = styled.img`
  width: 100%;
  border: solid 2px #fe0000;
  border-radius: 15px;
`;
