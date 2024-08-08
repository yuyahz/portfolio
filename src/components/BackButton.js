import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ButtonCaseElements";

const BackButton = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const goBack = () => {
    navigate(-1); // Use navigate(-1) instead of history.goBack()
  };

  return (
    <Button
      smooth={true}
      duration={500}
      spy={true}
      exact="true"
      offset={0}
      onClick={goBack}
    >
      Try Again!
    </Button>
  );
};

export default BackButton;

// import React from "react";
// import { useHistory } from "react-router-dom";
// import { Button } from "./ButtonCaseElements";

// const BackButton = () => {
//   const history = useHistory();

//   const goBack = () => {
//     history.goBack();
//   };

//   return (
//     <Button
//       smooth={true}
//       duration={500}
//       spy={true}
//       exact="true"
//       offset={0}
//       onClick={goBack}
//     >
//       Try Again!
//     </Button>
//   );
// };

// export default BackButton;
