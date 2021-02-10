import React from "react";

import {
  PicDarumaContainer,
  PicDarumaH1,
  PicDarumaWrapper,
  PicDarumaCard,
  PicDarumaH2,
  PicDarumaP,
} from "./PicDarumaElements";

const PicDaruma = () => {
  return (
    <PicDarumaContainer id="dailyUi">
      <PicDarumaH1>Our PicDaruma</PicDarumaH1>
      <PicDarumaWrapper>
        <PicDarumaCard>
          <PicDarumaH2>dummy Text</PicDarumaH2>
          <PicDarumaP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicDarumaP>
        </PicDarumaCard>
        <PicDarumaCard>
          <PicDarumaH2>dummy Text</PicDarumaH2>
          <PicDarumaP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicDarumaP>
        </PicDarumaCard>
        <PicDarumaCard>
          <PicDarumaH2>dummy Text</PicDarumaH2>
          <PicDarumaP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicDarumaP>
        </PicDarumaCard>
      </PicDarumaWrapper>
    </PicDarumaContainer>
  );
};

export default PicDaruma;
