import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import {
  LarryContainer,
  LarryTitle,
  LarryGrid,
  LarryWrapper,
  Icon,
  IconWrapper,
  LarryH1,
  LarryH2,
  LarryP,
  LarryCaption,
  LarryCol,
  Image,
  ImageTop,
  VideoBg,
  Feedback,
} from "./LarryElements";
import LarryArticle_11 from "../../images/LarryArticle_11.png";
import LarryArticle_2 from "../../images/LarryArticle_2.png";
import LarryArticle_3 from "../../images/LarryArticle_3.png";
import LarryArticle_4 from "../../images/LarryArticle_4.png";
import LarryArticle_5 from "../../images/LarryArticle_5.png";
import LarryArticle_6 from "../../images/LarryArticle_6.png";
import LarryArticle_7 from "../../images/LarryArticle_7.png";
import LarryArticle_8 from "../../images/LarryArticle_8.png";
import LarryArticle_9 from "../../images/LarryArticle_9.png";
import LarryMovie_1 from "../../videos/LarryMovie_1.mp4";
import LarryMovie_2 from "../../videos/LarryMovie_2.mp4";

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
          <LarryH2>
            Larry Linton was tasked with creating his own website, addressing
            the unique needs for the publications introduction website.
          </LarryH2>
          <Parallax y={[-15, 15]} tagOuter="figure">
            <div style={{ textAlign: "center" }}>
              <ImageTop src={LarryArticle_11} id="" />
            </div>
          </Parallax>
          <LarryH1>Background</LarryH1>
          <LarryP>
            Larry had just published a book about Parkinson’s disease, which he
            also suffers from, and was trying to create a website to spread the
            book around the world. He then contacted the school through Riipen
            and started the project with us because he met the final project
            recruitment requirements.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            We divided into four groups and competed for Larry's trust. And I
            was in charge of all the first stage presentations, and I was
            selected from four groups and succeeded in winning his trust.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={LarryArticle_2} id="" />
          </div>
          <LarryCaption>Winning designs for final project.</LarryCaption>
          <LarryH1>My role</LarryH1>
          <LarryP>
            I worked on the project as a UI/UX designer, together with the
            development team.
          </LarryP>
          <LarryP>
            The image above is the first prototype that I first proposed and
            gained credibility.
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
            This way we could also achieve a more consistent user experience
            across the different end-users.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            Design methods used during the project included journey mapping,
            UI/UX design, and prototyping solutions. During the project, I also
            designed features needed for a wider launch.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image
              style={{ marginBottom: "0rem" }}
              src={LarryArticle_3}
              id=""
            />
            <LarryCaption style={{ marginBottom: "1rem" }}>
              Flow sheet.
            </LarryCaption>
            <Image
              style={{ margin: "1rem 0 0 0" }}
              src={LarryArticle_4}
              id=""
            />
          </div>
          <LarryCaption>
            First color combinations and instruction for developers.
          </LarryCaption>
          <LarryP>
            Design and developer collaboration is a most challenging problem and
            there are many opportunities how to sync each other. All the design
            tools that exist today isn't enforcing that behavior. All they do is
            attempt to do similar things. Unless design to development all share
            the same settings or agreed on setting, there is no real "bridge”
            between developers and designers.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={LarryArticle_5} id="" />
          </div>
          <LarryCaption>First design instructions for developers.</LarryCaption>
          <LarryP>
            While some developers were inexperienced, it was a difficult to
            proceed with the project in a limited time to convey the first
            instruction with the design tool. In order to get a better
            understanding of the design, I created it myself without using Adobe
            XD only at the beginning.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            After a few meetings with Larry, I saw what he really needed, so I
            decided to create a landing page and homepage to implement it
            concretely. The most important thing in doing so was to create a
            consistent design to get the most out of his brand.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={LarryArticle_6} id="" />
          </div>
          <LarryCaption>Overall art board view.</LarryCaption>
          <LarryP>
            After a few meetings with Larry, I saw what he really needed, so I
            decided to create a landing page and homepage to implement it
            concretely. The most important thing in doing so was to create a
            consistent design to get the most out of his brand.
          </LarryP>
          <LarryP style={{ marginTop: "1.5rem" }}>
            The problem is that if we were able to communicate with the clients
            deeper in terms of functionality during the meeting, I think the
            project would have progressed a little faster. It's a problem with
            every project, regardless of language or culture, but the challenge
            is how to deal with it. I've learned a lot from this experience and
            I'm ready to move on to the next stage.
          </LarryP>
          <LarryGrid style={{ paddingRight: "3.5rem" }}>
            <LarryCol>
              <div>
                <VideoBg
                  autoPlay
                  playsInline
                  loop
                  muted
                  src={LarryMovie_1}
                  type="video/mp4"
                />
              </div>
            </LarryCol>
            <LarryCol>
              <div>
                <VideoBg
                  autoPlay
                  playsInline
                  loop
                  muted
                  src={LarryMovie_2}
                  type="video/mp4"
                />
              </div>
              <LarryCaption style={{ textAlign: "right" }}>
                Motion prototypes
              </LarryCaption>
            </LarryCol>
          </LarryGrid>
          <LarryP style={{ marginTop: " 3rem" }}>
            At the beginning, I didn't plan to create blog content, but at the
            time of the meeting, I received a request to create a blog section,
            so I decided to do it in a hurry. At first, it was a key to create
            individual blog article pages on the homepage, but since Larry
            wanted to make the system simple to update and edit, end-users can
            touch the outline of the article and assist clicking. I designed a
            UI that possible to do it.
          </LarryP>
          <div style={{ textAlign: "center" }}>
            <Image style={{ marginBottom: "0" }} src={LarryArticle_7} id="" />
          </div>
          <LarryCaption>Finalized design images.</LarryCaption>
          <LarryH1>The outcome</LarryH1>
          <LarryP>
            The essential intention of this project is to make Larry's
            experiences and books known to people all over the world. Not to let
            people know about their suffering, but to convey their hope. I was
            convinced that at least my design would reach as many people as
            possible.
          </LarryP>
          {/* feedback section */}
          <Feedback>
            <div style={{ textAlign: "center" }}>
              <Image
                src={LarryArticle_8}
                id=""
                style={{ width: "4rem", marginBottom: "1rem" }}
              />
            </div>
            <LarryH1 className="title">
              " The end product exceeded my expectations. Thanks to each member
              of the team, the website captures my personality - it has a soul!!
              "
            </LarryH1>
            <LarryP style={{ fontSize: "14px", lineHeight: "1.5" }}>
              It’s one thing to design a website: With so many online resources
              available to guide you - both free and subscription based - a
              website can be uploaded and be functioning within hours. But, to
              have a website designed that captures the wishes and personality
              of the client is quite different. This presents a unique
              challenge. It takes talent. It takes skill, and it takes patience.
              I was fortunate to experience this with the students from
              Cornerstone International Community College of Canada. Cornerstone
              is a fully accredited college offering diploma programs in Web &
              Mobile App Development, Network Solutions & System Specialist,
              International Business Management, Digital Marketing Specialist,
              Hospitality Management, and Advertising and Graphic Design, as
              well as, English as Second Language training. Their high-quality
              educational services and career counselling are delivered within a
              positive team environment. It serves Canadian and international
              students from over 20 countries, and is committed to assisting
              their students obtain gainful employment in the shortest possible
              time. A team consisting of final year students was assigned to
              assist me with the design of a landing page and website to support
              a book launch and my personal brand. The team comprised of: Ayaka
              Tsubouchi Yuya Hashirizaki Anzu Nakayama Gabriel Sciacca Dias
              Alexandre Bellini Dias Each team member was engaged and fully
              invested in the project. Over a series of zoom calls, questions
              were asked of me on what I was seeking to achieve. The end product
              exceeded my expectations. Thanks to each member of the team, the
              website captures my personality - it has a soul! I would encourage
              any employer who may be looking to hire engaged, creative and
              talented students to look no further than Cornerstone, and these
              students.
            </LarryP>
            <div style={{ textAlign: "center" }}>
              <Image src={LarryArticle_9} id="" style={{ width: "40rem" }} />
            </div>
          </Feedback>
          {/* feedback section */}
        </LarryWrapper>
      </motion.div>
    </LarryContainer>
  );
};

export default Article_Larry;
