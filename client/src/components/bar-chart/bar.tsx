import React from 'react';
import styled, { keyframes } from 'styled-components';

interface BarProps {
  rgb?: string;
  percentage?: string;
}

const Container = styled.div<BarProps>`
  display: flex;
  background-color: ${({ rgb }) => `rgba(${rgb}, 0.2)`};
  height: 0.8rem;
  border-radius: 0.4rem;
  overflow: hidden;
`;

const barAnimation = (percentage) => keyframes`
    from { width: 0%; }
    to { width: ${percentage} }
`;

const StyledBar = styled.div<BarProps>`
  display: block;
  width: 0%;
  background-color: ${({ rgb }) => `rgb(${rgb})`};
  border-radius: 0.4rem;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
  animation-name: ${({ percentage }) => barAnimation(percentage)};
`;

export const Bar: React.FC<BarProps> = ({ rgb, percentage }) => {
  return (
    <Container rgb={rgb}>
      <StyledBar rgb={rgb} percentage={percentage} />
    </Container>
  );
};

Bar.defaultProps = {
  rgb: 'var(--color-blue-rgb)',
  percentage: '0%',
};
