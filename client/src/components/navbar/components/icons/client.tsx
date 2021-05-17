import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// assets
import { Icon } from 'src/components';
// store
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

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
    const { clientID } = useSelector((state: RootState) => state.user);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        const retrieveAssignmentCount = async () => {
            const res = await fetch(`/api/client/assignments?type=count`, {
                method: 'GET',
                headers: { Authorization: `Token ${clientID}` }
            });
            if(res.status === 200) {
                const data = await res.json()
                setCount(data.count)
            }
        }
        retrieveAssignmentCount()
    })

    return (
        <Container to="beta/client/assignments">
            <StyledIcon name="print" size="18pt" />
            {
                count > 0 && (
                    <Circle>
                        <Text>{count}</Text>
                    </Circle>
                )
            }
        </Container>
    )
};
