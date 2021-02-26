import styled from "styled-components";

export const PicLarryContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    29deg,
    #181c4c 0%,
    #181c4c 50%,
    #f37a1f 50%,
    #f37a1f 100%
  );

  @media screen and (max-width: 480px) {
    height: 1300px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 540px) {
    height: 100vh;
  }
`;

export const Image = styled.img`
  width: 50%;

  /* @media screen and (min-width: 1440px) {
    min-width: 1440px;
  } */
  }
  `;
