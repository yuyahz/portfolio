import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  touch-action: pan-y; /* Allow touch actions on mobile */

  // for index //
  @media (max-width: 1921px) and (min-width: 1024px) {
    max-width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 1023px) and (min-width: 480px) {
    max-width: 50%;
    margin: 0 auto;
  }
  @media (max-width: 479px) {
    max-width: 90%;
    margin: 0 auto;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
`;

export const SliderImage = styled.img`
  width: calc(100% - 20px); /* Subtracting the space on both sides */
  margin: 0 10px; /* Adding 10px margin on both sides */
  flex-shrink: 0;
  border: solid 2px var(--secondary-bg);
  border-radius: 15px;
  transition: opacity 0.5s ease-in-out;
  cursor: pointer; /* Add cursor pointer for better UX */
`;

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;

  @media only screen and (max-width: 480px) {
    gap: 6px;
    margin-top: 16px;
  }
`;

export const Dot = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ isActive }) => (isActive ? "#fe0000" : "#ff9999")};
  padding: ${({ isActive }) => (isActive ? "0 1.5rem" : "0")};
  border-radius: ${({ isActive }) => (isActive ? "10px" : "50%")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#fe0000" : "#ff6666")};
  }

  @media only screen and (max-width: 480px) {
    width: 9px;
    height: 9px;
    padding: ${({ isActive }) => (isActive ? "0 0.7rem" : "0")};
  }
`;
