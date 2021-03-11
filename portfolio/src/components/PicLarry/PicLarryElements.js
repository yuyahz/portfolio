import styled from "styled-components";

export const PicLarryContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    29deg,
    #2e3170 0%,
    #2e3170 50%,
    #ff8f3b 50%,
    #ff8f3b 100%
  );

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
  width: 45%;

  @media screen and (min-width: 1441px) {
    width: 35%;
  }

  @media screen and (max-width: 970px) {
    width: 50%;
  }

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    width: 35%;
  }

  @media screen and (max-width: 520px) {
    width: 65%;
  }
`;
