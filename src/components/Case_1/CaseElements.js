import styled from "styled-components";

export const CaseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #faf8f6;
`;

export const CaseWrapper = styled.div`
  /* max-width: 1140px; */
  padding: 17rem 0;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1280px) {
    margin: 0 30px 0 110px;
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px 0 30px;
    padding: 26.33vw 0;
  }
`;

export const CaseContentsR = styled.div`
  width: 100%;

  h1 {
    font-size: 100px;
  }

  @media only screen and (min-width: 960px) {
    width: 50%;
  }
`;

export const CaseContentsL = styled.div`
  width: 100%;

  h1 {
    font-size: 100px;
  }

  @media only screen and (min-width: 960px) {
    width: 50%;
  }
`;

export const CaseImage = styled.img`
  width: 100%;
`;
