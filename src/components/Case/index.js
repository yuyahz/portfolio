import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import * as FadeIn from "../FadeIn";
import {
  CaseContainer,
  CaseWrapper,
  CaseContentsImg,
  CaseContentsTxt,
  CaseImage,
} from "./CaseElements";
import { Button } from "../ButtonCaseElements";
import HeadShot from "../../images/headshot2023.png";

const Case = ({
  id,
  to,
  img,
  alt,
  title,
  body,
  imageLeft,
  imageSpaceLeft,
  imageSpaceRight,
  buttonLabel,
  paddingStart,
  paddingEnd,
}) => {
  return (
    <CaseContainer id={id}>
      <CaseWrapper
        imageLeft={imageLeft}
        paddingStart={paddingStart}
        paddingEnd={paddingEnd}
      >
        <CaseContentsImg
          imageSpaceLeft={imageSpaceLeft}
          imageSpaceRight={imageSpaceRight}
        >
          <div>
            <CaseImage src={img} alt={alt}></CaseImage>
          </div>
        </CaseContentsImg>
        <CaseContentsTxt>
          <div>
            <h2>{title}</h2>
            <p>{body}</p>
            <Button
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              {buttonLabel}
            </Button>
          </div>
        </CaseContentsTxt>
      </CaseWrapper>
    </CaseContainer>
  );
};

export default Case;
