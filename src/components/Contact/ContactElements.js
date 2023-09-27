import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #faf8f6;
  padding: 17rem 0;

  @media only screen and (max-width: 960px) {
    padding: 26.33vw 0;
  }
`;

export const ContactWrapper = styled.div`
  .pr-text {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0 6rem 0;

    @media only screen and (max-width: 960px) {
      padding: 2rem 0 12vw 0;
    }

    @media only screen and (max-width: 250px) {
      padding: 1.5rem 0 2rem 0;
    }
  }

  .smile {
    margin: 0 auto !important;
    width: 300px;
    height: 150px;
    border: solid 4px #fe0000;
    border-radius: 0 0 150px 150px;
    border-top: 0;

    @media only screen and (max-width: 960px) {
      width: 31.25vw;
      height: 15.625vw;
      border-radius: 0 0 15.625vw 15.625vw;
    }

    /* @media only screen and (max-width: 250px) {
      width: 100px;
      height: 50px;
      border-radius: 0 0 75px 75px;
    } */
  }

  h2 {
    color: #fe0000;
    font-weight: 600;
    font-size: 4rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    @media only screen and (max-width: 1280px) {
      font-size: 4.44vw;
    }
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    font-size: 4.2rem;
    width: 23.438vw;
    height: 23.438vw;
    line-height: 23.438vw;
    text-align: center;
    animation: pulse 3s ease infinite alternate,
      nudge 5s linear infinite alternate;
    border-radius: 100%;

    @media only screen and (max-width: 1280px) {
      font-size: 5.5vw;
    }

    @media only screen and (min-width: 1280px) {
      width: 300px;
      height: 300px;
      line-height: 300px;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      background-color: #fe0000;
      color: #faf8f6;
    }
    50% {
      background-color: #faf8f6;
      color: #fe0000;
    }
  }

  @keyframes nudge {
    0%,
    100% {
      transform: translate(0, 0);
    }

    50% {
      transform: translate(150px, 0);
    }

    80% {
      transform: translate(-150px, 0);
    }
  }

  @media only screen and (max-width: 960px) {
    @keyframes nudge {
      0%,
      100% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(60px, 0);
      }

      80% {
        transform: translate(-60px, 0);
      }
    }
  }
`;

export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  @media only screen and (max-width: 960px) {
    margin-top: 16.667vw;
  }
`;

export const ContactText = styled.div`
  color: #010606;
  font-size: 3rem;
  font-weight: 300;
  text-align: center;

  &:nth-child(2) {
    margin: 0.5rem 0 3rem 0;
  }

  @media only screen and (max-width: 960px) {
    font-size: 4.44vw;

    &:nth-child(2) {
      margin: 0.5rem 0 3.33vw 0;
    }
  }
`;

export const ContactEmail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  .link {
    text-decoration: none;
    color: #ecedf0;
    font-size: 9rem;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.24));

    /* @media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 3rem;
    } */

    @media only screen and (max-width: 576px) {
      font-size: 5rem;
    }
  }
`;

export const ContactLinkedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.292vw;

  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  .link {
    text-decoration: none;
    color: #0e76a8;
    font-size: 8rem;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.24));

    /* @media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 3rem;
    } */

    @media only screen and (max-width: 576px) {
      font-size: 5rem;
    }
  }
`;
