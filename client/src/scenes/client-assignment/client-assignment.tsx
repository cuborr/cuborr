import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container } from 'src/components';
import { useClientAssignments } from 'src/data/hooks';
import { OpenAssignmentItem } from './components/open-assignment-item';

const SyledContainer = styled(Container)`
  padding-top: var(--navbar-height);
  width: 100%;
`;

const AssignmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: var(--margin-l);
  grid-column: var(margin-m);
  margin-top: var(--margin-xl);
`

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-text-light);
`

const PlaceholderText = styled.p`
  margin: var(--margin-l) 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-dark);
  text-align: center;
`


export const ClientAssignment = () => {
  let { t } = useTranslation();
  const { assignments, isLoading } = useClientAssignments()

  console.log(assignments)

  return (
    <SyledContainer>
      <Title>Offene Aufträge</Title>
      {!isLoading && assignments?.length === 0 && <PlaceholderText>Aktuell sind keine offenen Aufträge vorhanden, lade neue 3-D Models hoch um Bewerbungen zu erhalten</PlaceholderText>}
      <AssignmentGrid>
        {assignments?.map((item) => (
          <OpenAssignmentItem item={item} key={item._id.$oid} />
        ))}
      </AssignmentGrid>

    </SyledContainer>
  );
};
