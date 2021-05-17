import React from 'react';
import { useTranslation } from 'react-i18next';
// store
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'src/store/layout/actions';
import { RootState } from 'src/store';
// components
import { VectorGraphic } from 'src/components';
import { ContractorForm, ClientIcon, ContractorIcon } from './components';
import { Link } from 'react-router-dom';
import {
    NavbarContainer,
    StyledNavContainer,
    NavLink,
    NavRow,
    NavAbsolutContainer,
    RelativeContainer
} from './navbar.styles';


export const Navbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();
    const { clientID, contractorID } = useSelector((state: RootState) => state.user);
    const onClickRegisterPrinter = () => dispatch(openModal(<ContractorForm />));

    const onChangeLanguage = () => {
        if (i18n.language === 'de') {
            i18n.changeLanguage('en')
        } else {
            i18n.changeLanguage('de')
        }
    }

    return (
        <NavbarContainer>
            <RelativeContainer>
                <NavAbsolutContainer>
                    <Link to="/beta">
                        <VectorGraphic name="shapex" height="32pt" />
                    </Link>
                </NavAbsolutContainer>
            </RelativeContainer>
            <StyledNavContainer>
                <NavRow>
                    {i18n.language === 'de' ? <NavLink onClick={onChangeLanguage}>{"en "}</NavLink> : "en "}
                    {"|"}
                    {i18n.language === 'en' ? <NavLink onClick={onChangeLanguage}>{" de"}</NavLink> : " de"}
                </NavRow>
                {!clientID && !contractorID && (
                    <NavLink onClick={onClickRegisterPrinter}>
                        {t('common.registerPrinter')}
                    </NavLink>
                )}
                {contractorID && <ContractorIcon />}
                {clientID && <ClientIcon />}
            </StyledNavContainer>
        </NavbarContainer>
    );
};
