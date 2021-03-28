import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
// store
import { useDispatch } from 'react-redux';
import { useHelloWorld } from 'src/data/hooks';
import { openModal } from 'src/store/layout/actions';
// components
import { Container, Button, Icon } from 'src/components';
import { Calendar } from './components';

const StyledContainer = styled(Container)`
  margin-top: var(--margin-m);
  margin-bottom: var(--margin-m);
`;

const StyledButton = styled(Button)`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 4.3rem;
  color: var(--color-grey-dark);
  font-weight: 700;
  font-family: 'Montserrat';
  @media (max-width: 820px) {
    font-size: 3rem;
  }
  @media (max-width: 550px) {
    font-size: 2.4rem;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: var(--color-bg-light);
  }
`;

const ButtonText = styled.p`
  margin-left: var(--margin-s);
`;

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { value } = useHelloWorld();
  const onClickButton = () => dispatch(openModal(<Calendar />));

  console.log(value)

  return (
    <StyledContainer>
      <Title>{t('common.helloWorld')}</Title>
      <StyledButton onClick={onClickButton}>
        <ButtonRow>
          <Icon name="calendar" size="14pt" />
          <ButtonText>Test</ButtonText>
        </ButtonRow>
      </StyledButton>
    </StyledContainer>
  );
};


