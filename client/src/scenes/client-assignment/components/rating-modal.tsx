import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Button, Icon } from 'src/components';
import { setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';

interface IRatingModal {
    close: () => void;
    contractorID: string;
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius-l);
  padding: var(--margin-l) var(--margin-m);
  animation-name: animatetop;
  animation-duration: 0.3s;
  width: 80vw;
  max-width: 450pt;
  background-color: var(--color-text-light);
  z-index: 2;
  box-shadow: 0px 0px 20px #00000099;

  @keyframes animatetop {
    from {
      top: 60%;
    }
    to {
      top: 50%;
    }
  }
`;

const Title = styled.h5`
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--color-bg-dark);
    margin-bottom: var(--margin-m);
`

const Text = styled.p`
    color: var(--color-bg-dark); 
    font-size: 0.9rem;
    font-weight: 600;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin: var(--margin-m) 0;
`

const IconRow = styled.div`
    display: flex;
    align-items: center;
    svg {
        cursor: pointer;
        fill: var(--color-rating);
    }
`

const IconSpacer = styled.div`
    width: var(--margin-r);
`

const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    margin-top: var(--margin-xl);
`

const PrimaryButton = styled(Button)`
  background-color: var(--color-bg-dark);
  margin-left: var(--margin-r);
  flex: 1;
  color: var(--color-text-light);
`

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid var(--color-bg-dark);
  color:  var(--color-bg-dark);
  flex: 1;
`

export const RatingModal: React.FC<IRatingModal> = ({ close, contractorID }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [quality, setQuality] = React.useState(-1)
    const [communication, setCommunication] = React.useState(-1)
    const [shipping, setShipping] = React.useState(-1)
    const { clientID } = useSelector((state: RootState) => state.user);

    const onClickConfirm = async () => {
        if (quality < 0 || communication < 0 || shipping < 0) {
            return
        }

        const res = await fetch(`/api/contractor/${contractorID}/rating`, {
            method: 'POST',
            headers: { Authorization: `Token ${clientID}` },
            body: JSON.stringify({
                quality: quality + 1,
                communication: communication + 1,
                shipping: shipping + 1
            })
        });
        if (res.status === 201) {
            dispatch(setPrompt({
                type: PromptType.Success,
                duration: 9000,
                text: t('messages.ratingCreatedSuccessfully'),
            }));
        } else {
            dispatch(setPrompt({
                type: PromptType.Error,
                duration: 4000,
                text: t('error.unexpectedErrorText'),
            }));
        }
        close()
    }

    return (
        <Container>
            <Title>{t('common.rateUser')}</Title>

            <Row>
                <Text>{t('common.quality')}</Text>
                <IconRow>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <>
                            <IconSpacer />
                            <Icon
                                name={quality < i ? "star-outline" : "star"}
                                size="22pt"
                                onClick={() => setQuality(i)}
                            />
                        </>

                    ))}
                </IconRow>
            </Row>

            <Row>
                <Text>{t('common.communication')}</Text>
                <IconRow>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <>
                            <IconSpacer />
                            <Icon
                                name={communication < i ? "star-outline" : "star"}
                                size="22pt"
                                onClick={() => setCommunication(i)}
                            />
                        </>
                    ))}
                </IconRow>
            </Row>

            <Row>
                <Text>{t('common.shipping')}</Text>
                <IconRow>
                    {[0, 1, 2, 3, 4].map((i) => (
                        <>
                            <IconSpacer />
                            <Icon
                                name={shipping < i ? "star-outline" : "star"}
                                size="22pt"
                                onClick={() => setShipping(i)}
                            />
                        </>
                    ))}
                </IconRow>
            </Row>

            <ButtonRow>
                <SecondaryButton onClick={close}>
                    {t('common.cancel')}
                </SecondaryButton>
                <PrimaryButton onClick={onClickConfirm}>
                    {t('common.submit')}
                </PrimaryButton>
            </ButtonRow>
        </Container>
    )
}
