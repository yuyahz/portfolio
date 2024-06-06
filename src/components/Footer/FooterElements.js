import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: var(--secondary-bg);

  @media only screen and (min-width: 959.99px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

export const FooterWrapper = styled.div`
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

  @media screen and (max-width: 960px) {
    max-width: 600px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  max-width: 1000px;
  width: 100%;
  padding: 13% 0 3% 0;

  .bottom {
    color: var(--secondary-txt-color);
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1.4px;
    margin-right: auto;
    margin-bottom: 7%;
    margin-top: 2%;

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

export const FootertText = styled.h1`
  color: var(--fourth-txt-color);
  font-family: "GT";
  font-size: 48px;
  font-weight: 500;
  margin-right: auto;

  @media screen and (max-width: 960px) {
    margin: 0 auto;
  }

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

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  margin-bottom: 20px;
  font-family: "GT";
  font-weight: 300;
  font-size: 24px;
  letter-spacing: 1px;
  color: var(--fourth-txt-color);
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
`;

export const WebsiteRights = styled.small`
  color: var(--fourth-txt-color);
  justify-content: start;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 960px) {
    width: auto;
    max-width: 240px;
    margin-top: 24px;
  }
`;

export const SocialIconLink = styled.a`
  color: var(--primary-bg);
  font-size: 24px;
  transition: 0.3s ease;

  &:hover {
    padding: 0 0 16px 0;
  }

  @media screen and (max-width: 960px) {
    padding-left: 6vw;

    :first-child {
      padding-left: 0;
    }
  }
`;
