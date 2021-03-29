import styled from 'styled-components';

interface StyleProps {
  isActive?: boolean;
  isHighlighted?: boolean;
  isCurrentMonth?: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90vw;
  background-color: var(--color-text-light);
  border-radius: var(--border-radius-m);
  box-shadow: 0px 0px 20px #00000033;
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

const Wrapper = styled.div`
  margin: var(--margin-xl) var(--margin-m);
  display: flex;
  flex-direction: column;
`;


export {
  Container,
  Wrapper,
};
