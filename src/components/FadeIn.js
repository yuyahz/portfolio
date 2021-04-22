import React from "react";
import styled from "styled-components";
import InViewMonitor from "react-inview-monitor";

export const Up = ({ children, delay, margin = "-50%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInUp isActive={false} delay={delay}>
      {children}
    </FadeInUp>
  </InViewMonitor>
);

export const Down = ({ children, delay, margin = "-50%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDown isActive={false} delay={delay}>
      {children}
    </FadeInDown>
  </InViewMonitor>
);

export const Left = ({ children, delay, margin = "-50%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInLeft isActive={false} delay={delay}>
      {children}
    </FadeInLeft>
  </InViewMonitor>
);

export const Right = ({ children, delay, margin = "-50%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInRight isActive={false} delay={delay}>
      {children}
    </FadeInRight>
  </InViewMonitor>
);

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 1s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`;

const FadeInUp = styled(FadeIn)`
  opacity: 0;
  transition: opacity 1s ease, transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateY(60px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInDown = styled(FadeIn)`
  opacity: 0;
  transition: 4s opacity 0.5s ease, transform 3s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateY(-60px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInLeft = styled(FadeIn)`
  opacity: 0;
  transition: opacity 1s ease, transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateX(-60px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;

const FadeInRight = styled(FadeIn)`
  opacity: 0;
  transition: opacity 1s ease, transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateX(60px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;
