import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PicDailyUiContainer, Image } from "./PicDailyUiElements";
import UI from "../../images/UI.png";

const PicDailyUi = () => {
  return (
    <Parallax className="Container" id="larry" y={[-15, 15]} tagOuter="figure">
      <PicDailyUiContainer id="dailyUi">
        <Image src={UI} />
      </PicDailyUiContainer>
    </Parallax>
  );
};

export default PicDailyUi;
