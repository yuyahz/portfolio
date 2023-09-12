import React from "react";
// import { Parallax } from "react-scroll-parallax";
import {
  ContactContainer,
  ContactIconFrame,
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
      <ContactText>let’s discuss how I can help you.</ContactText>
      <ContactIconFrame>
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
      </ContactIconFrame>
    </ContactContainer>
  );
};

export default Contact;
