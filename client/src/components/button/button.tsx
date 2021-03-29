import React from 'react';
import styled from 'styled-components';

export type ButtonComponentProps = {
  children?: HTMLCollection | string | JSX.Element;
  onClick: (e?: React.MouseEvent) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<ButtonComponentProps>`
  padding: 0 14pt;
  color: var(--color-bg-dark);
  font-size: var(--font-size-r);
  height: 38pt;
  font-weight: 600;
  background-color: var(--color-green);
  border: none;
  border-radius: 19pt;
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
