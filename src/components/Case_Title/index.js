import React, { useState } from "react";
import * as FadeIn from "../FadeIn";
import { CaseContainer, CaseWrapper, CaseTitleWrapper } from "./Title_Elements";

const Case_Title = () => {
  return (
    <CaseContainer>
      <CaseWrapper>
        <FadeIn.Left>
          <CaseTitleWrapper>
            <div>
              <h2>Case Study</h2>
              <h2 className="fancy-font"> ------- Latest parctice</h2>
            </div>
          </CaseTitleWrapper>
        </FadeIn.Left>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Case_Title;
