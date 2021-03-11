import styled from "styled-components";

export const PicVectorContainer = styled.div`
  height: 800px;
  background: #ffd96e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 970px) {
    height: 80vh;
  }

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    height: 100vh;
  }

  @media screen and (max-width: 520px) {
    height: 70vh;
  }
`;

export const Image = styled.img`
  width: 35%;

  @media screen and (min-width: 1441px) {
    width: 30%;
  }

  @media screen and (max-width: 970px) {
    width: 40%;
  }

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    width: 25%;
  }

  @media screen and (max-width: 520px) {
    width: 50%;
  }
`;
