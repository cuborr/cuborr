import styled from 'styled-components';
import { Button, Icon } from 'src/components';

interface IPrimaryButton {
    active: boolean;
}

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
    border-radius: var(--border-radius-l);
    padding: var(--margin-l) var(--margin-m);
    background-color: var(--color-bg-light);
    z-index: 2;
`

export const Title = styled.h5`
    max-width: 90%;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--color-text-light);
    margin-bottom: var(--margin-r);
`

export const CompensationRow = styled.div`
    display: flex;
    align-items: flex-end;
`

export const Compensation = styled.h1`
    font-weight: 700;
    font-size: 3rem;
    color: var(--color-text-light);
`

export const CompensationCurrency = styled.p`
    font-weight: 600;
    font-size: 1.2rem;
    color: var(--color-text-light);
    margin-left: var(--margin-s);
    margin-bottom: 6pt;
`

export const Divider = styled.div`
  height: 1px;
  background-color: var(--color-text-light);
  opacity: 80%;
  width: 100%;
  margin-bottom: var(--margin-s);
`

export const Label = styled.p`
    font-weight: 600;
    font-size: 0.8rem;
    color: var(--color-text-dark);
    margin-bottom: var(--margin-s);
    text-align: right;
`

export const Number = styled.h3`
    font-weight: 700;
    font-size: 1.6rem;
    color: var(--color-text-light);
    margin-bottom: var(--margin-s);
`

export const NotesLabel = styled.p`
    font-weight: 500;
    font-size: 1rem;
    color: var(--color-text-light);
    margin: var(--margin-s) 0;
`

export const Notes = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.2rem;
    font-family: sans-serif, 'Montserrat';
    color: var(--color-text-light);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: var(--margin-l);
    a {
        width: 47%;
    }
`

export const PrimaryButton = styled(Button) <IPrimaryButton>`
  background-color: ${({ active }) => active ? "var(--color-text-light)" : "var(--color-bg-light)"};
  width: 47%;
`

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid var(--color-text-light);
  color: var(--color-text-light);
  width: 100%;
`

export const StyledIcon = styled(Icon)`
    position: absolute;
    top: var(--margin-l);
    right: var(--margin-m);
    cursor: pointer;
    svg {
        fill: var(--color-text-light);
    }
`;
