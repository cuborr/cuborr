import styled from 'styled-components';

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


export const FormGrid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-column-gap: var(--margin-l);
    grid-row-gap: var(--margin-l);
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
