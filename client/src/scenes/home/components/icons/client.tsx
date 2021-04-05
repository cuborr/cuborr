import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useClientAssignments } from 'src/data/hooks';
// assets
import { Icon } from 'src/components';


const Container = styled(Link)`
    position: relative;
    display: flex;
    width: 30pt;
    height: 30pt;
    justify-content: center;
    align-items: center;
`;

const StyledIcon = styled(Icon)`
  svg {
    fill: var(--color-text-light);
  }
`;

const Circle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--color-green);
    display: flex;
    padding: 2pt;
    min-width: 14px;
    border-radius: 8pt;
    justify-content: center;
    align-items: center;
`;

const Text = styled.p`
    font-size: 8pt;
    font-weight: 500;
    color: var(--color-bg-dark);
`
export const ClientIcon: React.FC = () => {
    const { assignments } = useClientAssignments()

    return (
        <Container to="/client/assignments">
            <StyledIcon name="print" size="18pt" />
            {
                assignments?.length > 0 && (
                    <Circle>
                        <Text>{assignments.length}</Text>
                    </Circle>
                )
            }
        </Container>
    )
};
