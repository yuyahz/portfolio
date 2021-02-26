import styled from "styled-components";

export const Image = styled.img`
  width: 45%;
`;

export const PicDarumaContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #47a0ff;
  
  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;
