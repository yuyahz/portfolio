import React, { useState } from "react";
import OpeningSection from "../components/Opening";
import TitleSection from "../components/TitleSection";
import InfoSection from "../components/InfoSection";
import {
  homeLarry,
  homeVector,
  homeUI,
  homeDaruma,
  burger,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import PicLarry from "../components/PicLarry";
import PicVector from "../components/PicVector";
import PicDailyUi from "../components/PicDailyUI";
import PicDaruma from "../components/PicDaruma";
import Ticker from "../components/Ticker";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} {...burger} />
      <Navbar toggle={toggle} />
      <OpeningSection />
      <TitleSection />
      <PicLarry />
      <InfoSection {...homeLarry} />
      <PicVector />
      <InfoSection {...homeVector} />
      <PicDailyUi />
      <InfoSection {...homeUI} />
      <PicDaruma />
      <InfoSection {...homeDaruma} />
      <Ticker />
      <Works />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
