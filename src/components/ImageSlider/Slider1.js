import React, { useState, useEffect, useRef } from "react";
import { SliderData1 } from "./SliderData1";
import { SliderContainer, Image, ArrowWrapper } from "./SliderElements";
import { IoArrowBackCircle } from "react-icons/io5";

const ImageSlider1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timeoutId;
    if (sectionInView) {
      timeoutId = setTimeout(() => {
        setCurrentSlide(1);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [sectionInView]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % SliderData1.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? SliderData1.length - 1 : prevSlide - 1
    );
  };

  return (
    <SliderContainer>
      <div className="slider">
        {SliderData1.map((slide, index) => (
          <div
            key={index}
            className={index === currentSlide ? "slide active" : "slide"}
          >
            {index === currentSlide && (
              <Image src={slide.image} alt="slide" className="image" />
            )}
          </div>
        ))}
        <ArrowWrapper>
          <IoArrowBackCircle className="left-arrow" onClick={prevSlide} />
        </ArrowWrapper>
      </div>
      <section ref={sectionRef} />
    </SliderContainer>
  );
};

export default ImageSlider1;

// original
// import React, { useState } from "react";
// import { SliderData1 } from "./SliderData1";
// import { SliderContainer, Image, ArrowWrapper } from "./SliderElements";
// import { IoArrowBackCircle } from "react-icons/io5";

// const ImageSlider1 = ({ slides }) => {
//   const [current, setCurrent] = useState(0);
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <SliderContainer>
//       <sectio className="slider">
//         {SliderData1.map((slide, index) => {
//           return (
//             <div
//               className={index === current ? "slide active" : "slide"}
//               key={index}
//             >
//               {index === current && (
//                 <Image src={slide.image} alt="image" className="image" />
//               )}
//               <ArrowWrapper>
//                 <IoArrowBackCircle className="left-arrow" onClick={prevSlide} />
//               </ArrowWrapper>
//             </div>
//           );
//         })}
//       </sectio>
//     </SliderContainer>
//   );
// };

// export default ImageSlider1;
