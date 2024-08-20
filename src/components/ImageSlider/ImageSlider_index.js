import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 612px;
  overflow: hidden;
  touch-action: pan-y; /* Allow touch actions on mobile */
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
`;

const SliderImage = styled.img`
  width: calc(100% - 20px); /* Subtracting the space on both sides */
  margin: 0 10px; /* Adding 10px margin on both sides */
  flex-shrink: 0;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer; /* Add cursor pointer for better UX */
`;

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;

  @media only screen and (max-width: 480px) {
    gap: 6px;
    margin-top: 16px;
  }
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ isActive }) => (isActive ? "#fe0000" : "#ff9999")};
  padding: ${({ isActive }) => (isActive ? "0 1.5rem" : "0")};
  border-radius: ${({ isActive }) => (isActive ? "10px" : "50%")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#fe0000" : "#ff6666")};
  }

  @media only screen and (max-width: 480px) {
    width: 9px;
    height: 9px;
    padding: ${({ isActive }) => (isActive ? "0 0.7rem" : "0")};
  }
`;

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
