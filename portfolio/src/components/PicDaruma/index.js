import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PicDarumaContainer, Image } from "./PicDarumaElements";
import Daruma from "../../images/Daruma.png";

const PicDaruma = () => {
  return (
    <Parallax className="Container" id="larry" y={[-15, 15]} tagOuter="figure">
      <PicDarumaContainer id="daruma">
        <Image src={Daruma} />
      </PicDarumaContainer>
    </Parallax>
  );
};

export default PicDaruma;
