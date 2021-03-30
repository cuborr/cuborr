import styled from 'styled-components';

interface StyleProps {
    isActive?: boolean;
    isHighlighted?: boolean;
    isCurrentMonth?: boolean;
}

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: animatebottom;
  animation-duration: 0.3s;

  @keyframes animatebottom {
    from {
      top: 60%;
      opacity: 0;
    }
    to {
      top: 50%;
      opacity: 1;
    }
  }
`;

export const Wrapper = styled.div`
    background-color: var(--color-bg-light);
    border-radius: var(--border-radius-m);
    border: 1.5px solid #FFFFFF11;
    padding: var(--margin-l) var(--margin-l);
    box-shadow: 0px 0px 20px #00000099;
    width: 450pt;
`;


export const UserGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-column-gap: var(--margin-l);
    grid-row-gap: var(--margin-l);
`;


export const AddressGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: var(--margin-l);
    grid-row-gap: var(--margin-l);
    div:nth-child(1) {
        grid-column: 1 / 9;
    }
    div:nth-child(2) {
        grid-column: 1 / 7;
    }
    div:nth-child(3) {
        grid-column: 7 / 9;
    }
    div:nth-child(4) {
        grid-column: 1 / 9;
    }
`;


export const AssignmentGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: var(--margin-l);
    grid-row-gap: var(--margin-l);
    div:nth-child(1) {
        grid-column: 1 / 9;
    }
    div:nth-child(2) {
        grid-column: 1 / 6;
    }
    div:nth-child(3) {
        grid-column: 6 / 9;
    }
    div:nth-child(4) {
        grid-column: 1 / 9;
    }
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-light);
    margin-bottom: var(--margin-r);
`

export const ButtonContainer = styled.div`
    margin-top: var(--margin-m);
    display: flex;
    flex: 1;
    justify-content: flex-end;
`
