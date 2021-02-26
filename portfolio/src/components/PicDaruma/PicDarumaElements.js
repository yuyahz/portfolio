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

  @media screen and (max-width: 520px) {
    height: 70vh;
  }
`;

export const Image = styled.img`
  width: 38%;

  @media screen and (min-width: 1441px) {
    width: 33%;
  }

  @media screen and (max-width: 970px) {
    width: 60%;
  }

  @media screen and (max-width: 520px) {
    width: 70%;
  }
`;
