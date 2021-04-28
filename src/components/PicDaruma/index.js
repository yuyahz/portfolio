import React from "react";
// import { Parallax } from "react-scroll-parallax";
import { PicDarumaContainer, Image } from "./PicDarumaElements";
import Daruma from "../../images/Daruma.png";

const PicDaruma = () => {
  return (
      <PicDarumaContainer>
        <Image src={Daruma} />
      </PicDarumaContainer>
  );
};

export default PicDaruma;
