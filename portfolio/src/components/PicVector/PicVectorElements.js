import styled from "styled-components";

export const PicVectorContainer = styled.div`
  height: 100vh;
  background: #ffd96e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 35%;

  @media screen and (min-width: 1441px) {
    width: 20%;
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
