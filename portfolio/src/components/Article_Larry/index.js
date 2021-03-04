import React from "react";
import { motion } from "framer-motion";
import {
  LarryContainer,
  LarryTitle,
  LarryColumn,
  LarryWrapper,
  Icon,
  IconWrapper,
  LarryH1,
  LarryH2,
  LarryP,
  LarryCol,
  Image,
} from "./LarryElements";
import LarryArticle_1 from "../../images/LarryArticle_1.png";
import LarryArticle_2 from "../../images/LarryArticle_2.png";
import LarryArticle_3 from "../../images/LarryArticle_3.png";
import LarryArticle_4 from "../../images/LarryArticle_4.png";

const Article_Larry = () => {
  return (
    <LarryContainer id="larry">
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 700,
          opacity: 0,
        }}
        exit={{
          x: -700,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <IconWrapper>
          <Icon to="/">Yuya.Works</Icon>
        </IconWrapper>
        <LarryWrapper>
          <LarryTitle>Living Your Most Authentic Life Possible</LarryTitle>
          <LarryH2>Platform for Publications Introduction website</LarryH2>
          <div style={{ textAlign: "center" }}>
            <Image src={LarryArticle_1} id="2" />
          </div>
          <LarryH1>Background</LarryH1>
          <LarryP>
            Larry had just published a book about Parkin's disease, which he
            also suffers from, and was trying to create a website to spread the
            book around the world. He then contacted the school through Ribpen
            and started the project with us because he met the final project
            recruitment requirements.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            We divided into four groups and competed for Larry's trust. And I
            was in charge of all the first stage presentations, and I was
            selected from four groups and succeeded in winning his trust.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image src={LarryArticle_2} id="2" />
          </div>
          <LarryH1>My role</LarryH1>
          <LarryP>
            I worked on the project as a UI/UX designer, together with a and the
            development team.
          </LarryP>
          <LarryP>
            The image above is the landing page that I first proposed and gained
            credibility.
          </LarryP>
          <LarryH1 style={{ marginTop: "5rem" }}>Challenge</LarryH1>
          <LarryP>
            The intention of having a home page was certainly to make money for
            books, but another intention was to share his own experience and
            knowledge. One of the reasons he decided to create a site was
            because he wanted to convey his own words to other Parkinson's
            patients on the website. He already has his own blog, and it was
            also a question of how his blog would appear on the website.
          </LarryP>
          <LarryH1 style={{ marginTop: "5rem" }}>Solution</LarryH1>
          <LarryP>
            My first job when this project started was to guide the team on the
            best path towards the goals of the project. Therefore, I was
            responsible for building each section of the project, designing it
            for different devices, managing the timeline, giving detailed
            instructions to each developer, and overseeing the whole process.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            For those who are unaware of Parkinson's disease, it will only be
            perceived as the name of the disease. But it wouldn't seem like a
            very mild illness to strangers. Larry thought he would give hope and
            courage to other patients based on his years of fighting experience.
            In order to convey this feeling to the website, it is necessary to
            firmly build the Larry brand to have a strong message to end-users
            with design, attractive and consistent branding that is not found on
            general medical sites. And I was convinced that the achievement was
            the goal of this project.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            Design methods used during the project included journey mapping,
            UI/UX design, and prototyping solutions.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image src={LarryArticle_3} id="3" />
            <Image style={{ margin: "0" }} src={LarryArticle_4} id="4" />
          </div>
          <LarryP style={{ marginTop: "5rem" }}>
            De
          </LarryP>
          {/* <LarryColumn>
            <LarryCol>1</LarryCol>
            <LarryCol>2</LarryCol>
            <LarryCol>3</LarryCol>
            <LarryCol>4</LarryCol>
          </LarryColumn> */}
        </LarryWrapper>
      </motion.div>
    </LarryContainer>
  );
};

export default Article_Larry;
