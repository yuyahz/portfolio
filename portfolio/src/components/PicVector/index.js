import React from "react";

import {
  PicVectorContainer,
  PicVectorH1,
  PicVectorWrapper,
  PicVectorCard,
  PicVectorH2,
  PicVectorP,
} from "./PicVectorElements";

const PicVector = () => {
  return (
    <PicVectorContainer id="vector">
      <PicVectorH1>Our PicVector</PicVectorH1>
      <PicVectorWrapper>
        <PicVectorCard>
          {/* <PicVectorIcon src={Icon1} /> */}
          <PicVectorH2>dummy Text</PicVectorH2>
          <PicVectorP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicVectorP>
        </PicVectorCard>
        <PicVectorCard>
          {/* <PicVectorIcon src={Icon2} /> */}
          <PicVectorH2>dummy Text</PicVectorH2>
          <PicVectorP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicVectorP>
        </PicVectorCard>
        <PicVectorCard>
          {/* <PicVectorIcon src={Icon3} /> */}
          <PicVectorH2>dummy Text</PicVectorH2>
          <PicVectorP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicVectorP>
        </PicVectorCard>
      </PicVectorWrapper>
    </PicVectorContainer>
  );
};

export default PicVector;
