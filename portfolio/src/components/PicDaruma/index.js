import React from "react";
// import { Parallax } from "react-scroll-parallax";
import { PicDarumaContainer, Image } from "./PicDarumaElements";
import Daruma from "../../images/Daruma.png";

const PicDaruma = () => {
  return (
      <PicDarumaContainer id="daruma">
        <Image src={Daruma} />
      </PicDarumaContainer>
  );
};

export default PicDaruma;
