import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setAlert } from 'src/store/layout/actions';
import { RootState } from 'src/store';
import { Button } from 'src/components';


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

export const Title = styled.h5`
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--color-bg-dark);
    margin-bottom: var(--margin-r);
`

const Text = styled.p`
    color: var(--color-bg-dark); 
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
`

export const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    margin-top: var(--margin-l);
`

export const PrimaryButton = styled(Button)`
  background-color: var(--color-bg-dark);
  margin-left: var(--margin-r);
  flex: 1;
  color: var(--color-text-light);
`

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid var(--color-bg-dark);
  color:  var(--color-bg-dark);
  flex: 1;
`

export const Alert = () => {
    const dispatch = useDispatch();
    const { alert } = useSelector((state: RootState) => state.layout);

    const onClickClose = () => {
        dispatch(setAlert(undefined))
    }

    const onClickConfirm = () => {
        if (alert?.onClick) {
            alert?.onClick()
        }
        dispatch(setAlert(undefined))
    }

    return (
        <Container>
            <Title>{alert?.title}</Title>
            <Text>{alert?.text}</Text>
            <ButtonRow>
                <SecondaryButton onClick={onClickClose}>
                    {alert?.cancel}
                </SecondaryButton>
                <PrimaryButton onClick={onClickConfirm}>
                    {alert?.confirm}
                </PrimaryButton>
            </ButtonRow>
        </Container>
    )
}
