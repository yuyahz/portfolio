import React, { useState } from "react";
import ScrollToTop from "../components/ScrollTop";
import Article_Daruma from "../components/Article_Daruma";
import Footer from "../components/Footer";

const DarumaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Article_Daruma />
      <Footer />
    </>
  );
};

export default DarumaPage;
