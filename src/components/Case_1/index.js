import React from "react";
import {
  CaseContainer,
  CaseWrapper,
  CaseContentsR,
  CaseContentsL,
  CaseImage,
} from "./CaseElements";
import HeadShot from "../../images/headshot2023.png";

const Case_1 = () => {
  return (
    <CaseContainer id="case-1">
      <CaseWrapper>
        <CaseContentsL>
          <CaseImage src={HeadShot}></CaseImage>
        </CaseContentsL>
        <CaseContentsR>
          <CaseImage src={HeadShot}></CaseImage>
        </CaseContentsR>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Case_1;
