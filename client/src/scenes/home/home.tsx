import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useDispatch } from 'react-redux';
import { useAssignments } from 'src/data/hooks';
import { openModal } from 'src/store/layout/actions';
// components
import { AssignmentItem, Footer, Navbar } from 'src/components';
import { AssignmentForm } from './components';
import {
  BackgroundImage,
  StyledContainer,
  TitleContainer,
  Title,
  ButtonContainer,
  StyledButton,
  DescriptionContainer,
  DescriptionTextContainer,
  DescriptionDivider,
  Description,
  AssignmentsGrid,
  StyledAssignmentContainer,
  RelativeContainer
} from './home.styles';


export const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { assignments } = useAssignments();
  const onClickCreateAssignment = () => dispatch(openModal(<AssignmentForm />));

  return (
    <div>
      <RelativeContainer>
        <BackgroundImage />
      </RelativeContainer>
      <Navbar />
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
      {/* Extract to component */}
      <StyledAssignmentContainer>
        <AssignmentsGrid>
          {Boolean(assignments) && assignments.map((item) => (
            <AssignmentItem key={item._id.$oid} item={item} />
          ))}
        </AssignmentsGrid>
      </StyledAssignmentContainer>
      <Footer />
    </div>
  );
};
