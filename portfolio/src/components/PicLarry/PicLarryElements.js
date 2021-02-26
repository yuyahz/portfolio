import styled from "styled-components";

export const Image = styled.img`
  width: 45%;
`;

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
  
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
