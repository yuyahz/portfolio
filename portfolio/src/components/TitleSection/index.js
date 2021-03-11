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
  SkillsColumn,
  SkillsWrapRight,
  SkillsWrapLeft,
  SkillsTitle,
  SkillsSubTitle,
  Skills,
  Tools,
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
          <Parallax x={[-10, 5]} tagOuter="figure">
            <TitleH1>
              I am Yuya Hashirizaki
              <TitleH1 className="br">
                design & build digital products based in Vancouver
              </TitleH1>
            </TitleH1>
          </Parallax>
        </H1Content>
        <PContent>
          <Parallax x={[5, -10]} tagOuter="figure">
            <TitleP>
              I’m a passionate multi-talented human who comes from Japan with
              over 6+ years of experiences in wider field of design disciplines.
            </TitleP>
          </Parallax>
        </PContent>
        <FadeIn.Up>
          <SkillsColumn>
            <SkillsWrapRight>
              <SkillsTitle>Designer</SkillsTitle>
              <SkillsSubTitle>Things I enjoy designing</SkillsSubTitle>
              <Skills>UI, UX, Web, Apps, Logos, Branding</Skills>
              <SkillsSubTitle>Design Tools</SkillsSubTitle>
              <Tools>Illustrator</Tools>
              <Tools>Photoshop</Tools>
              <Tools>XD</Tools>
              <Tools>Figma</Tools>
              <Tools>Sketch</Tools>
              <Tools>InVision</Tools>
              <Tools>Wix</Tools>
              <Tools>Miro</Tools>
            </SkillsWrapRight>
            <SkillsWrapLeft>
              <SkillsTitle>Front-end Developer</SkillsTitle>
              <SkillsSubTitle>Languages I speak</SkillsSubTitle>
              <Skills>HTML, CSS, JS, React</Skills>
              <SkillsSubTitle>Developer Tools</SkillsSubTitle>
              <Tools>'Styled Component'</Tools>
              <Tools>'React Bootstrap'</Tools>
              <Tools>Materialize</Tools>
              <Tools>Bootstrap</Tools>
              <Tools>Wordpress</Tools>
              <Tools>Sass</Tools>
              <Tools>Terminal</Tools>
              <Tools>Github</Tools>
            </SkillsWrapLeft>
          </SkillsColumn>
        </FadeIn.Up>
      </TitleContent>
    </TitleContainer>
  );
};

export default TitleSection;
