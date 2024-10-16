import React from "react";
import RSVPForm from "./WeddingRsvpForm";
import styled from "styled-components";

const WeddingPartyStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Alice&family=Spectral:wght@0,300;1,300&display=swap");

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .background {
    background-color: #455949;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div,
  p {
    color: #e5f5f0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-family: "Spectral", serif;
    font-weight: 300;
    font-style: normal;
    vertical-align: baseline;
    background: transparent;
  }

  span {
    color: rgb(245, 183, 66);
    font-size: 48px;
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: 280px) {
      font-size: 17.143vw;
    }
  }

  h1 {
    padding-bottom: 16px;
    color: #e5f5f0;
    font-size: 24px;
    font-family: "Alice", serif;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: 280px) {
      font-size: 16px;
    }
  }

  .aoP a[href],
  a {
    font-family: "Spectral", serif;
    font-weight: 300;
    text-decoration: underline;
    cursor: pointer;
  }

  .container {
    max-width: 420px;
    margin: 0 auto;
    padding: 30px 15px;
    text-align: center;
  }

  .wrapper {
    padding: 0 15px;
  }

  .orange {
    color: rgb(245, 183, 66);
  }

  .italic {
    font-style: italic;
    color: rgb(245, 183, 66);
  }

  .reset-color {
    color: #e5f5f0;
  }

  .title {
    border-top: medium double #e5f5f0;
    border-bottom: medium double #e5f5f0;
    padding: 24px 0;
  }

  .no-wrap {
    white-space: nowrap;
  }

  .content-top {
    padding-top: 44px;
  }

  .content {
    font-family: "Spectral", serif;
    font-weight: 300;
    padding-top: 16px;
  }

  .details {
    font-size: 12px;
  }

  .animated-top {
    margin-top: 24px;
    height: 18px;
    background-size: 40px 20px;
    background-image: radial-gradient(
      circle at 15px 15px,
      rgb(245, 183, 66) 12px,
      transparent 13px
    );
  }

  .animated-bottom {
    margin: -8px 0;
    height: 15px;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 12px,
      #e5f5f0 13px
    );
    background-repeat: repeat-x;
    animation: move-background 17.7s cubic-bezier(0.68, -0.6, 0.32, 0.3)
      infinite;
  }

  @keyframes move-background {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }
`;

export const WeddingParty = () => (
  <WeddingPartyStyles>
    <div className="background">
      <div className="container">
        <div className="wrapper">
          <h1>2024, Nov, 30th</h1>
          <div className="title">
            <span>Chanel Blouin</span>
            <p>and</p>
            <span>Yuya </span>
            <span className="no-wrap">Hashirizaki</span>
          </div>
          <div className="content-top">
            <p className="italic">
              The honour of your presence is joyfully requested at the marriage
              celebration of us
            </p>
          </div>
          <div className="content">
            <p>
              Cocktail reception to follow eight o'clock in the evening at&nbsp;
              <a className="orange" href="https://caffelatana.ca/">
                Caffé La Tana
              </a>
            </p>
          </div>

          <RSVPForm />

          <div className="content-top details">
            <p>
              Caffé La Tana:
              <a
                className="reset-color"
                href="https://maps.app.goo.gl/ceLV6cvE8wJ8VsLN7"
              >
                635 Commercial Dr, Vancouver, BC V5L 3W3
              </a>
            </p>
          </div>
        </div>
        <div className="animated-top"></div>
        <div className="animated-bottom"></div>
      </div>
    </div>
  </WeddingPartyStyles>
);

export default WeddingParty;
