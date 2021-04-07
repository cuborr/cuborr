import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Footer, Navbar } from 'src/components'


const StyledContainer = styled(Container)`
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-bottom: var(--margin-xl);
  margin-top: var(--margin-xl);
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`;

const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-dark);
    line-height: 1.5rem;
    margin-bottom: var(--margin-m);
    max-width: 80%;
`

export const CompanyDetails = () => {

    return (
        <div>
            <Navbar />
            <StyledContainer>
                <Title>Impressum</Title>
                <Text>Angaben gemäß § 5 TMG:</Text>
                <Text>Konstantin Paulus</Text>
                <Text>Am Mühlbach 7</Text>
                <Text>85748 Garching</Text>
                <Text>+49 170 2244007</Text>
                <Text>mail@konstantinpaulus.de</Text>
            </StyledContainer>
            <Footer />
        </div>
    );
};
