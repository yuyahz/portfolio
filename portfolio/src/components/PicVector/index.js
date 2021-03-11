import React from "react";
// import { Parallax } from "react-scroll-parallax";
import { PicVectorContainer, Image } from "./PicVectorElements";
import Vector from "../../images/Vector.png";

const PicVector = () => {
  return (
    <PicVectorContainer id="vector">
      <Image src={Vector} />
    </PicVectorContainer>
  );
};

export default PicVector;
