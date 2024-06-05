import React from "react";
import styled from "styled-components";
import InViewMonitor from "react-inview-monitor";

export const Up = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInUp isActive={false} delay={delay}>
      {children}
    </FadeInUp>
  </InViewMonitor>
);

export const Down = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDown isActive={false} delay={delay}>
      {children}
    </FadeInDown>
  </InViewMonitor>
);

export const Left = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInLeft isActive={false} delay={delay}>
      {children}
    </FadeInLeft>
  </InViewMonitor>
);

export const LeftWorks = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInLeftWorks isActive={false} delay={delay}>
      {children}
    </FadeInLeftWorks>
  </InViewMonitor>
);

export const Right = ({ children, delay, margin = "-20%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInRight isActive={false} delay={delay}>
      {children}
    </FadeInRight>
  </InViewMonitor>
);

export const Diagonal1 = ({ children, delay, margin = "-1%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDiagonal1 isActive={false} delay={delay}>
      {children}
    </FadeInDiagonal1>
  </InViewMonitor>
);

export const Diagonal2 = ({ children, delay, margin = "-1%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDiagonal2 isActive={false} delay={delay}>
      {children}
    </FadeInDiagonal2>
  </InViewMonitor>
);

export const Diagonal3 = ({ children, delay, margin = "-1%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDiagonal3 isActive={false} delay={delay}>
      {children}
    </FadeInDiagonal3>
  </InViewMonitor>
);

export const Diagonal4 = ({ children, delay, margin = "-1%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDiagonal4 isActive={false} delay={delay}>
      {children}
    </FadeInDiagonal4>
  </InViewMonitor>
);

export const Diagonal5 = ({ children, delay, margin = "-1%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDiagonal5 isActive={false} delay={delay}>
      {children}
    </FadeInDiagonal5>
  </InViewMonitor>
);

export const Diagonal6 = ({ children, delay, margin = "-1%" }) => (
  <InViewMonitor childPropsInView={{ isActive: true }} intoViewMargin={margin}>
    <FadeInDiagonal6 isActive={false} delay={delay}>
      {children}
    </FadeInDiagonal6>
  </InViewMonitor>
);

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 0.6s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
`;

const FadeInUp = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateY(60px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInDown = styled(FadeIn)`
  opacity: 0;
  transition: 1s opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateY(-60px);
  ${({ isActive }) => isActive && `transform: translateY(0px);`}
`;

const FadeInLeft = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateX(-60px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;

const FadeInLeftWorks = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateX(-60px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;

const FadeInRight = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translateX(60px);
  ${({ isActive }) => isActive && `transform: translateX(0px);`}
`;

const FadeInDiagonal1 = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translate(-150px, -150px);
  ${({ isActive }) => isActive && `transform: translate(0px, 0px);`}
`;

const FadeInDiagonal2 = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.3s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translate(-150px, -150px);
  ${({ isActive }) => isActive && `transform: translate(0px, 0px);`}
`;

const FadeInDiagonal3 = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.6s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translate(-150px, -150px);
  ${({ isActive }) => isActive && `transform: translate(0px, 0px);`}
`;

const FadeInDiagonal4 = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 1.9s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translate(-150px, -150px);
  ${({ isActive }) => isActive && `transform: translate(0px, 0px);`}
`;

const FadeInDiagonal5 = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.1s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translate(-150px, -150px);
  ${({ isActive }) => isActive && `transform: translate(0px, 0px);`}
`;

const FadeInDiagonal6 = styled(FadeIn)`
  opacity: 0;
  transition: opacity 0.6s ease, transform 2.4s cubic-bezier(0.25, 1, 0.5, 1);
  ${({ isActive }) => isActive && `opacity: 1;`}
  ${({ delay }) => delay && `transition-delay: ${delay}ms;`}
  transform: translate(-150px, -150px);
  ${({ isActive }) => isActive && `transform: translate(0px, 0px);`}
`;
