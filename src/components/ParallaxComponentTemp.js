import React from "react";
import styled from "styled-components";
import LarryArticle_11 from "../images/LarryArticle_11.png";
import DarumaArticle_1 from "../images/DarumaArticle_1.png";
import VectorArticle_1 from "../images/VectorArticle_1.png";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: #f0f0f0;
`;

const HeaderInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
    color: #333;
    font-weight: bold;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  height: 200vh;

  .sectionInner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(auto, auto, auto, auto); /* This clips the background */
  }

  .imageBg {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
  }

  .cntFrame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    padding: 0 100px;
    margin-top: 100vh;
    background: rgba(255, 255, 255, 0.8);
    color: #111;

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 2em;
    }
  }

  @media (max-width: 768px) {
    .cntFrame {
      padding: 0 15px;
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #333;
`;

const FooterInner = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
`;

const ParallaxComponentTemp = () => {
  return (
    <Wrapper>
      <Header>
        <HeaderInner>
          <h1>LOGO</h1>
        </HeaderInner>
      </Header>
      <Container>
        <Section>
          <div className="sectionInner">
            <div
              id="imageBg01"
              className="imageBg"
              style={{ backgroundImage: `url(${LarryArticle_11})` }}
            ></div>
            <div className="cntFrame">
              <h2>Title</h2>
              <p>
                Body Body Body Body Body Body Body Body Body Body Body Body Body
                Body Body Body Body Body Body Body Body Body Body Body Body Body
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="sectionInner">
            <div
              id="imageBg02"
              className="imageBg"
              style={{ backgroundImage: `url(${DarumaArticle_1})` }}
            ></div>
            <div className="cntFrame">
              <h2>Title</h2>
              <p>
                Body Body Body Body Body Body Body Body Body Body Body Body Body
                Body Body Body Body Body Body Body Body Body Body Body Body Body
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="sectionInner">
            <div
              id="imageBg03"
              className="imageBg"
              style={{ backgroundImage: `url(${VectorArticle_1})` }}
            ></div>
            <div className="cntFrame">
              <h2>Title</h2>
              <p>
                Body Body Body Body Body Body Body Body Body Body Body Body Body
                Body Body Body Body Body Body Body Body Body Body Body Body Body
              </p>
            </div>
          </div>
        </Section>
      </Container>
      <Footer>
        <FooterInner>
          <p>FOOTER</p>
        </FooterInner>
      </Footer>
    </Wrapper>
  );
};

export default ParallaxComponentTemp;
