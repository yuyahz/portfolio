import styled, { keyframes } from "styled-components";
import { Link as LinkS } from "react-scroll";

export const BannerContainer = styled.div`
  width: 100%;
  background: var(--index-bg);
  color: var(--primary-txt-color);
  font-weight: 100;
  font-size: 2.5rem;
  line-height: 1.2;

  @media only screen and (max-width: 1920px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 540px) {
    font-size: 4.44vw;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 100%;
  padding-bottom: 17rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 26.33vw;
  }
`;

export const BannerLinks = styled(LinkS)`
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
  text-decoration: none;
  border-top: 2px solid var(--primary-txt-color);

  .banner {
    width: 100%;
    padding: 20px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }

  .banner-label {
    top: -1px;
    position: relative;
    text-transform: uppercase;
  }

  .banner-arrow {
    margin: 0 40px 0;
  }

  .banner-border {
    width: 100%;
    bottom: 2px;
    height: 2px;
    background-color: var(--primary-txt-color);
    display: block;
    position: absolute;
    left: 0;
  }
`;
