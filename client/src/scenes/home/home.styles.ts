import styled from 'styled-components';
import { Container, Button } from 'src/components';

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
`

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
  @media (max-width: 750px) {
    padding-top: 80%;
  }

  @media (max-width: 550px) {
    padding-top: 100%;
  }

  @media (max-width: 450px) {
    padding-top: 130%;
  }
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
  strong {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-color: var(--color-text-light);
    -webkit-text-stroke-width: 2.00px; 
  }
  @media (max-width: 1265px) {
    font-size: 3rem;
  }
  @media (max-width: 990px) {
    font-size: 2.4rem;
  }
  @media (max-width: 820px) {
    font-size: 2rem;
    strong {
      -webkit-text-stroke-width: 1.5px; 
    }
  }
  @media (max-width: 715px) {
    font-size: 1.5rem;
  }
  @media (max-width: 550px) {
    line-height: 1.8em;
  }
`;

export const TitleWrapper = styled.h1`
  position: relative;
  padding-bottom: 2.1rem;
  @media (max-width: 820px) {
    padding-bottom: 1.8rem;
  }
  @media (max-width: 715px) {
    padding-bottom: 1.5rem;
  }
  @media (max-width: 550px) {
    padding-bottom: 1rem;
  }
`

export const BetaBadgeContainer = styled.div`
  padding: 0.2rem 0.4rem 0.15rem;
  border-radius: var(--border-radius-s);
  background-color: var(--color-text-light);
  position: absolute;
  right: 0;
  bottom: 0;
`

export const BetaBadgeText = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-bg-dark);
  @media (max-width: 820px) {
    font-size: 0.7rem;
  }
  @media (max-width: 715px) {
    font-size: 0.6rem;
  }
`

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
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-column-gap: var(--margin-l);
  margin-top: 4rem;
  width: 100%;
  z-index: 1;
  @media (max-width: 710px) {
    grid-template-columns: 1fr;
    grid-row-gap: var(--margin-l);
  }
`

export const DescriptionTextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const DescriptionDivider = styled.div`
  width: 1px;
  margin: auto 0;
  background-color: var(--color-text-light);
  opacity: 60%;
  height: 30pt;
  @media (max-width: 710px) {
    width: 30pt;
    height: 1px;
    margin: 0 auto;
  }
`

export const Description = styled.h6`
  font-size: 1.3em;
  line-height: 1.6em;
  text-align: center;
  color: var(--color-text-light);
  font-weight: 400;
  @media (max-width: 990px) {
    font-size: 1em;
    line-height: 1.3em;
  }
  @media (max-width: 820px) {
    font-size: 0.9em;
    line-height: 1.2em;
  }
  @media (max-width: 550px) {
    font-size: 0.8em;
    line-height: 1.2em;
  }
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

    @media (max-width: 1350px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1050px) {
      grid-template-columns: repeat(1, 1fr);
    }
`

export const TutorialButtonContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -3%);
  animation-name: animatebottom;
  animation-duration: 0.3s;
  background-color: var(--color-bg-light);
  border-radius: var(--border-radius-l);
  border: 1.5px solid #FFFFFF11;
  padding: var(--margin-r) var(--margin-r);
  box-shadow: 0px 0px 20px #00000099;
  cursor: pointer;
  width: 82vw;
  max-width: 300pt;
  z-index: 4;

  @keyframes animatebottom {
    from {
      bottom: 0%;
      opacity: 0;
    }
    to {
      bottom: 3%;
      opacity: 1;
    }
  }

  @supports (
    (-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))
  ) {
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
`;

export const TutorialText = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-green);
`;
