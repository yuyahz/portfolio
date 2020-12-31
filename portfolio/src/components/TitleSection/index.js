import React, { useState } from "react";
import { TitleContainer, TitleContent, TitleH1, TitleP } from "./TitleElements";

const TitleSection = () => {
  return (
    <TitleContainer id="home">
      <TitleContent>
        <TitleH1>I am Yuya Hashirizaki.</TitleH1>
        <TitleH1>I design & build digital products based in Vancouver.</TitleH1>
        <TitleP>
          I’m a passionate multi-talented human who comes from Japan with over
          6+ years of experiences in wider field of design disciplines.
        </TitleP>
      </TitleContent>
    </TitleContainer>
  );
};

export default TitleSection;
