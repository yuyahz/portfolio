import React from "react";
// import { Parallax } from "react-scroll-parallax";
import {
  ContactContainer,
  ContactInner,
  ContactEmail,
  ContactLinkedIn,
  ContactInstagram,
  Image,
} from "./ContactElements";
import Daruma from "../../images/Daruma.png";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactInner>
        <ContactEmail>E</ContactEmail>
        <ContactLinkedIn>L</ContactLinkedIn>
        <ContactInstagram>I</ContactInstagram>
      </ContactInner>
    </ContactContainer>
  );
};

export default Contact;
