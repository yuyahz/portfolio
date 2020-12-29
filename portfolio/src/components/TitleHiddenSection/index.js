import React, { useState } from "react";
import {
  TitleHide,
  TitleHiddenContainer,
  TitleHiddenContent,
  TitleHiddenH1,
  TitleHiddenP,
} from "./TitleHiddenElements";

const TitleHiddenSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <TitleHide>
      <TitleHiddenContainer>
        <TitleHiddenContent>
          <TitleHiddenH1></TitleHiddenH1>
          <TitleHiddenP></TitleHiddenP>
        </TitleHiddenContent>
      </TitleHiddenContainer>
    </TitleHide>
  );
};

export default TitleHiddenSection;
