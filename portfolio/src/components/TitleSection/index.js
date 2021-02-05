import React, { useState } from "react";
import * as FadeIn from "../FadeIn";
import {
  TitleContainer,
  TitleContent,
  ImageContent,
  H1Content,
  TitleH1,
  PContent,
  TitleP,
  Image,
} from "./TitleElements";
import HeadShot from "../../images/HeadShot.png";

const TitleSection = () => {
  return (
    <TitleContainer id="about">
      <TitleContent>
        <ImageContent>
          <FadeIn.Left>
            <Image src={HeadShot} />
          </FadeIn.Left>
        </ImageContent>
        <H1Content>
          <FadeIn.Right>
            <TitleH1>
              I am Yuya Hashirizaki
              <FadeIn.Right>
                <TitleH1 className="br">
                  design & build digital products based in Vancouver
                </TitleH1>
              </FadeIn.Right>
            </TitleH1>
          </FadeIn.Right>
        </H1Content>
        <PContent>
          <FadeIn.Right>
            <TitleP>
              I’m a passionate multi-talented human who comes from Japan with
              over 6+ years of experiences in wider field of design disciplines.
            </TitleP>
          </FadeIn.Right>
        </PContent>
      </TitleContent>
    </TitleContainer>
  );
};

export default TitleSection;
