import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(218, 218, 218, 1) 100%
  );
`;

export const FooterWrap = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (max-width: 970px) {
    max-width: 600px;
  }

  @media screen and (max-width: 520px) {
    margin-top: 4rem;
  }
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;

  .bottom {
    color: #010606;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1.4px;
    margin-right: auto;
    margin-bottom: 7%;

    .link {
      text-decoration: none;
      color: #0069da;
    }

    &:hover {
      transform: translateY(-10px);
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    }
  }
`;

export const FooterClose = styled.h1`
  color: #010606;
  font-size: 48px;
  margin-right: auto;
  margin-bottom: 2%;

  @media screen and (max-width: 520px) {
    font-size: 32px;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  margin-bottom: 30px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 5px auto 0 auto;

  @media screen and (max-width: 970px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #838383;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #838383;
  justify-content: start;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #838383;
  font-size: 24px;
`;
