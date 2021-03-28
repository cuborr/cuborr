import React from 'react';
import styled from 'styled-components';

export type ButtonComponentProps = {
  children?: HTMLCollection | string | JSX.Element;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonComponentProps>`
  padding: 0 12pt;
  color: var(--color-bg-light);
  font-size: var(--font-size-r);
  height: 32pt;
  font-weight: 700;
  background-color: var(--color-blue);
  border: none;
  border-radius: var(--border-radius-s);
  appearance: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const Button = ({ onClick, children, ...props }: ButtonComponentProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};
