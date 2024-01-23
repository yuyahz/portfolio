import styled from "styled-components";

export const DropdownContainer = styled.div`
  /* background: var(--primaly-bg); */
  width: 100%;
  max-width: 1140px;
`;

export const DropdownWrapper = styled.div`
  width: 100%;
`;

export const DropdownInnerWrapper = styled.div`
  .dropdown-container {
    max-width: 1140px;
  }

  .dropdown-trigger {
    color: var(--primary-txt-color);
    font-weight: 500;
    font-size: 3rem;
    padding: 16px 0;

    @media only screen and (max-width: 1024px) {
      padding: 1.57vw 0;
    }

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }

    span {
      color: var(--primary-txt-color);
      font-weight: 500;
      font-size: 3rem;

      @media only screen and (max-width: 960px) {
        /* padding-left: 3.33vw; */
        font-size: 4.44vw;
      }
    }

    //// Chips /////
    .dropdown-chip.inactive {
      display: inline-block;
      transition: 0.7s;
      transform: rotate(-360deg);
      transition-timing-function: ease-in-out;
      border-radius: 50px;
      border: solid 2px var(--secondary-bg);
      background: var(--primaly-bg);
      white-space: nowrap;
      padding: 10px 25px;
    }

    .dropdown-chip.inactive::after {
      content: "+";
      font-weight: 100;
      transform: translateX(4rem);
      transition-delay: calc(250ms * var(--delay));
      transition-timing-function: ease-in-out;
      transition-duration: 500ms;
    }

    .dropdown-chip.active {
      position: absolute;
      margin-left: 24px;
      transition: 0.5s;
      transform: rotate(-3deg);
      transition-timing-function: ease-in-out;
      border-radius: 50px;
      border: solid 2px var(--secondary-bg);
      background-color: var(--secondary-bg);
      color: var(--inversed-txt-color);
      white-space: nowrap;
      padding: 10px 20%;

      @media only screen and (max-width: 768px) {
        margin-left: 16px;
      }
      @media only screen and (max-width: 540px) {
        margin-left: 6px;
        border: solid 1.5px var(--secondary-bg);
      }
    }

    .dropdown-chip.active::after {
      content: "+";
      position: absolute;
      font-weight: 100;
      transition: 0.5s;
      transform: rotate(-45deg);
      transition-timing-function: ease-in-out;
      color: var(--inversed-txt-color);
    }
  }

  //// Contents of chips /////
  .dropdown-contents {
    padding: 2rem 3rem;
    /* background: var(--primaly-bg); */
    border: solid 2px var(--secondary-bg);
    border-radius: 15px;

    @media only screen and (max-width: 960px) {
      padding: 2.5vw 5vw;
    }

    @media only screen and (max-width: 540px) {
      border: solid 1.5px var(--secondary-bg);
      padding: 3vw 6vw;
    }
  }

  .dropdown-contents.inactive {
    width: 100%;
    position: absolute;
    opacity: 0;
    /* background-color: var(--primary-txt-color);; */
    visibility: hidden;
    transform: translateX(4rem);
    transition-delay: calc(200ms * var(--delay));
    transition-timing-function: ease-in-out;
    transition-duration: 250ms;
  }

  .dropdown-contents.active {
    width: 100%;
    margin: 3rem 0 6rem 0;
    opacity: 1;
    visibility: visible;
    /* transform: translateX(1rem); */
    transition: 0.5s;
    /* transition-delay: calc(250ms * var(--delay)); */
    transition-timing-function: ease-in-out;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
      margin: 2.5rem 0 5.5rem 0;
    }
    @media only screen and (max-width: 768px) {
      margin: 2rem 0 4.5rem 0;
    }
    @media only screen and (max-width: 540px) {
      margin: 1.75rem 0 2.75rem 0;
    }
  }

  p {
    display: flex;
    align-items: flex-end;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--secondary-txt-color);

    &:last-child {
      padding-left: 6rem;
      margin-bottom: 3px;
    }

    &:first-child {
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: 960px) {
      font-size: 3.33vw;

      &:last-child {
        font-size: 2.083vw;
        padding-left: 3.33vw;
      }

      &:first-child {
        font-size: 2.083vw;
        margin-bottom: 1.25vw;
      }
    }
  }

  h4 {
    font-size: 2rem !important;
    font-family: "GT";
    font-weight: 500 !important;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 960px) {
      font-size: 3.33vw !important;
    }
  }

  /* p span {
    font-size: 2rem;
    font-weight: 300;
    color: var(--secondary-txt-color);
  } */

  .dropdown-contents ul li {
    border-top: 2px solid var(--secondary-bg);
    list-style: none;
    padding: 20px 0;

    &:nth-child(1) {
      border-top: none;
    }

    @media only screen and (max-width: 960px) {
      padding: 2.083vw 0;
    }

    @media only screen and (max-width: 540px) {
      border-top: 1.5px solid var(--secondary-bg);
    }
  }

  .dropdown-contents li div {
    display: flex;
    justify-content: space-between !important;
  }

  .dropdown-Item {
    display: flex;
    margin: 10px auto;
  }

  .dropdown-Item p {
    margin: 0 10px 10px 0;
    transition: 0.5s ease;
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    &:nth-child(1) {
      padding-right: 2vw;
    }
    &:nth-child(2) {
      padding-left: 2vw;
    }
  }
`;
