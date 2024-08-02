import { React } from "react";
import * as FadeIn from "../FadeIn";
import {
  WorksContainer,
  WorksWrapper,
  WorksInnerWrapper,
  WorksHead,
  WorksNumber,
  WorksTitle,
} from "./WorksElements";

const Works = ({ name, to, head, title, number }) => {
  return (
    <WorksContainer name={name}>
      <FadeIn.Left>
        <WorksWrapper>
          <WorksInnerWrapper>
            <WorksHead>
              <p>{head}</p>
            </WorksHead>
            <WorksNumber>{number}</WorksNumber>
            <WorksTitle to={to}>{title}</WorksTitle>
          </WorksInnerWrapper>
        </WorksWrapper>
      </FadeIn.Left>
    </WorksContainer>
  );
};

export default Works;

// import React from "react";
// import { BrowserRouter, Link, Switch, Route, NavLink } from "react-router-dom";
// import Article_Larry from "../Article_Larry";
// import styled, { keyframes } from "styled-components";
// import { motion } from "framer-motion";
// import * as FadeIn from "../FadeIn";
// import { WorksContainer, WorksWrapper } from "./WorksElements";
// import { TiTag } from "react-icons/ti";

// const Works = () => {
//   const fadeLeft = {
//     hidden: { opacity: 0, x: -200 },
//     visible: { opacity: 1, x: 0 },
//   };

//   const rotate = keyframes`
//   0% {
//         transform: translate(0%,0);
//     }
//     25% {
//         transform: translate(10%,0)
//     }
//     50% {
//         transform: translate(15%,0)
//     }
//     75% {
//         transform: translate(10%,0)
//     }
//     100% {
//         transform: translate(0%,0)
//     }
// `;

//   return (
//     <BrowserRouter>
//       <WorksContainer>
//         <WorksWrapper>
//           <div>
//             <Link to="/Article_Larry">Larry</Link>
//           </div>
//           <Switch>
//             <Route path="/Article_Larry">
//               <Article_Larry />
//             </Route>
//           </Switch>
//         </WorksWrapper>
//       </WorksContainer>
//     </BrowserRouter>
//   );
//   //   <BrowserRouter>
//   //     <WorksContainer>
//   //       <WorksWrapper>
//   //         <Link to={larryPage}>LAry</Link>
//   //       </WorksWrapper>
//   //     </WorksContainer>
//   //   </BrowserRouter>
//   // );
// };
