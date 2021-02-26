import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PicVectorContainer, Image } from "./PicVectorElements";
import Vector from "../../images/Vector.png";

const PicVector = () => {
  return (
    <PicVectorContainer id="vector">
      {/* <Parallax y={[-40, 40]} tagOuter="figure"> */}
        <Image src={Vector} />
      {/* </Parallax> */}
    </PicVectorContainer>
  );
};

export default PicVector;
