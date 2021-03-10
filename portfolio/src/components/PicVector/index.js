import React from "react";
import { Parallax } from "react-scroll-parallax";
import { PicVectorContainer, Image } from "./PicVectorElements";
import Vector from "../../images/Vector.png";

const PicVector = () => {
  return (
    <Parallax className="Container" id="larry" y={[-15, 15]} tagOuter="figure">
      <PicVectorContainer id="vector">
        <Image src={Vector} />
      </PicVectorContainer>
    </Parallax>
  );
};

export default PicVector;
