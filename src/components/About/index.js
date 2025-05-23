import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import * as FadeIn from "../FadeIn";
import DropdownEducation from "../DropdownEducation";
import DropdownDiscipline from "../DropdownDiscipline";
import DropdownSoftware from "../DropdownSoftware";
import DropdownLanguage from "../DropdownLanguage";
import {
  AboutContainer,
  AboutWrapper,
  AboutTitleWrapper,
  AboutInnerWrapper,
  AboutImageWrapper,
  AboutDropdownWrapper,
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
        {/* <Parallax y={[10, -10]}> */}
        <FadeIn.Right>
          <AboutTitleWrapper>
            <div>
              <h2>A little about</h2>
              <h2 className="fancy-font"> ----- Me</h2>
            </div>
          </AboutTitleWrapper>
        </FadeIn.Right>
        <FadeIn.Left>
          <AboutImageWrapper>
            <AboutImage src={HeadShot} />
          </AboutImageWrapper>
        </FadeIn.Left>
        {/* </Parallax> */}
        {/* <Parallax y={[-5, 5]}> */}
        <FadeIn.Right>
          <AboutInnerWrapper>
            {/* <div>
              <h2 className="fancy-font">Yuya</h2>
              <h2>Hashirizaki</h2>
            </div> */}
            {/* <div>
              <h2>Vancouver-based</h2>
            </div> */}
            {/* <div>
              <h2>UI&nbsp;/&nbsp;UX</h2>
              <h2 className="fancy-font">designer</h2>
            </div> */}
            {/* <div className="end-cap">
              <h2>
                Vancouver-based
                <i className="fancy-title">UI&nbsp;/&nbsp;UX designer</i>
                Front-end &<i className="fancy-title">UI Developer</i>
                who excels in UX design and
                <i className="fancy-title">creative</i>problem-solving
              </h2>
            </div> */}
            {/* <div>
              <h2 className="fancy-font">Yuya</h2>
              <h2>Hashirizaki</h2>
            </div> */}

            {/* <span>
              <h2 className="fancy-font">Vancouver-based</h2>{" "}
            </span>
            <span>
              <h2>Product designer with</h2>
            </span>
            <span>
              <h2 className="fancy-font">Focus on UI Development</h2>
            </span>
            <span>
              <h2>and Exceptional UX Design</h2>
            </span>
            <span className="end-cap">
              <h2 className="fancy-font">
                who excels in UX design and creative problem-solving
              </h2>
            </span> */}
            <div>
              <h2>
                I <span className="fancy-font-title">design </span>
                solutions that address both&nbsp;
                <span className="fancy-font-title">aesthetics </span>and&nbsp;
                <span className="fancy-font-title">business challenges.</span>
              </h2>
            </div>

            <div className="end-cap start-cap">
              <h4>
                I'm not your conventional designer crafting attractive
                interfaces. As a Product Designer specializing in UX/UI, brand
                and digital design, I immerse myself in business complexities,
                developing efficient solutions that extend beyond aesthetics to
                create genuine change.
              </h4>
            </div>
            {/* <div className="end-cap start-cap">
              <h3>Beliefs</h3>
            </div>
            <div>
              <h4>
                Challenging the status quo and creating an inclusive experience
                through research and empathy.
              </h4>
            </div> */}
            <div className="end-cap start-cap">
              <h3>Expertise in UX design</h3>
            </div>
            <div>
              <h4>
                Quantitative and qualitative UX research and iterations are
                essential for shaping the customer base and ensuring that
                products are functional, visually appealing, and personalized to
                end-user needs. To facilitate this, I am committed to
                cultivating a supportive work culture built on strong
                communication and transparency across the entire team.
              </h4>
            </div>
            <div className="end-cap start-cap">
              <h3>Empathy in UI Design</h3>
            </div>
            <div>
              <h4>
                Designing with empathy is not easy, so I dedicate foundational
                steps in my human-centred design process to immerse myself in
                the user's world and craft solutions tailored to their genuine
                requirements.
              </h4>
            </div>
            <div className="end-cap start-cap">
              <h3>Commitment</h3>
            </div>
            <div className="end-cap">
              <h4>
                I am committed to approaching these elements with flexibility
                for every project and client. I deliver core user-centered
                solutions in
                <span className="fancy-font-title">
                  {" "}
                  "Design and Technology,
                </span>
                <span className="fancy-font-title">
                  {" "}
                  Branding and Websites,{" "}
                </span>
                <span className="fancy-font-title">
                  Simplicity and Sophistication"
                </span>
                &nbsp;that captivate customers.
              </h4>
            </div>
          </AboutInnerWrapper>
        </FadeIn.Right>

        <AboutDropdownWrapper>
          <FadeIn.Left>
            <DropdownEducation></DropdownEducation>
          </FadeIn.Left>
          <FadeIn.Left>
            <DropdownDiscipline></DropdownDiscipline>
          </FadeIn.Left>
          <FadeIn.Left>
            <DropdownSoftware></DropdownSoftware>
          </FadeIn.Left>
          <FadeIn.Left>
            <DropdownLanguage></DropdownLanguage>
          </FadeIn.Left>
        </AboutDropdownWrapper>
        {/* </Parallax> */}
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
