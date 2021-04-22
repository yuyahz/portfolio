import React from "react";
// import { Parallax } from "react-scroll-parallax";
import { PicLarryContainer, Image } from "./PicLarryElements";
import Larry from "../../images/Larry.png";

const PicLarry = () => {
  return (
      <PicLarryContainer id="larry">
        <Image src={Larry} />
      </PicLarryContainer>
  );
};

export default PicLarry;
