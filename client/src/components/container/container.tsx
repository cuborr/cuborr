import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  style?: string;
  children?: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div<ContainerProps>`
  /* widescreen */
  @media (min-width: 2560px) {
    padding: 0 var(--margin-g);
  }

  /* default */
  padding: 0 var(--margin-xxl);

  /* mobile */
  @media (max-width: 540px) {
    padding: 0 var(--margin-m);
  }
`;

export const Container = React.forwardRef((props: ContainerProps, ref: React.Ref<any>) => (
  <StyledContainer style={props.style} className={props.className} ref={ref}>
    {props.children}
  </StyledContainer>
));
