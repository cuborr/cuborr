import React from 'react';
import { Button, Input } from 'src/components';
import { useTranslation } from 'react-i18next';
import {
    Container,
    Wrapper,
    UserGrid,
    ButtonContainer,
    AddressGrid,
    AssignmentGrid,
    StyledButton,
    StyledButtonFormatText,
    StyledFileContainer,
    StyledCloseIcon,
    StyledButtonText,
    StyledInput,
    Title,
} from './assignment.style';
import { IndexIndicator } from './components/index-indicator';


export const Assignment: React.FC = () => {
    const { t } = useTranslation();
    const input = React.useRef<HTMLInputElement>(null)
    const [formIndex, setFormIndex] = React.useState<number>(0)

    // name
    const [firstName, setFirstName] = React.useState<string>("")
    const [lastName, setLastName] = React.useState<string>("")

    // delivery
    const [streetAddress, setStreetAddress] = React.useState<string>("")
    const [city, setCity] = React.useState<string>("")
    const [postalCode, setPostalCode] = React.useState<string>("")
    const [country, setCountry] = React.useState<string>("")

    // contact
    const [email, setEmail] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")

    // assignment
    const [title, setTitle] = React.useState<string>("")
    const [compensation, setCompensation] = React.useState<string>("")
    const [currency, setCurrency] = React.useState<string>("")
    const [notes, setNotes] = React.useState<string>("")
    const [file, setFile] = React.useState<any>()

    const incrementFrom = () => {
        if (formIndex === 0 && firstName && lastName) {
            setFormIndex(formIndex + 1)
        } else if (formIndex === 1 && streetAddress && city && postalCode && country) {
            setFormIndex(formIndex + 1)
        } else if (formIndex === 2 && email && phoneNumber) {
            setFormIndex(formIndex + 1)
        }
    }

    const onClickSelectFile = () => {
        if (input.current) input.current.click();
    }

    const onChangeFile = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const f = event.target.files[0];
        console.log(f)
        setFile(f)
    }

    const renderNextButton = () => (
        <ButtonContainer>
            <Button onClick={incrementFrom}>{t("common.next")}</Button>
        </ButtonContainer>
    )


    const onClickRemoveFile = () => setFile(undefined)

    return (
        <>
            <IndexIndicator index={formIndex} />
            {
                formIndex === 0 && (
                    <Container>
                        <Title>{t("assignment.nameTitle")}</Title>
                        <Wrapper>
                            <UserGrid>
                                <Input value={firstName} label={t("common.firstName")} onChange={setFirstName} />
                                <Input value={lastName} label={t("common.lastName")} onChange={setLastName} />
                            </UserGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 1 && (
                    <Container>
                        <Title>{t("assignment.addressTitle")}</Title>
                        <Wrapper>
                            <AddressGrid>
                                <Input value={streetAddress} label={t("common.streetAddress")} onChange={setStreetAddress} />
                                <Input value={city} label={t("common.city")} onChange={setCity} />
                                <Input value={postalCode} label={t("common.zip")} onChange={setPostalCode} />
                                <Input value={country} label={t("common.country")} onChange={setCountry} />
                            </AddressGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 2 && (
                    <Container>
                        <Title>{t("assignment.contactTitle")}</Title>
                        <Wrapper>
                            <UserGrid>
                                <Input value={phoneNumber} label={t("common.phoneNumber")} onChange={setPhoneNumber} />
                                <Input value={email} label={t("common.email")} onChange={setEmail} />
                            </UserGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 3 && (
                    <Container>
                        <Title>{t("assignment.assignmentTitle")}</Title>
                        <Wrapper>
                            <AssignmentGrid>
                                {file ? (
                                    <StyledFileContainer onClick={onClickRemoveFile}>
                                        <StyledCloseIcon name="trash" size="14pt" />
                                    </StyledFileContainer>
                                ) : (
                                    <StyledButton onClick={onClickSelectFile}>
                                        <div>
                                            <StyledButtonText>
                                                {t("common.select")}
                                            </StyledButtonText>
                                            <StyledButtonFormatText>
                                                STL | OBJ | AMF | 3MF | ZIP
                                            </StyledButtonFormatText>
                                        </div>
                                    </StyledButton>
                                )}
                                <Input value={title} label={t("common.title")} onChange={setTitle} />
                                <Input value={compensation} label={t("common.compensation")} onChange={setCompensation} />
                                <Input value={currency} label={t("common.currency")} onChange={setCurrency} />
                                <Input value={notes} label={t("common.notesOptional")} onChange={setNotes} />
                            </AssignmentGrid>
                        </Wrapper>
                        <ButtonContainer>
                            <Button onClick={incrementFrom}>{t("common.submit")}</Button>
                        </ButtonContainer>
                    </Container>
                )
            }
            <StyledInput
                type='file'
                id='file'
                onChange={onChangeFile}
                ref={input}
                accept=".stl,.obj,.amf,.3mf,.zip"
            />
        </>

    );
};

/*
First
Name
*/

/*
Straße und Hausnummer | street address
Ort | Postleizahl
Country
*/

/*
E-Mail
Telefonnummer
*/

/*
Title
Preis
Notes
File
*/