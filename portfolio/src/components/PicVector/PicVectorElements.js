import styled from "styled-components";

export const Image = styled.img`
  width: 35%;
`;

export const PicVectorContainer = styled.div`
  height: 800px;
  background: #ffd96e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;