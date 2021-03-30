import React from 'react';
import { Button, Input } from 'src/components';
import {
    Container,
    Wrapper,
    UserGrid,
    ButtonContainer,
    AddressGrid,
    AssignmentGrid,
    Title,
} from './assignment.style';


export const Assignment: React.FC = () => {
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
        }
        if (formIndex === 1 && streetAddress && city && postalCode && country) {
            setFormIndex(formIndex + 1)
        }
        if (formIndex === 2 && email && phoneNumber) {
            setFormIndex(formIndex + 1)
        }
    }

    const renderNextButton = () => (
        <ButtonContainer>
            <Button onClick={incrementFrom}>Weiter</Button>
        </ButtonContainer>
    )

    return (
        <>
            {
                formIndex === 0 && (
                    <Container>
                        <Title>Wie sollen wir Dich nennen?</Title>
                        <Wrapper>
                            <UserGrid>
                                <Input value={firstName} label="First Name" onChange={setFirstName} />
                                <Input value={lastName} label="Last Name" onChange={setLastName} />
                            </UserGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 1 && (
                    <Container>
                        <Title>Wie ist Deine Lieferadresse?</Title>
                        <Wrapper>
                            <AddressGrid>
                                <Input value={streetAddress} label="Street Address" onChange={setStreetAddress} />
                                <Input value={city} label="City" onChange={setCity} />
                                <Input value={postalCode} label="ZIP" onChange={setPostalCode} />
                                <Input value={country} label="Country" onChange={setCountry} />
                            </AddressGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 2 && (
                    <Container>
                        <Title>Kontakt für den Hersteller</Title>
                        <Wrapper>
                            <UserGrid>
                                <Input value={phoneNumber} label="Phone Number" onChange={setPhoneNumber} />
                                <Input value={email} label="E-Mail" onChange={setEmail} />
                            </UserGrid>
                        </Wrapper>
                        {renderNextButton()}
                    </Container>
                )
            }
            {
                formIndex === 3 && (
                    <Container>
                        <Title>Dein Auftrag</Title>
                        <Wrapper>
                            <AssignmentGrid>
                                <Input value={title} label="Title" onChange={setTitle} />
                                <Input value={compensation} label="Compensation" onChange={setCompensation} />
                                <Input value={currency} label="Currency" onChange={setCurrency} />
                                <Input value={notes} label="Notes (optional)" onChange={setNotes} />
                            </AssignmentGrid>
                        </Wrapper>
                        <ButtonContainer>
                            <Button onClick={incrementFrom}>Absenden</Button>
                        </ButtonContainer>
                    </Container>
                )
            }
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