import React from "react";
import { TickerContainer } from "./TickerElements";
import { TickerWrapper } from "./TickerElements";
import { TickerItem } from "./TickerElements";

const Ticker = () => {
  return (
    <TickerContainer id="ticker">
      <TickerWrapper>
        <TickerItem>
          I believe that is supportive work culture is built on strong
          communication and relationships between the whole team through, and I
          am committed to that.
        </TickerItem>
      </TickerWrapper>
    </TickerContainer>
  );
};

export default Ticker;
