import React from "react";
import { TickerIndex } from "./TickerElements";
import { TickerContainer } from "./TickerElements";
import { TickerWrapper } from "./TickerElements";
import { TickerItem } from "./TickerElements";

const Ticker = () => {
  return (
    <TickerIndex>
      <TickerContainer id="ticker">
        <TickerWrapper>
          <TickerItem>
            I believe that is supportive work culture is built on strong
            communication and relationships between the whole team through, and
            I am committed to that.
          </TickerItem>
        </TickerWrapper>
      </TickerContainer>
    </TickerIndex>
  );
};

export default Ticker;
