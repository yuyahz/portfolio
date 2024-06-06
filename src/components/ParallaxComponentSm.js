import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

export const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    //display: block;//
    display: none;
    padding: 0 15px;
  }
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease-out; /* Add transition for smoother animation */

  .layer2 {
  }

  p {
    font-size: 460px;
    font-weight: 100;
    color: var(--fourth-txt-color);
    text-align: center;
  }

  .closing {
    color: var(--fourth-txt-color);
    font-family: "GT";
    font-size: 48px;
    font-weight: 500;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 80px;

    @media screen and (max-width: 540px) {
      font-size: 32px;
    }
  }

  .moon {
    padding: 5vw;
    border-radius: 50% 50% 0 0;
    background: rgb(250, 248, 246);
    background: linear-gradient(
      180deg,
      rgba(250, 248, 246, 1) 0%,
      rgba(251, 167, 166, 1) 10%,
      rgba(252, 108, 107, 1) 20%,
      rgba(254, 0, 0, 0) 30%
    );
  }

  @media only screen and (max-width: 2560px) {
    p {
      font-size: 17.969vw;
    }
  }
  @media only screen and (max-width: 1960px) {
    p {
      font-size: 18vw;
    }
  }
  @media only screen and (max-width: 960px) {
    p {
      font-size: 20vw;
    }
  }
  @media only screen and (max-width: 540px) {
    p {
      font-size: 19vw;
    }
  }
  @media only screen and (max-width: 369px) {
    p {
      font-size: 17.5vw;
    }
  }

  .social-icons {
    max-width: 25vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 30px;
    position: fixed;
    bottom: 0;
  }

  a {
    color: var(--primary-bg);
    font-size: 24px;
    transition: 0.3s ease;

    &:hover {
      padding: 0 0 16px 0;
    }
  }
`;

const ParallaxComponentSm = () => {
  const parallaxRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const parallaxElement = parallaxRef.current;
    const position = 100; // Example start position
    const positionBottom = 100; // Example end position

    if (parallaxElement) {
      const top = parallaxElement.offsetTop;
      const layers = parallaxElement.querySelectorAll(".parallax-layer");
      layers.forEach((layer, index) => {
        const depth = (index + 1) * 0.5; // Adjust depth factor as needed
        const depthAdjusted = (scrollY - top) * depth;
        layer.style.transform = `translateY(${depthAdjusted}px)`;
      });

      if (scrollY > position && scrollY < positionBottom) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ParallaxContainer id="parallaxSm" ref={parallaxRef}>
      <ParallaxLayer className={`parallax-layer layer1 ${active ? "act" : ""}`}>
        <p className="first-copy">Let's Make</p>
      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer layer2">
        <p>Something</p>
      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer layer3">
        <p className="moon">Amazing</p>
      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer layer4">
        <p className="closing">Thank you.</p>
      </ParallaxLayer>
      <ParallaxLayer className="parallax-layer layer5">
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/yuya-hashirizaki"
            target="_blank"
            aria-label="linkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Yuya61"
            target="_blank"
            aria-label="github"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.behance.net/yuyahashirizaki"
            target="_blank"
            aria-label="Instagram"
          >
            <FaBehance />
          </a>
          <a
            href="https://dribbble.com/yuya-hashirizaki"
            target="_blank"
            aria-label="dribbble"
          >
            <FaDribbble />
          </a>
        </div>
        {/* <div className="parallax-layer layer6">
            <p className="rights">
              {" "}
              &copy; {new Date().getFullYear()} Your Website. All rights
              reserved.
            </p>
          </div> */}
      </ParallaxLayer>
    </ParallaxContainer>
  );
};

export default ParallaxComponentSm;
