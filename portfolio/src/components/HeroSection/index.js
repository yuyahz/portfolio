import React, { useState } from "react";
// import Video from '../../videos/video.mp4';
import { Button } from "../ButtonElements";
import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>
          I am Yuya Hashirizaki. I design & build digital products based in
          Vancouver.
        </HeroH1>
        <HeroP>
          I’m a passionate multi-talented human who comes from Japan with over
          6+ years of experiences in wider field of design disciplines.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-40}
            activeClass="active"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
