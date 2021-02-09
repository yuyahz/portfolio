import React from "react";

import {
  LarryContainer,
  LarryIcon,
  LarryH1,
  LarryWrapper,
  LarryCard,
  LarryH2,
  LarryP,
} from "./LarryElements";

const Article_Larry = () => {
  return (
    <LarryContainer id="Larry">
      <LarryIcon to="/">Larry</LarryIcon>
      <LarryH1>Our Larry</LarryH1>
      <LarryWrapper>
        <LarryCard>
          {/* <LarryIcon src={Icon1} /> */}
          <LarryH2>dummy Text</LarryH2>
          <LarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </LarryP>
        </LarryCard>
        <LarryCard>
          {/* <LarryIcon src={Icon2} /> */}
          <LarryH2>dummy Text</LarryH2>
          <LarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </LarryP>
        </LarryCard>
        <LarryCard>
          {/* <LarryIcon src={Icon3} /> */}
          <LarryH2>dummy Text</LarryH2>
          <LarryP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </LarryP>
        </LarryCard>
      </LarryWrapper>
    </LarryContainer>
  );
};

export default Article_Larry;
