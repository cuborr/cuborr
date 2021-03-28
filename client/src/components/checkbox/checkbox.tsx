import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  className?: string;
  checked: boolean;
  onClick: any;
}

interface StyleProps {
  checked: boolean;
}

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<StyleProps>`
  display: inline-block;
  width: 16pt;
  height: 16pt;
  background: ${({ checked }) => (checked ? 'var(--color-grey-dark)' : 'rgba(var(--color-blue-rgb),0.2)')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`;

export const Checkbox: React.FC<CheckboxProps> = ({ className, checked, onClick }) => (
  <CheckboxContainer className={className} onClick={() => onClick(!checked)}>
    <HiddenCheckbox checked={checked} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" strokeLinecap="round" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);
