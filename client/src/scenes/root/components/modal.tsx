import React from 'react';
import styled from 'styled-components';
// assets
import { Icon } from 'src/components';

interface IModalProps {
  onClose: () => any;
  children: JSX.Element;
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--navbar-height);
  top: 0;
  left: 0;
  padding-left: var(--margin-l);
  cursor: pointer;
  svg {
    fill: var(--color-text-light);
  }
  @media (max-width: 625px) {
    padding-left: var(--margin-r);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #00000077;
`;

export const Modal: React.FC<IModalProps> = ({ children, onClose }) => (
  <Container>
    <Overlay />
    {children}
    <StyledIcon name="close" onClick={onClose} size="26pt" />
  </Container>
);
