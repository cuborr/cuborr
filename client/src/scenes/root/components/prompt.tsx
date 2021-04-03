import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setPrompt } from 'src/store/layout/actions';
import { RootState } from 'src/store';
import { PromptType } from 'src/store/layout/types';

interface IStyleProps {
    color: string;
}

export const Container = styled.div<IStyleProps>`
  position: fixed;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: var(--border-radius-m);
  padding: var(--margin-r) 12pt;
  animation-name: animatetop;
  animation-duration: 0.3s;
  width: 90vw;
  max-width: 400px;
  background-color: ${({ color }) => color};
  z-index: 2;
  box-shadow: 0px 0px 20px #00000099;

  @keyframes animatetop {
    from {
      top: -5%;
    }
    to {
      top: 8%;
    }
  }
`;

const Text = styled.p`
    color: var(--color-text-light); 
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-weight: 500;
`

export const Prompt = () => {
    const [color, setColor] = React.useState<string>("")
    const dispatch = useDispatch();
    const { prompt } = useSelector((state: RootState) => state.layout);

    React.useEffect(() => {
        if (prompt !== undefined) {
            if (prompt?.type === PromptType.Error) {
                setColor("var(--color-red)")
            } else if (prompt?.type === PromptType.Info) {
                setColor("var(--color-yellow)")
            } else {
                setColor("var(--color-green)")
            }
            setTimeout(() => {
                dispatch(setPrompt(undefined))
            }, prompt?.duration);
        }
    }, [prompt]);

    return (
        <Container color={color}>
            <Text>{prompt?.text}</Text>
        </Container>
    )
}
