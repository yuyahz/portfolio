import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import * as FadeIn from "../FadeIn";
import {
  AboutParallaxContainer,
  AboutParallaxWrapper,
  AboutParallaxImage,
} from "./AboutParallaxElements";
import HeadShot from "../../images/headshot2023.png";

const AboutParallax = () => {
  return (
    <AboutParallaxContainer>
      <AboutParallaxWrapper>
        <FadeIn.Right>
          <AboutParallaxImage src={HeadShot} />
        </FadeIn.Right>
      </AboutParallaxWrapper>
    </AboutParallaxContainer>
  );
};

export default AboutParallax;
