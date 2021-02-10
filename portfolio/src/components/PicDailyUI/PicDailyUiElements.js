import styled from "styled-components";

export const PicDailyUiContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2dbe1 center top/cover no-repeat;

  /* @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  } */
`;

export const Image = styled.img`
  min-width: 100%;
  max-height: 800px;

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
  }
`;
