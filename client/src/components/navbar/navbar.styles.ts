import styled from 'styled-components';
import { Container } from 'src/components';

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`

export const NavbarContainer = styled.nav`
  height: var(--navbar-height);
  width: 100%;
`

export const StyledNavContainer = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

export const NavLink = styled.p`
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  z-index: 1;
  @media (max-width: 490px) {
    font-size: 0.7rem;
  }
`

export const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 400;
  z-index: 1;
  @media (max-width: 490px) {
    font-size: 0.7rem;
  }
`

export const NavAbsolutContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 50pt;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
