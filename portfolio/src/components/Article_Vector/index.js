import React from "react";

import {
  VectorContainer,
  VectorIcon,
  VectorH1,
  VectorWrapper,
  VectorCard,
  VectorH2,
  VectorP,
} from "./VectorElements";

const Article_Vector = () => {
  return (
    <VectorContainer id="Vector">
      <VectorIcon to="/">Vector</VectorIcon>
      <VectorH1>Our Vector</VectorH1>
      <VectorWrapper>
        <VectorCard>
          {/* <VectorIcon src={Icon1} /> */}
          <VectorH2>dummy Text</VectorH2>
          <VectorP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </VectorP>
        </VectorCard>
        <VectorCard>
          {/* <VectorIcon src={Icon2} /> */}
          <VectorH2>dummy Text</VectorH2>
          <VectorP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </VectorP>
        </VectorCard>
        <VectorCard>
          {/* <VectorIcon src={Icon3} /> */}
          <VectorH2>dummy Text</VectorH2>
          <VectorP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </VectorP>
        </VectorCard>
      </VectorWrapper>
    </VectorContainer>
  );
};

export default Article_Vector;