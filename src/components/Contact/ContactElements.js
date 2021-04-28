import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContactInner = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const ContactEmail = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 50%;
  background: rgba(218, 218, 218, 1);
`;

export const ContactLinkedIn = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 50%;
  background: rgba(158, 227, 255, 1);
`;

export const ContactInstagram = styled.div`
  height: 100vh;
  width: 100%;
  border-radius: 50%;
  background: #d6249f;
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
`;

export const Image = styled.img`
  width: 38%;

  @media screen and (min-width: 1441px) {
    width: 20%;
  }

  @media screen and (max-width: 970px) {
    width: 45%;
  }

  /* for vertical mobile */
  @media screen and (max-width: 896px) and (max-height: 427px) {
    width: 30%;
  }

  @media screen and (max-width: 520px) {
    width: 55%;
  }
`;
