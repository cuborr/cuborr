import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { RootState } from 'src/store';
import { useDispatch, useSelector } from 'react-redux';
import { useAssignments } from 'src/data/hooks';
import { openModal } from 'src/store/layout/actions';
// components
import { AssignmentItem, Footer, Navbar } from 'src/components';
import { AssignmentForm, Tutorial } from './components';
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
  RelativeContainer,
  TitleWrapper,
  BetaBadgeContainer,
  BetaBadgeText,
  TutorialButtonContainer,
  TutorialText
} from './home.styles';


export const Home: React.FC = () => {
  const [visible, setVisible] = React.useState<boolean>(false)
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { assignments } = useAssignments();
  const layout = useSelector((state: RootState) => state.layout);
  const { clientID, contractorID } = useSelector((state: RootState) => state.user);
  const onClickCreateAssignment = () => dispatch(openModal(<AssignmentForm />));
  const onClickShowTutorial = () => dispatch(openModal(<Tutorial />));

  React.useEffect(() => {
    const token = clientID ? clientID : contractorID ? contractorID : false
    const registerPageVisit = async () => {
      const res = await fetch("/api/metrics/page-visit", {
        method: 'GET',
        headers: token ? { Authorization: `Token ${token}` } : {},
      })
    }
    registerPageVisit()
  }, [])

  React.useEffect(() => {
    if (!window.localStorage.getItem("tutorial")) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [layout.modalIsVisible])

  return (
    <div>
      <RelativeContainer>
        <BackgroundImage />
      </RelativeContainer>
      <Navbar />
      <StyledContainer>
        <TitleContainer>
          <TitleWrapper>
            <Title dangerouslySetInnerHTML={{ __html: t('home.broker') }} />
            <BetaBadgeContainer>
              <BetaBadgeText>BETA</BetaBadgeText>
            </BetaBadgeContainer>
          </TitleWrapper>
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
      {visible && (
        <TutorialButtonContainer onClick={onClickShowTutorial}>
          <TutorialText>{t('home.tutorial')}</TutorialText>
        </TutorialButtonContainer>
      )}
    </div>
  );
};
