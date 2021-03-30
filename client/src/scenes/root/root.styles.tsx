import styled from 'styled-components';
interface StyleProps {
  isOpen?: boolean;
  isActive?: boolean;
  isBlurred?: boolean;
}

export const RootContainer = styled.main<StyleProps>`
  display: flex;
  flex: 1;
  flex-direction: row;
  filter: ${({ isBlurred }) => (isBlurred ? 'blur(60px)' : undefined)};
  transition: filter 0.2s ease-in-out;
`;
