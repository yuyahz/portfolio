import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import * as FadeIn from "../FadeIn";
import {
  AboutContainer,
  AboutWrapper,
  AboutInnerWrapper,
  AboutImage,
  // Deco,
  // DecoOb,
  // ImageContent,
  // H1Content,
  // Image,
  // AboutH1,
  // PContent,
  // AboutP,
  // SkillsColumn,
  // SkillsWrapRight,
  // SkillsWrapLeft,
  // SkillsAbout,
  // SkillsSubAbout,
  // Skills,
  // Tools,
} from "./AboutElements";
import HeadShot from "../../images/headshot2023.png";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutWrapper>
        <Parallax y={[10, -10]}>
          <FadeIn.Up>
            <AboutImage src={HeadShot} />
          </FadeIn.Up>
        </Parallax>
        <Parallax y={[-5, 5]}>
          <FadeIn.Up>
            <AboutInnerWrapper>
              <div>
                <h2 className="fancy-font">Yuya</h2>
                <h2>Hashirizaki</h2>
              </div>
              <div>
                <h2>Vancouver-based</h2>
              </div>
              <div>
                <h2>UI / UX </h2>
                <h2 className="fancy-font">designer</h2>
              </div>
              <h4>
                challenging the status quo and creating an inclusive experience
                through research and empathy.
              </h4>
            </AboutInnerWrapper>
          </FadeIn.Up>
        </Parallax>
      </AboutWrapper>
    </AboutContainer>

    // Archive of 2021
    // <AboutContainer id="about">
    //   <AboutWrapper>
    //     <Deco>
    //       <DecoOb>
    //         <Parallax y={[-20, 20]} tagOuter="figure">
    //           Design
    //         </Parallax>
    //       </DecoOb>
    //       <DecoOb>
    //         <Parallax y={[30, -40]} tagOuter="figure">
    //           Coding
    //         </Parallax>
    //       </DecoOb>
    //     </Deco>
    //     <ImageContent>
    //       <FadeIn.Left>
    //         <Image src={HeadShot} />
    //       </FadeIn.Left>
    //     </ImageContent>
    //     <H1Content>
    //       <Parallax x={[0, 5]} tagOuter="figure">
    //         <AboutH1>
    //           Yuya Hashirizaki
    //           <AboutH1 className="br">Vancouver-based UI / UX designer</AboutH1>
    //         </AboutH1>
    //       </Parallax>
    //     </H1Content>
    //     <PContent>
    //       <Parallax x={[3, 0]} tagOuter="figure">
    //         <AboutP>
    //           challenging the status quo and creating an inclusive experience
    //           through research and empathy.
    //         </AboutP>
    //       </Parallax>
    //     </PContent>
    //     <FadeIn.Up>
    //       <SkillsColumn>
    //         <SkillsWrapRight>
    //           <SkillsAbout>Designer</SkillsAbout>
    //           <SkillsSubAbout>Things I enjoy designing</SkillsSubAbout>
    //           <Skills>UI, UX, Web, Apps, Logos, Branding</Skills>
    //           <SkillsSubAbout>Design Tools</SkillsSubAbout>
    //           <Tools>Illustrator</Tools>
    //           <Tools>Photoshop</Tools>
    //           <Tools>XD</Tools>
    //           <Tools>Figma</Tools>
    //           <Tools>Sketch</Tools>
    //           <Tools>InVision</Tools>
    //           <Tools>Wix</Tools>
    //           <Tools>Miro</Tools>
    //         </SkillsWrapRight>
    //         <SkillsWrapLeft>
    //           <SkillsAbout>Front-end Developer</SkillsAbout>
    //           <SkillsSubAbout>Languages I speak</SkillsSubAbout>
    //           <Skills>HTML, CSS, JS, React</Skills>
    //           <SkillsSubAbout>Developer Tools</SkillsSubAbout>
    //           <Tools>'Styled Component'</Tools>
    //           <Tools>'React Bootstrap'</Tools>
    //           <Tools>Materialize</Tools>
    //           <Tools>Bootstrap</Tools>
    //           <Tools>Wordpress</Tools>
    //           <Tools>Sass</Tools>
    //           <Tools>Terminal</Tools>
    //           <Tools>Github</Tools>
    //         </SkillsWrapLeft>
    //       </SkillsColumn>
    //     </FadeIn.Up>
    //   </AboutWrapper>
    // </AboutContainer>
  );
};

export default About;
