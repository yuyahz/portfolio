import { React } from "react";
import * as FadeIn from "../FadeIn";
import {
  WorksContainer,
  WorksWrapper,
  WorksInnerWrapper,
  WorksHead,
  WorksNumber,
  WorksTitle,
} from "./WorksElements";

const Works = ({ name, to, head, title, number }) => {
  return (
    <WorksContainer name={name}>
      <FadeIn.Left>
        <WorksWrapper>
          <WorksInnerWrapper>
            <WorksHead>
              <p>{head}</p>
            </WorksHead>
            <WorksNumber>{number}</WorksNumber>
            <WorksTitle to={to}>{title}</WorksTitle>
          </WorksInnerWrapper>
        </WorksWrapper>
      </FadeIn.Left>
    </WorksContainer>
  );
};

export default Works;
