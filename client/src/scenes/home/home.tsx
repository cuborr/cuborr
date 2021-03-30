import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
// store
import { useDispatch } from 'react-redux';
import { useHelloWorld } from 'src/data/hooks';
import { openModal } from 'src/store/layout/actions';
// components
import { Container, Button, VectorGraphic } from 'src/components';
import { Assignment } from './components';

const Wrapper = styled.div`
  z-index: 1;
  width: 100%;
`

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
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

const Navbar = styled.nav`
  height: 50pt;
  width: 100%;
`

const StyledNavContainer = styled(Container)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const NavLink = styled.p`
  font-size: 16px;
  color: var(--color-text-light);
  font-weight: 600;
  margin-right: 5px;
  cursor: pointer;
`

const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-text-light);
  font-weight: 400;
`

const NavAbsolutContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 50pt;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`

const Title = styled.h1`
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`

const StyledButton = styled(Button)`
  padding: 0 16pt;
`

const DescriptionContainer = styled.div`
  margin-top: 4rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`

const DescriptionTextContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

const DescriptionDivider = styled.div`
  width: 1px;
  background-color: var(--color-text-light);
  opacity: 80%;
  height: 40pt;
`

const Description = styled.h6`
  font-size: 1.3em;
  line-height: 1.6em;
  text-align: center;
  color: var(--color-text-light);
  font-weight: 400;
  width: 40vw;
`

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  // const { value } = useHelloWorld();
  const onClickCreateAssignment = () => dispatch(openModal(<Assignment />));
  const onClickRegisterPrinter = () => dispatch(openModal(<Assignment />));

  return (
    <>
      <BackgroundImage />
      <Wrapper>
        <Navbar>
          <StyledNavContainer>
            <NavAbsolutContainer>
              <VectorGraphic name="shapex" height="32pt" />
            </NavAbsolutContainer>
            <NavRow>
              {i18n.language === 'de' ? <NavLink>{"en "}</NavLink> : "en "}
              {"|"}
              {i18n.language === 'en' ? <NavLink>{" de"}</NavLink> : " de"}
            </NavRow>
            <NavLink onClick={onClickRegisterPrinter}>
              {t('common.registerPrinter')}
            </NavLink>
          </StyledNavContainer>
        </Navbar>
        <StyledContainer>
          <TitleContainer>
            <Title dangerouslySetInnerHTML={{ __html: t('home.broker') }} />
          </TitleContainer>
          <DescriptionContainer>
            <DescriptionTextContainer>
              <Description>
                {t('home.insentive0')}
              </Description>
            </DescriptionTextContainer>
            <DescriptionDivider />
            <DescriptionTextContainer>
              <Description>
                {t('home.insentive1')}
              </Description>
            </DescriptionTextContainer>
          </DescriptionContainer>
          <ButtonContainer>
            <StyledButton onClick={onClickCreateAssignment}>
              {t('common.createAssignmentNow')}
            </StyledButton>
          </ButtonContainer>

        </StyledContainer>
      </Wrapper>

    </>

  );
};
