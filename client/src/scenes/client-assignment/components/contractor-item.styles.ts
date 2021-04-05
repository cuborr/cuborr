import styled from 'styled-components';
import { Button } from 'src/components';

export const Title = styled.h5`
    max-width: 90%;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--color-text-light);
    margin-bottom: var(--margin-r);
`

export const StyledButton = styled(Button)`
    margin-top: var(--margin-r);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius-s);
    padding: var(--margin-m);
    background-color: var(--color-bg-light);
    margin-top: var(--margin-m);
`

export const SubTitle = styled.p`
    font-weight: 400;
    font-size: 0.7rem;
    color: var(--color-text-dark);
    margin-bottom: var(--margin-m);
`

export const TableDivider = styled.div`
  height: 1px;
  background-color: var(--color-text-light);
  opacity: 30%;
  width: 100%;
  margin: var(--margin-r) 0;
`

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-between;
`

export const TableName = styled.p`
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--color-text-dark);
    
`

export const TableValue = styled.p`
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--color-text-light);
`

export const RatingRow = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    padding: var(--margin-xl);
`

export const RatingColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StarRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
        fill: var(--color-rating);
    }
`

export const StarText = styled.h5`
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--color-text-light);
    margin-left: var(--margin-s);
`

export const RatingLabel = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--color-text-dark);
    margin-top: var(--margin-s);
`