import React from "react";
import { BannerContainer, BannerWrapper, BannerLinks } from "./BannerElements";
import { IoMdArrowDown } from "react-icons/io";
import * as FadeIn from "../FadeIn";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <BannerLinks
          to="larry"
          smooth={true}
          duration={700}
          spy={true}
          exact="true"
          offset={0}
          activeClass="active"
        >
          <div class="banner banner-with-link" data-intersection-id="banner-0">
            <FadeIn.Diagonal1>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
            </FadeIn.Diagonal1>
            <FadeIn.Diagonal2>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
            </FadeIn.Diagonal2>
            <FadeIn.Diagonal3>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
            </FadeIn.Diagonal3>
            <FadeIn.Diagonal4>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
            </FadeIn.Diagonal4>
            <FadeIn.Diagonal5>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
            </FadeIn.Diagonal5>
            <FadeIn.Diagonal6>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
              <span
                class="banner-label"
                style={{ transform: "translate(0px, 0px)" }}
              >
                WORKS
              </span>
              <span
                class="banner-arrow"
                style={{ transform: "translate(0px, 0px)" }}
              >
                <IoMdArrowDown />
              </span>
            </FadeIn.Diagonal6>
            <div
              class="banner-border"
              style={{ transform: "translate(0px, 0px)" }}
            ></div>
          </div>
        </BannerLinks>
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
