import React, { useState } from "react";
import {
  OpeningContainer,
  OpeningContent,
  OpeningH1,
  OpeningP,
} from "./OpeningElements";

const OpeningSection = () => {

  return (
    <OpeningContainer id="home">
      <OpeningContent>
        <OpeningH1>I am Yuya Hashirizaki.</OpeningH1>
        <OpeningH1>
          I design & build digital products based in Vancouver.
        </OpeningH1>
        <OpeningP>
          I’m a passionate multi-talented human who comes from Japan with over
          6+ years of experiences in wider field of design disciplines.
        </OpeningP>
      </OpeningContent>
    </OpeningContainer>
  );
};

export default OpeningSection;
