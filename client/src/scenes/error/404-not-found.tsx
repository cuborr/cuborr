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
  font-size: 4rem;
  font-weight: 800;
  color: var(--color-grey-dark);
  text-align: center;
`;

const Error = styled.h3`
  font-size: var(--font-size-h3);
  font-weight: 500;
  color: var(--color-grey-regular);
  text-align: center;
  margin: var(--margin-m) var(--margin-l);
  max-width: 500pt;
`;

export const NotFound = () => {
  let { t } = useTranslation();
  return (
    <Container>
      <Title>{t('error.notFound')}</Title>
      <Error>{t('error.notFoundText')}</Error>
    </Container>
  );
};
