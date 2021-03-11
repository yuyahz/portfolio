import React from "react";
import { motion } from "framer-motion";
import {
  VectorContainer,
  VectorTitle,
  VectorGrid,
  VectorWrapper,
  Icon,
  IconWrapper,
  VectorH1,
  VectorH2,
  VectorP,
  VectorCol,
  Image,
  VideoBg,
  Feedback,
} from "./VectorElements";

const Article_Vector = () => {
  return (
    <VectorContainer id="Vector">
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
        <VectorWrapper>
          <VectorTitle>Living Your Most Authentic Life Possible</VectorTitle>
          <VectorH2>Platform for Publications Introduction website</VectorH2>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_1} id="2" />
          </div> */}
          <VectorH1>Background</VectorH1>
          <VectorP>
            Vector had just published a book about Parkin's disease, which he
            also suffers from, and was trying to create a website to spread the
            book around the world. He then contacted the school through Ribpen
            and started the project with us because he met the final project
            recruitment requirements.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            We divided into four groups and competed for Vector's trust. And I
            was in charge of all the first stage presentations, and I was
            selected from four groups and succeeded in winning his trust.
          </VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_2} id="2" />
          </div> */}
          <VectorH1>My role</VectorH1>
          <VectorP>
            I worked on the project as a UI/UX designer, together with a and the
            development team.
          </VectorP>
          <VectorP>
            The image above is the first prototype that I first proposed and
            gained credibility.
          </VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>Challenge</VectorH1>
          <VectorP>
            The intention of having a home page was certainly to make money for
            books, but another intention was to share his own experience and
            knowledge. One of the reasons he decided to create a site was
            because he wanted to convey his own words to other Parkinson's
            patients on the website. He already has his own blog, and it was
            also a question of how his blog would appear on the website.
          </VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>Solution</VectorH1>
          <VectorP>
            My first job when this project started was to guide the team on the
            best path towards the goals of the project. Therefore, I was
            responsible for building each section of the project, designing it
            for different devices, managing the timeline, giving detailed
            instructions to each developer, and overseeing the whole process.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            For those who are unaware of Parkinson's disease, it will only be
            perceived as the name of the disease. But it wouldn't seem like a
            very mild illness to strangers. Vector thought he would give hope and
            courage to other patients based on his years of fighting experience.
            In order to convey this feeling to the website, it is necessary to
            firmly build the Vector brand to have a strong message to end-users
            with design, attractive and consistent branding that is not found on
            general medical sites. And I was convinced that the achievement was
            the goal of this project.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            This way we could also achieve a more consistent user experience
            across the different end-users.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            Design methods used during the project included journey mapping,
            UI/UX design, and prototyping solutions. During the project, I also
            designed features needed for a wider launch.
          </VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_3} id="3" />
            <Image style={{ margin: "0" }} src={VectorArticle_4} id="4" />
          </div> */}
          <VectorP style={{ marginTop: "5rem" }}>
            Design and developer collaboration is a most challenging problem and
            there are many opportunities how to sync each other. All of design
            tooling that exists today isn't enforcing that behavior. All they do
            is attempt to do similar things. Unless design to development all
            share the same settings or agreed on setting, there is no real
            "bridge” between developers and designers.
          </VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_5} id="5" />
          </div> */}
          <VectorP>
            While some developers were inexperienced, it was a uneasy to proceed
            with the project in a limited time to convey the first instruction
            with the design tool. In order to get a better understanding of the
            design, I created it myself without using XD only at the beginning.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            After a few meetings with Vector, I saw what he really needed, so I
            decided to create a landing page and homepage to implement it
            concretely. The most important thing in doing so was to create a
            consistent design to get the most out of his brand.
          </VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_6} id="6" />
          </div> */}
          <VectorP style={{ marginTop: "1.5rem" }}>
            After a few meetings with Vector, I saw what he really needed, so I
            decided to create a landing page and homepage to implement it
            concretely. The most important thing in doing so was to create a
            consistent design to get the most out of his brand.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            The problem is that if we were able to communicate with the clients
            deeper in terms of functionality during the meeting, I think the
            project would have progressed a little faster. It's a problem with
            every project, regardless of language or culture, but the challenge
            is how to deal with it. I've learned a lot from this experience and
            I'm ready to move on to the next stage.
          </VectorP>
          {/* <VectorGrid style={{ paddingRight: "3.5rem" }}>
            <VectorCol>
              <div>
                <VideoBg
                  autoPlay
                  loop
                  muted
                  playsinline
                  src={VectorMovie_1}
                  type="video/mp4"
                />
              </div>
            </VectorCol>
            <VectorCol>
              <div>
                <VideoBg
                  autoPlay
                  loop
                  muted
                  src={VectorMovie_2}
                  type="video/mp4"
                />
              </div>
              <VectorP style={{ textAlign: "right", fontSize: "14px" }}>
                Motion prototypes
              </VectorP>
            </VectorCol>
          </VectorGrid> */}
          <VectorP style={{ marginTop: "2rem" }}>
            At the beginning, I didn't plan to create blog content, but at the
            time of the meeting, I received a request to create a blog section,
            so I decided to do it in a hurry. At first, it was a key to create
            individual blog article pages on the homepage, but since Vector
            wanted to make the system simple to update and edit, end-users can
            touch the outline of the article and assist clicking. I designed a
            UI that possible to do it.
          </VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_7} id="7" />
          </div> */}
          <VectorH1>The outcome</VectorH1>
          <VectorP>
            The essential intention of this project is to make Vector's
            experiences and books known to various people. Not to let people
            know about their suffering, but to convey their hope. I was
            convinced that at least my design would reach as many people as
            possible.
          </VectorP>
          {/* <VectorColumn>
            <VectorCol>1</VectorCol>
            <VectorCol>2</VectorCol>
            <VectorCol>3</VectorCol>
            <VectorCol>4</VectorCol>
          </VectorColumn> */}
        </VectorWrapper>
      </motion.div>
    </VectorContainer>
  );
};

export default Article_Vector;
