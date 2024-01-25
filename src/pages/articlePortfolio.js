import React from "react";
import ScrollToTop from "../components/ScrollTop";
import Article_Portfolio from "../components/Article_Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const portfolioPage = () => {
  return (
    <>
      <ScrollToTop />
      <Article_Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default portfolioPage;
