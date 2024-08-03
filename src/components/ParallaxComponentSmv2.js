import React from "react";
import styled from "styled-components";
import Footer from "./FooterIndex";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const ParallaxContainer = styled.div`
  width: 100%;

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
`;

const ParallaxWrapper = styled.div`
  width: 100%;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;

  .sectionInner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(auto, auto, auto, auto);

    p {
      font-size: 20vw;
      color: var(--fourth-txt-color);
      font-family: "GT";
      font-weight: 300;
      text-align: center;
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
  }

  .underLayer {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background: var(--secondary-bg);

    .moon {
      animation-name: sway;
      animation-duration: 4s;
      animation-direction: alternate;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      @keyframes sway {
        from {
          padding-bottom: 4.167vw;
        }
        to {
          padding-bottom: 7.161vw;
        }
      }
    }
  }

  .underLayerTxt {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }

  .LayerFrame01 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0 100px;
    margin-top: 100vh;
    margin-top: auto;
  }

  span {
    padding: 5vw 50vw;
    margin-bottom: 20vw;
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
`;

const ParallaxComponentSmv2 = () => {
  return (
    <ParallaxContainer>
      <ParallaxWrapper>
        <Section>
          <div className="sectionInner">
            <div className="underLayer">
              <div className="underLayerTxt">
                <p>Let's Make</p>
              </div>
            </div>
            <div className="LayerFrame">
              <p></p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="sectionInner">
            <div className="underLayer">
              <div className="underLayerTxt">
                <div>
                  <p className="moon">Amazing</p>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="LayerFrame">
              <p>Something</p>
            </div>
          </div>
        </Section>
      </ParallaxWrapper>
    </ParallaxContainer>
  );
};

export default ParallaxComponentSmv2;
