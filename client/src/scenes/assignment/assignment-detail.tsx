import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: var(--color-bg-regular);
`;


export const AssignmentDetail = () => {
    let { t } = useTranslation();
    let { uid } = useParams();
    return (
        <Container>

        </Container>
    );
};
