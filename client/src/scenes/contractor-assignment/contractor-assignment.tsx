import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Footer, Navbar } from 'src/components';
import { useContractorAssignments } from 'src/data/hooks';
import { AssignmentItem } from './components/assignment-item';

const SyledContainer = styled(Container)`
  min-height: 100vh;
`;

const AssignmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: var(--margin-l);
  grid-column-gap: var(--margin-m);
  margin-top: var(--margin-xl);
  @media (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-top: var(--margin-xl);
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`

const PlaceholderText = styled.p`
  margin: var(--margin-xl) 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-dark);
  max-width: 60%;
  line-height: 1.5rem;
  @media (max-width: 650px) {
    font-size: 0.8rem;
    max-width: 90%;
    line-height: 1.3rem;
  }
`


export const ContractorAssignment = () => {
  let { t } = useTranslation();
  const { assignments, isLoading } = useContractorAssignments()
  const { assignments: closedAssignments, isLoading: closedIsLoading } = useContractorAssignments('closed')

  return (
    <div>
      <Navbar />
      <SyledContainer>
        <Title>{t('common.yourAssignments')}</Title>
        {!isLoading && assignments?.length === 0 && <PlaceholderText>{t('common.yourAssignmentsPlaceholder')}</PlaceholderText>}
        <AssignmentGrid>
          {assignments?.map((item) => (
            <AssignmentItem item={item} key={item._id.$oid} state="assigned" />
          ))}
        </AssignmentGrid>

        <Title>{t('common.closedAssignments')}</Title>
        {!closedIsLoading && closedAssignments?.length === 0 && <PlaceholderText>{t('common.closedAssignmentsPlaceholderContractor')}</PlaceholderText>}
        <AssignmentGrid>
          {closedAssignments?.map((item) => (
            <AssignmentItem item={item} key={item._id.$oid} state="closed" />
          ))}
        </AssignmentGrid>

      </SyledContainer>
      <Footer />
    </div>
  );
};
