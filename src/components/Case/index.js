import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import * as FadeIn from "../FadeIn";
import { Button } from "../ButtonCaseElements";
import {
  CaseContainer,
  // Image,
  FullWidthWrapper,
  ColumnLgImg1,
  ColumnLgImg2,
  ColumnLgImg3,
  ColumnLgImg4,
  ColumnLg,
  ColumnContentLg,
} from "./CaseElements";
import ImageSlider1 from "../ImageSlider/Slider1";
import ImageSlider2 from "../ImageSlider/Slider2";
import ImageSlider3 from "../ImageSlider/Slider3";
import ImageSlider4 from "../ImageSlider/Slider4";
import { SliderData1 } from "../ImageSlider/SliderData1";
import { SliderData2 } from "../ImageSlider/SliderData2";
import { SliderData3 } from "../ImageSlider/SliderData3";
import { SliderData4 } from "../ImageSlider/SliderData4";

const Case = ({
  id,
  to,
  // img,
  // alt,
  title,
  body,
  imageActivate1,
  imageActivate2,
  imageActivate3,
  imageActivate4,
  imageLeft,
  buttonLabel,
  paddingStart,
  paddingEnd,
}) => {
  return (
    <CaseContainer id={id}>
      <FullWidthWrapper
        paddingStart={paddingStart}
        paddingEnd={paddingEnd}
        imageLeft={imageLeft}
      >
        <ColumnLgImg1 imageActivate1={imageActivate1}>
          <FadeIn.Left>
            <ImageSlider1 slides={SliderData1} />
          </FadeIn.Left>
        </ColumnLgImg1>

        <ColumnLgImg2 imageActivate2={imageActivate2}>
          <FadeIn.Right>
            <ImageSlider2 slides={SliderData2} />
          </FadeIn.Right>
        </ColumnLgImg2>

        <ColumnLgImg3 imageActivate3={imageActivate3}>
          <FadeIn.Left>
            <ImageSlider3 slides={SliderData3} />
          </FadeIn.Left>
        </ColumnLgImg3>

        <ColumnLgImg4 imageActivate4={imageActivate4}>
          <FadeIn.Right>
            <ImageSlider4 slides={SliderData4} />
          </FadeIn.Right>
        </ColumnLgImg4>

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
