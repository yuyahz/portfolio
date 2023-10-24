import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import * as FadeIn from "../FadeIn";
import {
  CaseContainer,
  Image,
  FullWidthWrapper,
  ColumnLg,
  ColumnContentLg,
} from "./CaseElements";
import { Button } from "../ButtonCaseElements";

const Case = ({
  id,
  to,
  img,
  alt,
  title,
  body,
  imageLeft,
  buttonLabel,
  paddingStart,
  paddingEnd,
}) => {
  return (
    <CaseContainer>
      <FullWidthWrapper
        id={id}
        paddingStart={paddingStart}
        paddingEnd={paddingEnd}
        imageLeft={imageLeft}
      >
        <ColumnLg>
          <FadeIn.Left>
            <Image src={img} alt={alt} id="" />
          </FadeIn.Left>
        </ColumnLg>
        <ColumnLg>
          <ColumnContentLg>
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <p>{body}</p>
            </div>
            <Button
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              {buttonLabel}
            </Button>
          </ColumnContentLg>
        </ColumnLg>
      </FullWidthWrapper>
    </CaseContainer>
  );
};

export default Case;
