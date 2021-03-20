import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "../components/ScrollTop";
import Article_Vector from "../components/Article_Vector";
import Footer from "../components/Footer";

const vectorPage = () => {
  return (
    <ParallaxProvider>
    <>
      <ScrollToTop />
      <Article_Vector />
      <Footer />
      </>
      </ParallaxProvider>
    );
};

export default vectorPage;
