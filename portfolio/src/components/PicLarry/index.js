import React from "react";

import {
  PicLarryContainer,
  PicLarryH1,
  PicLarryWrapper,
  PicLarryCard,
  PicLarryH2,
  PicLarryP,
} from "./PicLarryElements";

const PicLarry = () => {
  return (
    <PicLarryContainer id="larry">
      <PicLarryH1>Our PicLarry</PicLarryH1>
      <PicLarryWrapper>
        <PicLarryCard>
          {/* <PicLarryIcon src={Icon1} /> */}
          <PicLarryH2>dummy Text</PicLarryH2>
          <PicLarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicLarryP>
        </PicLarryCard>
        <PicLarryCard>
          {/* <PicLarryIcon src={Icon2} /> */}
          <PicLarryH2>dummy Text</PicLarryH2>
          <PicLarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicLarryP>
        </PicLarryCard>
        <PicLarryCard>
          {/* <PicLarryIcon src={Icon3} /> */}
          <PicLarryH2>dummy Text</PicLarryH2>
          <PicLarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicLarryP>
        </PicLarryCard>
      </PicLarryWrapper>
    </PicLarryContainer>
  );
};

export default PicLarry;
