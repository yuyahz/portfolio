import styled from "styled-components";

export const PicDarumaContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #47a0ff;
`;

export const Image = styled.img`
  width: 38%;

  @media screen and (min-width: 1441px) {
    width: 20%;
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
