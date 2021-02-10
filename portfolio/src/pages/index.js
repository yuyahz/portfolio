import React, { useState } from "react";
import OpeningSection from "../components/Opening";
import TitleSection from "../components/TitleSection";
import InfoSection from "../components/InfoSection";
import {
  homeLarry,
  homeVector,
  homeDaruma,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import PicLarry from "../components/PicLarry";
import PicVector from "../components/PicVector";
import PicDaruma from "../components/PicDaruma";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <OpeningSection />
      <TitleSection />
      <PicLarry />
      <InfoSection {...homeLarry} />
      <PicVector />
      <InfoSection {...homeVector} />
      <PicDaruma />
      <InfoSection {...homeDaruma} />
      <Footer />
    </>
  );
};

export default Home;
