import styled from 'styled-components';
import { Container, Button } from 'src/components';
import { Link } from 'react-router-dom';

export const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  padding-top: 55%;
  background-color: var(--color-bg-dark); /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-image:
    linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 50%),
    url("https://images.unsplash.com/photo-1508277267762-0044b6c5a1e0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80");
  filter: brightness(30%);
`

export const Navbar = styled.nav`
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
  font-size: 16px;
  color: var(--color-text-light);
  font-weight: 600;
  margin: 0 5px;
  cursor: pointer;
  z-index: 1;
`

export const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 400;
  z-index: 1;
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

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  z-index: 1;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 4rem;
  color: var(--color-text-light);
  font-weight: 800;
  /*
  @media (max-width: 820px) {
    font-size: 3rem;
  }
  @media (max-width: 550px) {
    font-size: 2.4rem;
  }
  */
  strong {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: var(--color-text-light);
    -webkit-text-stroke-width: 2.00px; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  z-index: 1;
`

export const StyledButton = styled(Button)`
  padding: 0 16pt;
`

export const DescriptionContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1;
`

export const DescriptionTextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const DescriptionDivider = styled.div`
  width: 1px;
  background-color: var(--color-text-light);
  opacity: 80%;
  height: 40pt;
`

export const Description = styled.h6`
  font-size: 1.3em;
  line-height: 1.6em;
  text-align: center;
  color: var(--color-text-light);
  font-weight: 400;
  width: 40vw;
`

export const StyledAssignmentContainer = styled(Container)`
    margin-bottom: var(--margin-xxl);
`;

export const AssignmentsGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: var(--margin-l);
    grid-row-gap: var(--margin-xl);
`
