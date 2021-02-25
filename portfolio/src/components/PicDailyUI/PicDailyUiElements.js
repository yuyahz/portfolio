import styled from "styled-components";

export const PicDailyUiContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2dbe1 center top/cover no-repeat;
`;

export const Image = styled.img`
  min-width: 100%;
  max-height: 800px;

  @media screen and (min-width: 1440px) {
    min-width: 1440px;
  }
`;
