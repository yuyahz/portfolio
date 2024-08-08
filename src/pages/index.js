import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import AboutParallax from "../components/AboutParallax";
import About from "../components/About";
import Banner from "../components/Banner";
import {
  // homeLarry,
  // homeVector,
  // homeUI,
  // homeDaruma,
  burger,
} from "../components/Contents/Data";
import Case from "../components/Case";
import Case_Title from "../components/Case_Title";
import { case1, case2, case3, case4 } from "../components/Case/Data";
import {
  // worksRv,
  // worksMp,
  worksLarry,
  worksVector,
  worksDaruma,
  // worksDailyUi,
  // worksArtDirections,
  worksPortfolio,
} from "../components/Works/Data";
import Works from "../components/Works";
import Contact from "../components/Contact";
import ParallaxComponentLg from "../components/ParallaxComponentLg";
import ParallaxComponentSm from "../components/ParallaxComponentSm";
import ParallaxComponentSmv2 from "../components/ParallaxComponentSmv2";
import FooterIndex from "../components/FooterIndex";

// import PicLarry from "../components/PicLarry";
// import PicVector from "../components/PicVector";
// import PicDailyUi from "../components/PicDailyUI";
// import PicDaruma from "../components/PicDaruma";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [animateNavbar, setAnimateNavbar] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");

      // If the Home section is no longer in view, show the navbar
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        if (rect.bottom <= 0) {
          setShowNavbar(true);
          setAnimateNavbar(true); // Trigger animation when navbar should show
        } else {
          setAnimateNavbar(false); // Reset animation when not visible
        }
      } else {
        console.warn("Element with ID 'home' not found.");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} {...burger} />
      <div id="home">
        <Home />
      </div>
      {showNavbar && <Navbar toggle={toggle} animateNavbar={animateNavbar} />}
      <About />
      <Banner />
      {/* <PicLarry />
      <Contents {...homeLarry} />
      <PicVector />
      <Contents {...homeVector} />
      <PicDailyUi />
      <Contents {...homeUI} />
      <PicDaruma />
      <Contents {...homeDaruma} /> */}
      <div name="caseStudy">
        <Case_Title />
        <Case {...case1} />
        <Case {...case2} />
        <Case {...case3} />
        <Case {...case4} />
      </div>
      {/* <Works {...worksRv} /> */}
      {/* <Works {...worksMp} /> */}
      <div name="works">
        <Works {...worksLarry} />
        <Works {...worksVector} />
        <Works {...worksDaruma} />
      </div>
      {/* <Works {...worksDailyUi} /> */}
      {/* <Works {...worksArtDirections} /> */}
      <Works {...worksPortfolio} />
      <div name="contact">
        <Contact />
        <ParallaxComponentSm />
        <ParallaxComponentSmv2 />
        <ParallaxComponentLg />
      </div>
      <FooterIndex />
    </>
  );
};

export default Index;
