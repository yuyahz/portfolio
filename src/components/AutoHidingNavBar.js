import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ArticleHeader = styled.div`
  width: 100%;
  max-width: 2560px;
  margin: 0 auto;
  padding: 44px 36px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.4s cubic-bezier(0.87, 0, 0.13, 1);
  transform: ${(props) =>
    props.hideNav ? "translateY(-100%)" : "translateY(0)"};

  @media only screen and (max-width: 960px) {
    padding: 24px 34px;
  }
`;

const ArticleLogoSm = styled.div`
  // Changed from Link to div
  text-decoration: none;
  cursor: pointer; // Added cursor pointer
`;

const LogoTop = styled.h4`
  color: var(--primary-txt-color);
  font-family: "GT";
  font-weight: 500;
  font-size: 1.5rem;

  @media only screen and (max-width: 960px) {
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 360px) {
    font-size: 5.333vw;
  }
`;

const BackButton = styled.button`
  max-width: 200px;
  margin-left: auto;
  border-radius: 50px;
  border: solid 2px var(--secondary-bg);
  background: var(--primary-bg);
  white-space: nowrap;
  padding: 10px 25px;
  color: var(--primary-txt-color);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s cubic-bezier(0.65, 0, 0.16, 1);

  &:hover {
    background-color: var(--secondary-bg);
    color: var(--primary-bg);
  }

  @media only screen and (max-width: 960px) {
    font-size: 12px;
    padding: 6px 20px;
  }
`;

const AutoHidingNavBar = () => {
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY >= 100) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <ArticleHeader hideNav={hideNav}>
      <ArticleLogoSm onClick={scrollToTop}>
        <LogoTop>Yuya Hashirizaki</LogoTop>
      </ArticleLogoSm>
      <BackButton onClick={goBack}>Back</BackButton>
    </ArticleHeader>
  );
};

export default AutoHidingNavBar;
