import React from "react";

import {
  PicDailyUiContainer,
  PicDailyUiH1,
  PicDailyUiWrapper,
  PicDailyUiCard,
  PicDailyUiH2,
  PicDailyUiP,
} from "./PicDailyUiElements";

const PicDailyUi = () => {
  return (
    <PicDailyUiContainer id="dailyUi">
      <PicDailyUiH1>Our PicDailyUi</PicDailyUiH1>
      <PicDailyUiWrapper>
        <PicDailyUiCard>
          {/* <PicDailyUiIcon src={Icon1} /> */}
          <PicDailyUiH2>dummy Text</PicDailyUiH2>
          <PicDailyUiP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicDailyUiP>
        </PicDailyUiCard>
        <PicDailyUiCard>
          {/* <PicDailyUiIcon src={Icon2} /> */}
          <PicDailyUiH2>dummy Text</PicDailyUiH2>
          <PicDailyUiP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicDailyUiP>
        </PicDailyUiCard>
        <PicDailyUiCard>
          {/* <PicDailyUiIcon src={Icon3} /> */}
          <PicDailyUiH2>dummy Text</PicDailyUiH2>
          <PicDailyUiP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </PicDailyUiP>
        </PicDailyUiCard>
      </PicDailyUiWrapper>
    </PicDailyUiContainer>
  );
};

export default PicDailyUi;
