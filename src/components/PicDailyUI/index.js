import React from "react";
import { PicDailyUiContainer, Image } from "./PicDailyUiElements";
import UI from "../../images/UI.png";

const PicDailyUi = () => {
  return (
    <PicDailyUiContainer id="ui-pic">
      <Image src={UI} />
    </PicDailyUiContainer>
  );
};

export default PicDailyUi;
