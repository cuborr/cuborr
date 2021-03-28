import React from 'react';
import styled from 'styled-components';

interface DividerProps {
  className?: string;
}

const StyledDivider = styled.div`
  display: flex;
  flex-direction: column;
  height: 1px;
  background-color: var(--color-grey-light);
`;

export const Divider: React.FC<DividerProps> = ({ className }) => <StyledDivider className={className} />;
