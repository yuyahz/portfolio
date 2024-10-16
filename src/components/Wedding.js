import React from "react";
import RSVPForm from "./WeddingRsvpForm";
import styled from "styled-components";

const WeddingStyles = styled.div`
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
    font-style: normal;
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

export const Wedding = () => (
  <WeddingStyles>
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
              Saturday, the thirty of November, 2024 Three o'clock in the
              afternoon at&nbsp;
              <a
                className="orange"
                href="https://www.google.com/maps/place/Margaret+Pigott+Park/@49.2721556,-123.1675639,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMVaJETlXYRpifTCbjgDd12mMtkPlV1QYRASXPP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMVaJETlXYRpifTCbjgDd12mMtkPlV1QYRASXPP%3Dw114-h86-k-no!7i4032!8i3024!4m18!1m8!3m7!1s0x5486724db416c141:0x837df7e3662f91ab!2sMargaret+Pigott+Park!8m2!3d49.2721556!4d-123.1675639!10e5!16s%2Fm%2F04zhvkm!3m8!1s0x5486724db416c141:0x837df7e3662f91ab!8m2!3d49.2721556!4d-123.1675639!10e5!14m1!1BCgIgAQ!16s%2Fm%2F04zhvkm?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
              >
                Margaret Pigott Park
              </a>
            </p>
          </div>
          <div className="content">
            <p>
              Cocktail & dinner reception to follow Six o'clock in the evening
              at&nbsp;
              <a className="orange" href="https://caffelatana.ca/">
                Caffé La Tana
              </a>
            </p>
          </div>

          <RSVPForm />

          <div className="content-top details">
            <p>
              Margaret Pigott Park:
              <a
                className="reset-color"
                href="https://maps.app.goo.gl/JQWFiarMDQizi2QZ6"
              >
                2743 Point Grey Rd, Vancouver, BC V6K 1A6
              </a>
            </p>
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
  </WeddingStyles>
);

export default Wedding;
