import React from "react";
import * as FadeIn from "../FadeIn";
import { Button } from "../ButtonCaseElements";
import {
  CaseContainer,
  FullWidthWrapper,
  ColumnLgImg01,
  ColumnLgImg02,
  ColumnLgImg03,
  ColumnLgImg04,
  ColumnLg,
  ColumnContentLg,
  Tag,
  TagWrapper,
} from "./CaseElements";
import { SliderData01 } from "../ImageSlider/SliderData01";
import { SliderData02 } from "../ImageSlider/SliderData02";
import { SliderData03 } from "../ImageSlider/SliderData03";
import { SliderData04 } from "../ImageSlider/SliderData04";
import ImageSlider from "../ImageSlider/ImageSlider_index";

const Case = ({
  name,
  to,
  title,
  tag,
  body,
  imageActivate01,
  imageActivate02,
  imageActivate03,
  imageActivate04,
  imageLeft,
  buttonLabel,
  paddingStart,
  paddingEnd,
}) => {
  return (
    <CaseContainer name={name}>
      <FullWidthWrapper
        paddingStart={paddingStart}
        paddingEnd={paddingEnd}
        imageLeft={imageLeft}
      >
        <ColumnLgImg01 imageActivate01={imageActivate01}>
          <FadeIn.Left>
            <ImageSlider slides={SliderData01} />
          </FadeIn.Left>
        </ColumnLgImg01>

        <ColumnLgImg02 imageActivate02={imageActivate02}>
          <FadeIn.Right>
            <ImageSlider slides={SliderData02} />
          </FadeIn.Right>
        </ColumnLgImg02>

        <ColumnLgImg03 imageActivate03={imageActivate03}>
          <FadeIn.Left>
            <ImageSlider slides={SliderData03} />
          </FadeIn.Left>
        </ColumnLgImg03>

        <ColumnLgImg04 imageActivate04={imageActivate04}>
          <FadeIn.Right>
            <ImageSlider slides={SliderData04} />
          </FadeIn.Right>
        </ColumnLgImg04>

        <ColumnLg>
          <ColumnContentLg>
            <div>
              <h2>{title}</h2>
            </div>
            <TagWrapper>
              <Tag>
                <p className="tagCopy">{tag}</p>
              </Tag>
            </TagWrapper>
            <div>
              <p className="body">{body}</p>
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
