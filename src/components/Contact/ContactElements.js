import styled from "styled-components";

export const ContactContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  overflow: hidden;
  background-color: var(--secondary-bg);
`;

export const ContactWrapper = styled.div`
  margin: 0 0 110px 100px;

  @media only screen and (max-width: 960px) {
    margin: 0 15px 0 15px;
  }

  p {
    font-weight: 100;
    font-size: 18vw;
    color: var(--fourth-txt-color);
    line-height: 0.9;
    white-space: nowrap;

    @media only screen and (min-width: 2560px) {
      font-size: 470px;
    }
    @media only screen and (max-width: 2159px) {
      font-size: 17.8vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 21vw;
      line-height: 1.1;
    }
  }
`;

export const ContactContentsLg = styled.div`
  padding: 6rem 3.5rem 6rem 3.5rem;

  @media only screen and (max-width: 960px) {
    display: none;
  }

  div {
    display: inline-block;

    .contact {
      margin: 2rem 0 0 4.5rem;
      border-bottom: 3px solid var(--secondary-bg);
      transition: 0.3s ease;

      &:hover {
        padding: 0 0 6px 0;
        border-color: var(--fourth-txt-color);
      }
    }

    a {
      text-decoration: none;
    }
  }

  p {
    color: var(--fourth-txt-color);
    font-weight: 300;
    font-size: 3rem;
  }

  img {
    width: 3rem;
    margin-right: 1.5rem;
  }
`;

export const ContactContentsSm = styled.div`
  padding: 23px 23px 10vw 23px;

  @media only screen and (min-width: 960.999px) {
    display: none;
  }

  div {
    display: inline-block;

    .contact {
      margin-top: 5vw;
      border-bottom: 3px solid var(--secondary-bg);
      transition: 0.3s ease;

      &:hover {
        padding: 0 0 6px 0;
        border-color: var(--fourth-txt-color);
      }
    }

    a {
      text-decoration: none;
    }
  }

  p {
    color: var(--fourth-txt-color);
    font-weight: 300;
    font-size: 4.44vw;
  }

  img {
    /* display: flex;
    width: 9vw;
    margin-left: auto;
    margin-right: 44px;
    margin-bottom: 1rem; */
    width: 9vw;
    margin-bottom: 0.2rem;
  }
`;
