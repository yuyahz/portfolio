import styled from "styled-components";

export const CaseContainer = styled.div`
  width: 100%;
  background: var(--index-bg);
  display: flex;
  justify-content: center;
`;

export const FullWidthWrapper = styled.div`
  max-width: 1400px;
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ imageLeft }) => (imageLeft ? "none" : "row-reverse")};
  padding-top: ${({ paddingStart }) => (paddingStart ? "8rem" : "0")};
  padding-bottom: ${({ paddingEnd }) => (paddingEnd ? "8rem" : "0")};

  @media only screen and (max-width: 1570px) {
    margin: 0 30px 0 110px;
  }

  @media only screen and (max-width: 960px) {
    padding-top: ${({ paddingStart }) => (paddingStart ? "26.33vw;" : "0")};
    padding-bottom: ${({ paddingEnd }) => (paddingEnd ? "26.33vw;" : "0")};
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px;
  }
`;

export const ColumnLgImg1 = styled.div`
  width: 100%;
  padding: 24px;
  display: ${({ imageActivate1 }) => (imageActivate1 ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`;

export const ColumnLgImg2 = styled.div`
  width: 100%;
  padding: 24px;
  display: ${({ imageActivate2 }) => (imageActivate2 ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`;

export const ColumnLgImg3 = styled.div`
  width: 100%;
  padding: 24px;
  display: ${({ imageActivate3 }) => (imageActivate3 ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`;

export const ColumnLgImg4 = styled.div`
  width: 100%;
  padding: 24px;
  display: ${({ imageActivate4 }) => (imageActivate4 ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`;

export const ColumnLg = styled.div`
  width: 100%;
  padding: 0 24px 24px 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  // md sm center //
  /* width: 100%; */

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    width: 40%;
  }

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const ColumnContentLg = styled.div`
  padding: 0 60px;

  @media only screen and (max-width: 540px) {
    padding: 0;
  }

  h2 {
    color: var(--primary-txt-color);
    font-weight: 700;
    font-size: 7rem;
    margin: 1rem 0;
    overflow-wrap: break-word;

    @media only screen and (max-width: 1440px) {
      font-size: 7.5vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
    @media only screen and (max-width: 540px) {
      margin: 0 0 1rem 0;
    }
  }

  .body {
    color: var(--primary-txt-color);
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
    @media only screen and (max-width: 540px) {
      margin-bottom: 2rem;
    }
  }

  a {
    @media only screen and (max-width: 1024px) {
      margin: 0 auto;
    }
  }
`;

export const TagWrapper = styled.div`
  display: flex;
`;

export const Tag = styled.div`
  width: fit-content;
  border-radius: 50px;
  background-color: var(--secondary-bg);
  margin: 0 16px 9px 0;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  .tagCopy {
    color: var(--primary-bg);
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }

  @media only screen and (max-width: 540px) {
    padding: 4px 10px;

    .tagCopy {
      font-size: 12px;
    }
  }
`;
