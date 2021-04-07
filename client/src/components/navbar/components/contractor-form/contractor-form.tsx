import React from 'react';
import { Button, Input } from 'src/components';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
    Container,
    Wrapper,
    FormGrid,
    ButtonContainer,
    Title,
} from './contractor-form.style';
import { IndexIndicator } from './components/index-indicator';
import { closeModal, setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';
import { setContractor } from 'src/store/user/actions';


export const ContractorForm: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [formIndex, setFormIndex] = React.useState<number>(0)

    // name
    const [firstName, setFirstName] = React.useState<string>("")
    const [lastName, setLastName] = React.useState<string>("")
    const [country, setCountry] = React.useState<string>("Deutschland")

    // printer
    const [printerName, setPrinterName] = React.useState<string>("")
    const [itemNumber, setItemNumber] = React.useState<string>("")
    const [material, setMaterial] = React.useState<string>(t('contractor.commonFilaments'))

    // contact
    const [email, setEmail] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")


    const incrementFrom = () => {
        if (formIndex === 0 && firstName && lastName && country) {
            setFormIndex(formIndex + 1)
        } else if (formIndex === 1 && printerName && itemNumber && material) {
            setFormIndex(formIndex + 1)
        }
    }

    const renderNextButton = () => (
        <ButtonContainer>
            <Button onClick={incrementFrom}>{t("common.next")}</Button>
        </ButtonContainer>
    )

    const onClickSubmit = async () => {
        if (!phoneNumber || !email) return
        const res = await fetch('/api/contractor', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                country,
                printerName,
                itemNumber,
                material,
                email,
                phoneNumber
            })
        })

        console.log('Response:')
        console.log(res)

        if (res.status === 201) {
            const data = await res.json()
            console.log(data._id.$oid)
            localStorage.setItem('contractor_id', data._id.$oid);
            dispatch(setContractor(data._id.$oid))
            dispatch(setPrompt({
                type: PromptType.Success,
                duration: 7000,
                text: t('messages.contractorCreatedSucessfully'),
            }))
        } else {
            dispatch(setPrompt({
                type: PromptType.Error,
                duration: 4000,
                text: t('error.unexpectedErrorText'),
            }))
        }
        dispatch(closeModal());
    }

    return (
        <>
            <IndexIndicator index={formIndex} />
            {
                formIndex === 0 && (
                    <Container>
                        <Title>{t("contractor.nameTitle")}</Title>
                        <Wrapper>
                            <FormGrid>
                                <Input value={firstName} label={t("common.firstName")} onChange={setFirstName} />
                                <Input value={lastName} label={t("common.lastName")} onChange={setLastName} />
                                <Input value={country} label={t("common.country")} onChange={setCountry} />
                            </FormGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 1 && (
                    <Container>
                        <Title>{t("contractor.printerTitle")}</Title>
                        <Wrapper>
                            <FormGrid>
                                <Input value={printerName} label={t("common.printerName")} onChange={setPrinterName} />
                                <Input value={itemNumber} label={t("common.itemNumber")} onChange={setItemNumber} />
                                <Input value={material} label={t("common.materials")} onChange={setMaterial} />
                            </FormGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 2 && (
                    <Container>
                        <Title>{t("contractor.contactTitle")}</Title>
                        <Wrapper>
                            <FormGrid>
                                <Input value={phoneNumber} label={t("common.phoneNumber")} onChange={setPhoneNumber} />
                                <Input value={email} label={t("common.email")} onChange={setEmail} />
                            </FormGrid>
                        </Wrapper>
                        <ButtonContainer>
                            <Button onClick={onClickSubmit}>{t("common.submit")}</Button>
                        </ButtonContainer>
                    </Container>
                )
            }
        </>
    );
};
