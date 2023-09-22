import React from "react";
// import { Parallax } from "react-scroll-parallax";
import {
  ContactContainer,
  ContactWrapper,
  ContactIconWrapper,
  ContactText,
  // ContactTickerTape,
  // ContactText1,
  // ContactText2,
  // ContactText3,
  ContactEmail,
  ContactLinkedIn,
} from "./ContactElements";
import { HiMail } from "react-icons/hi";
import * as AiIcons from "react-icons/ai";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactText>Ready to start a project?</ContactText>
        <div className="pr-text">
          <h2>Let's</h2>
          <h2 className="fancy-font">make</h2>
          <h2>something</h2>
          <h2 className="fancy-font">Amazing</h2>
        </div>
        <section className="smile"></section>
        <ContactIconWrapper>
          <ContactEmail>
            <a target="_blank" href="mailto:hashirizaki61@gmail.com">
              <HiMail className="link" />
            </a>
          </ContactEmail>
          <ContactLinkedIn>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yuya-hashirizaki/"
            >
              <AiIcons.AiFillLinkedin className="link" />
            </a>
          </ContactLinkedIn>
        </ContactIconWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
