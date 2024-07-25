import React from "react";
// import { Parallax } from "react-scroll-parallax";
import {
  ContactContainer,
  ContactWrapper,
  ContactContentsLg,
  ContactContentsSm,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <ContactWrapper>
        <ContactContentsLg>
          <p>
            <img src="https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"></img>
            Ready to start a project?
          </p>
          <div>
            <a target="_blank" href="mailto:hashirizaki61@gmail.com">
              <p className="contact">Contact</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yuya-hashirizaki/"
            >
              <p className="contact">Linkedin</p>
            </a>
          </div>
        </ContactContentsLg>
        <ContactContentsSm>
          <div className="contactImg">
            <img src="https://win98icons.alexmeub.com/icons/png/network_internet_pcs_installer-2.png"></img>
          </div>
          <p>Ready to start a project?</p>
          <div>
            <a target="_blank" href="mailto:hashirizaki61@gmail.com">
              <p className="contact">Contact</p>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yuya-hashirizaki/"
            >
              <p className="contact">Linkedin</p>
            </a>
          </div>
        </ContactContentsSm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
