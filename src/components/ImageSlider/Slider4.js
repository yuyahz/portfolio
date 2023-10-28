import React, { useState } from "react";
import { SliderData4 } from "./SliderData4";
import { SliderContainer, Image, ArrowWrapper } from "./SliderElements";
import { IoArrowBackCircle } from "react-icons/io5";

const ImageSlider1 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
      <sectio className="slider">
        {SliderData4.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <Image src={slide.image} alt="image" className="image" />
              )}
              <ArrowWrapper>
                <IoArrowBackCircle className="left-arrow" onClick={prevSlide} />
              </ArrowWrapper>
            </div>
          );
        })}
      </sectio>
    </SliderContainer>
  );
};

export default ImageSlider1;
