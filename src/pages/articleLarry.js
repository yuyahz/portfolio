import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollToTop from "../components/ScrollTop";
import Article_Larry from "../components/Article_Larry";
import Footer from "../components/Footer";

const larryPage = () => {
  return (
    <ParallaxProvider>
      <>
        <ScrollToTop />
        <Article_Larry />
        <Footer />
      </>
    </ParallaxProvider>
  );
};

export default larryPage;
