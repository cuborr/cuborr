import React from 'react';
import { Button, Input } from 'src/components';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
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
import { LoadingBar } from './components/loading-bar';
import { closeModal, setPrompt } from 'src/store/layout/actions';
import { PromptType } from 'src/store/layout/types';
import { setClient } from 'src/store/user/actions';
import { RootState } from 'src/store';


export const Assignment: React.FC = () => {
    const { t } = useTranslation();
    const { clientID } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    const input = React.useRef<HTMLInputElement>(null)
    const [formIndex, setFormIndex] = React.useState<number>(0)

    // name
    const [firstName, setFirstName] = React.useState<string>("")
    const [lastName, setLastName] = React.useState<string>("")

    // delivery
    const [streetAddress, setStreetAddress] = React.useState<string>("")
    const [city, setCity] = React.useState<string>("")
    const [postalCode, setPostalCode] = React.useState<string>("")
    const [country, setCountry] = React.useState<string>("Deutschland")

    // contact
    const [email, setEmail] = React.useState<string>("")
    const [phoneNumber, setPhoneNumber] = React.useState<string>("")

    // assignment
    const [title, setTitle] = React.useState<string>("")
    const [compensation, setCompensation] = React.useState<string>("")
    const [currency, setCurrency] = React.useState<string>("EUR")
    const [notes, setNotes] = React.useState<string>("")
    const [file, setFile] = React.useState<any>()

    // upload
    const [progress, setProgress] = React.useState<number>(0)

    React.useEffect(() => {
        // jump to last form immidiatetly
        if (clientID !== undefined) {
            setFormIndex(3)
        }
    }, []);

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

    const onClickSubmit = async () => {
        const data = new FormData();
        if (clientID === undefined) {
            // there has no assignment been created yet
            data.append('firstName', firstName);
            data.append('lastName', lastName);
            data.append('streetAddress', streetAddress);
            data.append('city', city);
            data.append('postalCode', postalCode);
            data.append('country', country);
            data.append('email', email);
            data.append('phoneNumber', phoneNumber);
        }
        if (!title || !compensation || !currency || !file) {
            return // something is missing
        }
        data.append('title', title);
        data.append('compensation', compensation);
        data.append('currency', currency);
        data.append('file', file);
        if (notes) data.append('notes', notes);

        const request = new XMLHttpRequest();

        request.open('POST', '/api/assignment');

        if (clientID !== undefined) {
            request.setRequestHeader("Authorization", `Token ${clientID}`)
        }

        // upload progress event
        request.upload.addEventListener('progress', (e) => {
            // upload progress as percentage
            const progress = (e.loaded / e.total) * 100;
            setProgress(Math.round(progress))
        });

        // request finished event
        request.addEventListener('load', (e) => {
            // HTTP status message (200, 404 etc)
            console.log('Status: ', request.status)

            console.log('Response:')
            console.log(request.response)

            if (request.status === 201) {
                const data = JSON.parse(request.response)
                if (clientID === undefined) {
                    console.log('New ID: ', data.client.$oid)
                    localStorage.setItem('client_id', data.client.$oid);
                    dispatch(setClient(data.client.$oid))
                }
                dispatch(setPrompt({
                    type: PromptType.Success,
                    duration: 4000,
                    text: t('messages.assignmentCreatedSuccessfully'),
                }))
            } else if (request.status === 400) {
                console.log('400 Error Text: ', t(request.response))
                dispatch(setPrompt({
                    type: PromptType.Error,
                    duration: 4000,
                    text: t(request.response),
                }))
            } else {
                if (request.status === 404) {
                    dispatch(setClient(undefined))
                    localStorage.removeItem('client_id');
                }
                dispatch(setPrompt({
                    type: PromptType.Error,
                    duration: 4000,
                    text: t('error.unexpectedErrorText'),
                }))
            }
            dispatch(closeModal());
        });

        // send POST request to server
        request.send(data);
    }

    return (
        <>
            {!Boolean(clientID) && <IndexIndicator index={formIndex} />}
            {
                formIndex === 0 && !Boolean(clientID) && (
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
                formIndex === 1 && !Boolean(clientID) && (
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
                formIndex === 2 && !Boolean(clientID) && (
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
                        {progress > 0 && <LoadingBar percentage={progress} />}
                        <ButtonContainer>
                            <Button onClick={onClickSubmit}>{t("common.submit")}</Button>
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
