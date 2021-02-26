import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PicDarumaContainer, Image } from "./PicDarumaElements";
import Daruma from "../../images/Daruma.png";

const PicDaruma = () => {
  return (
    <PicDarumaContainer id="daruma">
      {/* <Parallax y={[-40, 40]} tagOuter="figure"> */}
        <Image src={Daruma} />
      {/* </Parallax> */}
    </PicDarumaContainer>
  );
};

export default PicDaruma;