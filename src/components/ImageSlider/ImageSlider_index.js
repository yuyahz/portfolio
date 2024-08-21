import React, { useState, useRef, useEffect } from "react";
import {
  SliderContainer,
  SliderWrapper,
  SliderImage,
  DotContainer,
  Dot,
} from "./ImageSlider_indexElements";

const ImageSlider = ({ slides }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const sliderRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to handle dot clicks
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Function to handle image clicks
  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Swipe handling functions
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    } else if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${
        currentImageIndex * 100
      }%)`;
    }
  }, [currentImageIndex]);

  return (
    <SliderContainer
      onTouchStart={isMobile ? handleTouchStart : undefined}
      onTouchMove={isMobile ? handleTouchMove : undefined}
      onTouchEnd={isMobile ? handleTouchEnd : undefined}
    >
      <SliderWrapper ref={sliderRef}>
        {slides.map((item, index) => (
          <SliderImage
            key={index}
            src={item.image}
            alt={`Slide ${index + 1}`}
            onClick={() => !isMobile && handleImageClick()}
          />
        ))}
      </SliderWrapper>
      <DotContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentImageIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotContainer>
    </SliderContainer>
  );
};

export default ImageSlider;
