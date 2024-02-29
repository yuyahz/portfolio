import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaDribbble, FaBehance, FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

import {
  FooterContainer,
  FooterWrapper,
  FooterLinksWrapper,
  FootertText,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  // WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksWrapper>
          <FootertText>Thank you.</FootertText>
        </FooterLinksWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Yuya Hashirizaki
            </SocialLogo>
            {/* <WebsiteRights>dolla © {new Data().getFullYear()}All Right reserved.</WebsiteRights> */}
            <SocialIcons>
              <SocialIconLink
                href="https://dribbble.com/yuya-hashirizaki"
                target="_blank"
                aria-label="dribbble"
              >
                <FaDribbble />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.behance.net/yuyahashirizaki"
                target="_blank"
                aria-label="Instagram"
              >
                <FaBehance />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Yuya61"
                target="_blank"
                aria-label="github"
              >
                <FiGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/yuya-hashirizaki"
                target="_blank"
                aria-label="linkedIn"
              >
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
