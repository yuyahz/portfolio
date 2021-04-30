import styled from "styled-components";

export const ContactContainer = styled.div`
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const ContactIconFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactText = styled.div`
  color: #010606;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1.4px;
  padding: 5% 0 3% 0;

  @media screen and (max-width: 520px) {
    font-size: 14px;
    padding: 11%;
  }
`;

export const ContactText1 = styled.div`
  font-size: 45px;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-decoration: none;
  white-space: nowrap;
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 9rem;
  -ms-user-select: none; /* IE 10+ */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  animation : flowing1 10s linear infinite;
}
@keyframes flowing1{
0% { transform: translateX(100%)}
100% { transform: translateX(-100%)}
}

@media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 5rem;
    }
`;

export const ContactText2 = styled.div`
  font-size: 45px;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-decoration: none;
  white-space: nowrap;
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 9rem;
  -ms-user-select: none; /* IE 10+ */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  animation : flowing2 15s linear infinite;
}
@keyframes flowing2{
0% { transform: translateX(100%)}
100% { transform: translateX(-100%)}
}

@media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 5rem;
    }
`;

export const ContactText3 = styled.div`
  font-size: 45px;
  font-weight: 900;
  letter-spacing: 0.1rem;
  text-decoration: none;
  white-space: nowrap;
  background: linear-gradient(
    329deg,
    rgba(68, 68, 68, 1) 60%,
    rgba(47, 48, 48, 1) 85%,
    rgba(1, 6, 6, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  font-size: 9rem;
  -ms-user-select: none; /* IE 10+ */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  animation : flowing3 20s linear infinite;
}
@keyframes flowing3{
0% { transform: translateX(100%)}
100% { transform: translateX(-100%)}
}

@media screen and (max-width: 896px) and (max-height: 427px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 520px) {
      font-size: 5rem;
    }
`;

export const ContactEmail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-30px);
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
    transform: translateY(-30px);
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
