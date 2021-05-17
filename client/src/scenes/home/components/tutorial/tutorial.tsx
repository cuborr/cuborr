import React from 'react';
import { Button } from 'src/components';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { closeModal } from 'src/store/layout/actions';
import {
    Container,
    Wrapper,
    ButtonContainer,
    Title,
    SubTitle,
    Column,
    Divider,
    ColumnTitle,
    Text,
    Card,
    DotContainer,
    Dot
} from './tutorial.style';

export const Tutorial: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const onClick = () => {
        window.localStorage.setItem("tutorial", "_hidden")
        dispatch(closeModal());
    }

    return (
        <Container>
            <Title>{t("home.welcome")}</Title>
            <SubTitle>{t("home.howItWorks")}</SubTitle>
            <Card>

                <Wrapper>
                    <Column>
                        <ColumnTitle>{t("common.client")}</ColumnTitle>
                    </Column>
                    <Divider />
                    <Column>
                        <ColumnTitle>{t("common.contractor")}</ColumnTitle>
                    </Column>
                </Wrapper>
                <Wrapper>
                    <Column>
                        <DotContainer><Dot /></DotContainer>
                    </Column>
                    <Divider />
                    <Column>
                        <Text>{t('home.tutorial0')}</Text>
                    </Column>
                </Wrapper>

                <Wrapper>
                    <Column>
                        <Text>{t('home.tutorial1')}</Text>
                        <DotContainer><Dot /></DotContainer>
                    </Column>
                    <Divider />
                    <Column />
                </Wrapper>

                <Wrapper>
                    <Column>
                        <DotContainer><Dot /></DotContainer>
                    </Column>
                    <Divider />
                    <Column>
                        <Text>{t('home.tutorial2')}</Text>
                    </Column>
                </Wrapper>

                <Wrapper>
                    <Column>
                        <Text>{t('home.tutorial3')}</Text>
                        <DotContainer><Dot /></DotContainer>
                    </Column>
                    <Divider />
                    <Column />
                </Wrapper>

                <Wrapper>
                    <Column>
                        <DotContainer><Dot /></DotContainer>
                    </Column>
                    <Divider />
                    <Column>
                        <Text>{t('home.tutorial4')}</Text>
                    </Column>
                </Wrapper>

            </Card>
            <ButtonContainer>
                <Button onClick={onClick}>{t("home.understood")}</Button>
            </ButtonContainer>
        </Container>

    );
};
