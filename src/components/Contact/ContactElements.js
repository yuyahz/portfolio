import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #faf8f6;

  @media only screen and (max-width: 960px) {
    height: 62.5vw;
  }
`;

export const ContactIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    color: #ffff;
    font-size: 5rem;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.24));

    @media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 3rem;
    }
  }
`;

export const ContactLinkedIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;

  &:hover {
    transform: translateY(-15px);
    cursor: pointer;
    transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  .link {
    text-decoration: none;
    color: #0e76a8;
    font-size: 5rem;
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.24));

    @media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 3rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 3rem;
    }
  }
`;
