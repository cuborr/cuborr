import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, VectorGraphic } from 'src/components';

const StyledContainer = styled(Container)`
    padding-bottom: 50pt;
    padding-top: 100pt;
`;

const StyledLinksGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: var(--margin-m);
    margin-bottom: 60pt;
`

const GridColumn = styled.div`
    display: grid;
    flex-direction: column;
    align-self: flex-start;
`

const LinkTitle = styled.p`
    font-weight: 700;
    font-size: 1rem;
    color: var(--color-text-light);
    margin-bottom: var(--margin-m);
`

const StyledLink = styled(Link)`
    font-weight: 500;
    font-size: 1rem;
    color: var(--color-text-dark);
    margin-bottom: var(--margin-l);
`

const StyledExternalLink = styled.a`
    font-weight: 500;
    font-size: 1rem;
    color: var(--color-text-dark);
    margin-bottom: var(--margin-l);
`

const Row = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35pt;
`

const CopyrightRow = styled.div`
    display: flex;
    align-items: center;
`

const Name = styled.p`
    font-weight: 500;
    font-size: 1.2rem;
    color: var(--color-text-light);
    margin-right: 5pt;
`

const Copyright = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
    color: var(--color-text-light);
`

const StyledVector = styled(VectorGraphic)`
    width: 22pt;
`

const Note = styled.p`
    font-weight: 400;
    font-size: 0.8rem;
    color: var(--color-text-dark);
    line-height: 1.2rem;
`

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <StyledContainer>
            <StyledLinksGrid>
                <GridColumn>
                    <LinkTitle>{t('footer.legal')}</LinkTitle>
                    <StyledLink to="/company-details">{t('footer.companyDetails')}</StyledLink>
                    <StyledLink to="/privacy-policy">{t('footer.privacyPolicy')}</StyledLink>
                </GridColumn>
                <GridColumn>
                    <LinkTitle>{t('footer.founders')}</LinkTitle>
                    <StyledLink>Nico Müller</StyledLink>
                    <StyledLink>Felix Gebert</StyledLink>
                    <StyledLink>Konstantin Paulus</StyledLink>
                </GridColumn>
                <GridColumn>
                    <LinkTitle>{t('footer.external')}</LinkTitle>
                    <StyledExternalLink href="https://www.instagram.com/cuborr_com">Instagram</StyledExternalLink>
                    <StyledExternalLink href="https://github.com/cuborr/cuborr">GitHub</StyledExternalLink>
                </GridColumn>
            </StyledLinksGrid>
            <Row>
                <CopyrightRow>
                    <Name>CUBORR</Name>
                    <Copyright>© 2021 Paulus K., Gerbert F., Müller N.</Copyright>
                </CopyrightRow>
                <StyledVector name="shapex" height="20pt" />
            </Row>
            <Note>{t('footer.note')}</Note>
        </StyledContainer>
    );
};
