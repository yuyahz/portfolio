// Password.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Password.css";

const PASSWORD = "uxyuya";

const Password = ({ targetPath }) => {
  const [isSticky, setSticky] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 1600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGate = () => {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    if (isAuthenticated) {
      navigate(targetPath);
      return;
    }

    const userInput = prompt("Please enter password");
    if (!userInput) return;

    if (userInput.trim() === PASSWORD) {
      localStorage.setItem("authenticated", "true");
      navigate(targetPath);
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className={`cta-container ${isSticky ? "visible" : "unvisible"}`}>
      <button className="cta-button" onClick={handleGate}>
        Password
      </button>
    </div>
  );
};

export default Password;

// import React, { useState, useEffect } from "react";
// import "./Password.css";

// const Password = () => {
//   const [userInput, setUserInput] = useState("");
//   const handleGate = () => {
//     const userInput = prompt("Please enter password");
//     if (/^\W+$/.test(userInput)) {
//       alert("Invalid input. Please enter a valid password.");
//     } else if (userInput !== null) {
//       window.location.href = `${userInput}`;
//     }
//   };

//   const [isSticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       if (offset > 1600) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`cta-container ${isSticky ? "visible" : "unvisible"}`}>
//       <button
//         className="cta-button"
//         smooth={true}
//         duration={500}
//         spy={true}
//         exact="true"
//         offset={0}
//         onClick={handleGate}
//       >
//         Password
//       </button>
//     </div>
//   );
// };

// export default Password;
