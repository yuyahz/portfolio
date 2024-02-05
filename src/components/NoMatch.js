import React from "react";
import styled from "styled-components";
import BackButton from "./BackButton";

const Styles = styled.div`
  .NoMatchContainer {
    min-height: 100vh;
    background-color: var(--primaly-bg);
  }

  .NoMatchWrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
  }

  h2 {
    font-family: var(--secondary-font-family);
    font-weight: 500;
    color: var(--primary-txt-color);

    margin-bottom: 3rem;
  }

  a {
    margin: 0 auto;
  }
`;

export const NoMatch = () => (
  <Styles>
    <div className="NoMatchContainer">
      <div className="NoMatchWrapper">
        <div>
          <h2>
            Sorry ...
            <br />I am confused :(
            <br />
            Please try again!
          </h2>
          <BackButton />
        </div>
      </div>
    </div>
  </Styles>
);

export default NoMatch;
