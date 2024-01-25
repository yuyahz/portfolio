import React from "react";
import ScrollToTop from "../components/ScrollTop";
import Article_DailyUi from "../components/Article_DailyUi";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const dailyUiPage = () => {
  return (
    <>
      <ScrollToTop />
      <Article_DailyUi />
      <Contact />
      <Footer />
    </>
  );
};

export default dailyUiPage;
