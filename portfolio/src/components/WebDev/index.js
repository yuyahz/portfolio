import React from "react";

import {
  WebDevContainer,
  WebDevIcon,
  WebDevH1,
  WebDevWrapper,
  WebDevCard,
  WebDevH2,
  WebDevP,
} from "./WebDevElements";

const WebDev = () => {
  return (
    <WebDevContainer id="WebDev">
      <WebDevIcon to="/">WebDev</WebDevIcon>
      <WebDevH1>Our WebDev</WebDevH1>
      <WebDevWrapper>
        <WebDevCard>
          {/* <WebDevIcon src={Icon1} /> */}
          <WebDevH2>dummy Text</WebDevH2>
          <WebDevP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </WebDevP>
        </WebDevCard>
        <WebDevCard>
          {/* <WebDevIcon src={Icon2} /> */}
          <WebDevH2>dummy Text</WebDevH2>
          <WebDevP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </WebDevP>
        </WebDevCard>
        <WebDevCard>
          {/* <WebDevIcon src={Icon3} /> */}
          <WebDevH2>dummy Text</WebDevH2>
          <WebDevP>
            dummy Text dummy Text dummy Text dummy Text dummy Text dummy Text
            dummy Text dummy Text
          </WebDevP>
        </WebDevCard>
      </WebDevWrapper>
    </WebDevContainer>
  );
};

export default WebDev;
