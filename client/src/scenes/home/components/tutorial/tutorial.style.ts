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


export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-light);
    margin-bottom: var(--margin-s);
    @media (max-width: 1020px) {
        font-size: 1.1rem;
        margin-bottom: var(--margin-xs);
    }
    @media (max-width: 810px) {
        text-align: center;
    }
`;


export const SubTitle = styled.div`
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-text-dark);
    margin-bottom: var(--margin-r);
    @media (max-width: 1020px) {
        font-size: 0.8rem;
    }
    @media (max-width: 810px) {
        text-align: center;
    }
`;


export const Card = styled.div`
    background-color: var(--color-bg-light);
    border-radius: var(--border-radius-m);
    border: 1.5px solid #FFFFFF11;
    padding: var(--margin-l) var(--margin-s);
    box-shadow: 0px 0px 20px #00000099;
    width: 80vw;
    max-width: 1600pt;
    @media (max-width: 810px) {
        max-height: 60vh;
        overflow-y: scroll;
    }
    @media (max-width: 550px) {
        overflow-y: auto;
        max-height: 55vh;
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Column = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
`;


export const ColumnTitle = styled.h6`
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-text-light);
    margin-bottom: var(--margin-r);
    text-align: center;
    @media (max-width: 1020px) {
        font-size: 0.8rem;
        margin-bottom: var(--margin-s);
    }
`;


export const Divider = styled.div`
    width: 1.5px;
    background-color: var(--color-text-light);
`;


export const DotContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 16px;
    right: -8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Dot = styled.span`
    height: 13px;
    width: 13px;
    border: 1.5px solid var(--color-text-light);
    border-radius: 50%;
    display: inline-block;
`;


export const Text = styled.p`
    font-size: 0.85rem;
    line-height: 1.3rem;
    font-weight: 500;
    color: var(--color-text-light);
    text-align: center;
    margin: 0.4rem 1rem;
    @media (max-width: 1020px) {
        font-size: 0.7rem;
        margin: 0.2rem 0.6rem;
    }
`;


export const ButtonContainer = styled.div`
    margin-top: var(--margin-m);
    display: flex;
    flex: 1;
    justify-content: flex-end;
`;
