import React from 'react';
import styled from 'styled-components';


export interface IIndexIndicator {
    index: number;
}

interface IDot {
    active: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: animatebottom;
  animation-duration: 0.3s;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Dot = styled.div<IDot>`
    height: 10pt;
    width: 10pt;
    border-radius: 50%;
    border: 1.5px solid var(--color-border-light);
    background-color: ${({ active }) => active ? 'var(--color-border-light)' : undefined};
`;

const Bar = styled.div`
    height: 3pt;
    width: 15pt;
    border-radius: 1.5pt;
    margin: 0 5pt;
    background-color: var(--color-border-light);
`;

export const IndexIndicator: React.FC<IIndexIndicator> = ({ index }) => {
    return (
        <Container>
            <Wrapper>
                <Dot active={true} />
                <Bar />
                <Dot active={index >= 1} />
                <Bar />
                <Dot active={index >= 2} />
                <Bar />
                <Dot active={index >= 3} />
            </Wrapper>
        </Container>
    );
};
