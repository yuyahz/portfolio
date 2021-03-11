import styled from "styled-components";

export const PicDarumaContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #47a0ff;

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
  width: 38%;

  @media screen and (min-width: 1441px) {
    width: 35%;
  }

  @media screen and (max-width: 970px) {
    width: 45%;
  }

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    width: 30%;
  }

  @media screen and (max-width: 520px) {
    width: 55%;
  }
`;
