import React from "react";

import {
  DarumaContainer,
  DarumaIcon,
  DarumaH1,
  DarumaWrapper,
  DarumaCard,
  DarumaH2,
  DarumaP,
} from "./DarumaElements";

const Article_Daruma = () => {
  return (
    <DarumaContainer id="Daruma">
      <DarumaIcon to="/">Daruma</DarumaIcon>
      <DarumaH1>Our Daruma</DarumaH1>
      <DarumaWrapper>
        <DarumaCard>
          {/* <DarumaIcon src={Icon1} /> */}
          <DarumaH2>dummy Text</DarumaH2>
          <DarumaP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </DarumaP>
        </DarumaCard>
        <DarumaCard>
          {/* <DarumaIcon src={Icon2} /> */}
          <DarumaH2>dummy Text</DarumaH2>
          <DarumaP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </DarumaP>
        </DarumaCard>
        <DarumaCard>
          {/* <DarumaIcon src={Icon3} /> */}
          <DarumaH2>dummy Text</DarumaH2>
          <DarumaP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </DarumaP>
        </DarumaCard>
      </DarumaWrapper>
    </DarumaContainer>
  );
};

export default Article_Daruma;
