import React from 'react';
import styled from 'styled-components';

interface ILoadingBar {
    percentage: number;
}

const Container = styled.div`
    margin: var(--margin-l) 0;
    display: flex;
    flex: 1;
    height: 0.8rem;
    border: 0.5pt solid var(--color-border-light);
    border-radius: 0.4rem;
    overflow: hidden;
`;

const StyledBar = styled.div<ILoadingBar>`
    display: block;
    width: ${({ percentage }) => percentage + "%"};
    background-color: var(--color-border-light);
    border-radius: 0.4rem;
`;

export const LoadingBar: React.FC<ILoadingBar> = ({ percentage }) => {
    return (
        <Container>
            <StyledBar percentage={percentage} />
        </Container>
    );
};
