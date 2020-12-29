import React, { useState } from "react";
// import Video from '../../videos/video.mp4';
// import { Button } from "../ButtonElements";
import {
  TitleContainer,
  TitleBg,
  // VideoBg,
  TitleContent,
  TitleH1,
  TitleP,
  TitleBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./TitleElements";

const TitleSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <TitleContainer id="home">
      <TitleBg>
        {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
      </TitleBg>
      <TitleContent>
        <TitleH1>I am Yuya Hashirizaki.</TitleH1>
        <TitleH1>I design & build digital products based in Vancouver.</TitleH1>
        <TitleP>
          I’m a passionate multi-talented human who comes from Japan with over
          6+ years of experiences in wider field of design disciplines.
        </TitleP>
        {/* <TitleBtnWrapper>
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
        </TitleBtnWrapper> */}
      </TitleContent>
    </TitleContainer>
  );
};

export default TitleSection;
