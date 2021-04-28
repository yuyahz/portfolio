import React from "react";
// import { Parallax } from "react-scroll-parallax";
import {
  ContactContainer,
  ContactInner,
  ContactText,
  ContactText1,
  ContactText2,
  ContactText3,
  ContactEmail,
  ContactLinkedIn,
  NavMail,
  Image,
} from "./ContactElements";
import { HiMail } from "react-icons/hi";
import * as AiIcons from "react-icons/ai";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactText1>Let's get in touch</ContactText1>
      <ContactText2>via and let’s discuss</ContactText2>
      <ContactText3>how I can help you.</ContactText3>
      <ContactText>
        Let's get in touch via and let’s discuss how I can help you.
      </ContactText>
      <ContactInner>
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
      </ContactInner>
    </ContactContainer>
  );
};

export default Contact;
