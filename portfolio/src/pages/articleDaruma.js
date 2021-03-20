import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "../components/ScrollTop";
import Article_Daruma from "../components/Article_Daruma";
import Footer from "../components/Footer";

const darumaPage = () => {
  return (
    <ParallaxProvider>
      <>
        <ScrollToTop />
        <Article_Daruma />
        <Footer />
      </>
    </ParallaxProvider>
  );
};

export default darumaPage;
