import React, { useState } from "react";
import {
  TitleContainer,
  TitleContent,
  ImageContent,
  H1Content,
  TitleH1,
  TitleP,
  Image,
} from "./TitleElements";
import HeadShot from "../../images/HeadShot.png";

const TitleSection = () => {
  return (
    <TitleContainer id="home">
      <TitleContent>
        <ImageContent>
          <Image src={HeadShot} />
        </ImageContent>
        <H1Content>
          <TitleH1>
            I am Yuya Hashirizaki
            <TitleH1 className="br">
              design & build digital products based in Vancouver
            </TitleH1>
          </TitleH1>
        </H1Content>
        <TitleP>
            I’m a passionate multi-talented human who comes from Japan with over
            6+ years of experiences in wider field of design disciplines
        </TitleP>
      </TitleContent>
    </TitleContainer>
  );
};

export default TitleSection;
