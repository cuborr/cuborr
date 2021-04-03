import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useDispatch, useSelector } from 'react-redux';
import { useAssignments } from 'src/data/hooks';
import { openModal } from 'src/store/layout/actions';
import { RootState } from 'src/store';
// components
import { VectorGraphic, AssignmentItem } from 'src/components';
import { Assignment } from './components';
import {
  BackgroundImage,
  Navbar,
  StyledNavContainer,
  NavLink,
  NavRow,
  NavAbsolutContainer,
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
} from './home.styles';


export const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { clientID, contractorID } = useSelector((state: RootState) => state.user);
  const { assignments } = useAssignments();
  const onClickCreateAssignment = () => dispatch(openModal(<Assignment />));
  const onClickRegisterPrinter = () => dispatch(openModal(<Assignment />));

  console.log(assignments)
  
  return (
    <div>
      <BackgroundImage />
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
          {!clientID && !contractorID && (
            <NavLink onClick={onClickRegisterPrinter}>
              {t('common.registerPrinter')}
            </NavLink>
          )}
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
      {/* Extract to component */}
      <StyledAssignmentContainer>
        <AssignmentsGrid>
          {Boolean(assignments) && assignments.map((item) => (
            <AssignmentItem key={item._id.$oid} item={item} />
          ))}
        </AssignmentsGrid>
      </StyledAssignmentContainer>
    </div>
  );
};
