import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
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
import HeadShot2 from "../../images/HeadShot2.png";

const TitleSection = () => {
  return (
    <TitleContainer>
      <TitleContent>
        <ImageContent>
          <FadeIn.Left>
            <Image src={HeadShot2} id="about" />
          </FadeIn.Left>
        </ImageContent>
        <H1Content>
          {/* <FadeIn.Right> */}
          <Parallax x={[-10, 10]} tagOuter="figure">
            <TitleH1>
              I am Yuya Hashirizaki
              {/* <FadeIn.Right> */}
              <TitleH1 className="br">
                design & build digital products based in Vancouver
              </TitleH1>
              {/* </FadeIn.Right> */}
            </TitleH1>
          </Parallax>
          {/* </FadeIn.Right> */}
        </H1Content>
        <PContent>
          {/* <FadeIn.Right> */}
          <Parallax x={[5, -10]} tagOuter="figure">
            <TitleP>
              I’m a passionate multi-talented human who comes from Japan with
              over 6+ years of experiences in wider field of design disciplines.
            </TitleP>
          </Parallax>
          {/* </FadeIn.Right> */}
        </PContent>
      </TitleContent>
    </TitleContainer>
  );
};

export default TitleSection;
