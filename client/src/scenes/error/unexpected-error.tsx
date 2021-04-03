import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--color-bg-regular);
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--color-text-light);
  text-align: center;
`;

const Error = styled.h3`
  font-size: var(--font-size-h3);
  font-weight: 500;
  color: var(--color-text-dark);
  text-align: center;
  margin: var(--margin-m) var(--margin-l);
  max-width: 500pt;
`;

export const UnexpectedError = () => {
  let { t } = useTranslation();

  return (
    <Container>
      <Title>{t('error.unexpectedError')}</Title>
      <Error>{t('error.unexpectedErrorText')}</Error>
    </Container>
  );
};
