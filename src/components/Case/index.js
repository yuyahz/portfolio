import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import * as FadeIn from "../FadeIn";
import {
  CaseTitleWrapper,
  CaseContainer,
  CaseWrapper,
  CaseContentsImg,
  CaseContentsTxt,
  CaseImage,
  Image,
  FullWidthContainer,
  FullWidthWrapper,
  FullWidthFlipWrapper,
  ColumnLg,
  ColumnContentLg,
} from "./CaseElements";
import { Button } from "../ButtonCaseElements";
import HeadShot from "../../images/headshot2023.png";

const Case = ({
  id,
  to,
  img,
  alt,
  title,
  body,
  imageLeft,
  imageSpaceLeft,
  imageSpaceRight,
  buttonLabel,
  paddingStart,
  paddingEnd,
}) => {
  return (
    <CaseContainer>
      <FullWidthWrapper
        id={id}
        paddingStart={paddingStart}
        paddingEnd={paddingEnd}
        imageLeft={imageLeft}
      >
        <ColumnLg>
          <Image src={img} alt={alt} id="" />
        </ColumnLg>
        <ColumnLg>
          <ColumnContentLg>
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <p>{body}</p>
            </div>
            <Button
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={0}
            >
              {buttonLabel}
            </Button>
          </ColumnContentLg>
        </ColumnLg>
      </FullWidthWrapper>
    </CaseContainer>

    // <CaseContainer>
    //   <CaseWrapper
    //     id={id}
    //     imageLeft={imageLeft}
    //     paddingStart={paddingStart}
    //     paddingEnd={paddingEnd}
    //   >
    //     <CaseContentsImg
    //       imageSpaceLeft={imageSpaceLeft}
    //       imageSpaceRight={imageSpaceRight}
    //     >
    //       <div>
    //         <FadeIn.Left>
    //           <CaseImage src={img} alt={alt}></CaseImage>
    //         </FadeIn.Left>
    //       </div>
    //     </CaseContentsImg>
    //     <CaseContentsTxt>
    //       <div>
    //         <h2>{title}</h2>
    //         <p>{body}</p>
    //         <Button
    //           to={to}
    //           smooth={true}
    //           duration={500}
    //           spy={true}
    //           exact="true"
    //           offset={0}
    //         >
    //           {buttonLabel}
    //         </Button>
    //       </div>
    //     </CaseContentsTxt>
    //   </CaseWrapper>
    // </CaseContainer>
  );
};

export default Case;
