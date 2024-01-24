// StickyCTA.js
import React, { useState, useEffect } from "react";
import "./StickyCTA.css";

const StickyCTA = () => {
  const [userInput, setUserInput] = useState("");
  const handleGate = () => {
    const userInput = prompt("Please enter password");
    if (/^\W+$/.test(userInput)) {
      alert("Invalid input. Please enter a valid password.");
    } else if (userInput !== null) {
      window.location.href = `${userInput}`;
    }
  };

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 1600) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`cta-container ${isSticky ? "visible" : "unvisible"}`}>
      <button
        className="cta-button"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={0}
        onClick={handleGate}
      >
        Passward
      </button>
    </div>
  );
};

export default StickyCTA;
