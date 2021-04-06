import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Footer } from 'src/components';
import { useClientAssignments } from 'src/data/hooks';
import { AssignmentItem } from './components/assignment-item';
import { RatingModal } from './components/rating-modal';


const SyledContainer = styled(Container)`
  min-height: 100vh;
`;

const AssignmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: var(--margin-l);
  grid-column-gap: var(--margin-m);
  margin-top: var(--margin-xl);
`

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-top: var(--margin-xxl);
`

const PlaceholderText = styled.p`
  margin: var(--margin-xl) 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-text-dark);
  max-width: 60%;
  line-height: 1.5rem;
`


export const ClientAssignment = () => {
  let { t } = useTranslation();
  const [modalContractorID, setModalContractorID] = React.useState('')
  const { assignments: openAssignments, isLoading: openIsLoading } = useClientAssignments()
  const { assignments, isLoading } = useClientAssignments('assigned')
  const { assignments: closedAssignments, isLoading: closedIsLoading } = useClientAssignments('closed')

  const closeModal = () => setModalContractorID('')

  const openRatingModal = (contractorID: string) => setModalContractorID(contractorID)

  return (
    <div>
      <SyledContainer>
        <Title>{t('common.openAssignments')}</Title>
        {!openIsLoading && openAssignments?.length === 0 && <PlaceholderText>{t('common.openAssingmentsPlaceholder')}</PlaceholderText>}
        <AssignmentGrid>
          {openAssignments?.map((item) => (
            <AssignmentItem item={item} key={item._id.$oid} state="open" />
          ))}
        </AssignmentGrid>

        <Title>{t('common.assignmentsInProzess')}</Title>
        {!isLoading && assignments?.legth === 0 && <PlaceholderText>{t('common.assignmentsInProzessPlaceholder')}</PlaceholderText>}
        <AssignmentGrid>
          {assignments?.map((item) => (
            <AssignmentItem item={item} key={item._id.$oid} state="assigned" />
          ))}
        </AssignmentGrid>

        <Title>{t('common.closedAssignments')}</Title>
        {!closedIsLoading && closedAssignments?.length === 0 && <PlaceholderText>{t('common.closedAssignmentsPlaceholder')}</PlaceholderText>}
        <AssignmentGrid>
          {closedAssignments?.map((item) => (
            <AssignmentItem
              item={item}
              key={item._id.$oid}
              state="closed"
              openRatingModal={openRatingModal}
            />
          ))}
        </AssignmentGrid>

        {modalContractorID !== '' && <RatingModal contractorID={modalContractorID} close={closeModal} />}
      </SyledContainer>
      <Footer />
    </div>
  );
};
