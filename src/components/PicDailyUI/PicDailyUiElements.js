import styled from "styled-components";

export const PicDailyUiContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ea4c89 center top/cover no-repeat;
`;

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;
