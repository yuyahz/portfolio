import styled from "styled-components";

export const TitleHide = styled.div`
-moz-animation: cssAnimation 0s ease-in 5s forwards;
/* Firefox */
-webkit-animation: cssAnimation 0s ease-in 5s forwards;
/* Safari and Chrome */
-o-animation: cssAnimation 0s ease-in 5s forwards;
/* Opera */
animation: cssAnimation 0s ease-in 5s forwards;
-webkit-animation-fill-mode: forwards;
animation-fill-mode: forwards;

@keyframes cssAnimation {
to {
  width: 0;
  height: 0;
  overflow: hidden;
}
}
@-webkit-keyframes cssAnimation {
to {
  width: 0;
  height: 0;
  visibility: hidden;
}
}
`;

export const TitleHiddenContainer = styled.div`
  background: rgb(42, 42, 42);
  background: linear-gradient(
    180deg,
    rgba(42, 42, 42, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  justify-content: center;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const TitleHiddenContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleHiddenH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const TitleHiddenP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;