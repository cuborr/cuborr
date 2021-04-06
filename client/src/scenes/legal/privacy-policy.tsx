import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Footer } from 'src/components'


const StyledContainer = styled(Container)`
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-bottom: var(--margin-xl);
  margin-top: var(--margin-xxl);
`;

const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-dark);
    line-height: 1.5rem;
    margin-bottom: var(--margin-m);
    max-width: 80%;
`

export const PrivacyPolicy = () => {

    return (
        <div>
            <StyledContainer>
                <Title>Datenschutzerklärung</Title>
                <Text>Dieses Projekt ist Open-Source wie welche Daten genau gespeichert werden kannst du dir auf GitHub ansehen.</Text>
                <Text>Wir verwenden keine Cookies, solange du keien Auftrag erstellst oder einen Drucker
                    registrierst liegen uns keine Informationen zu dir vor. Wenn du jedoch diese Fuktionen
                    verwendest speichern wir in der Local Storage auf deinem Browser eine automatisch generierte ID
                    für dich ab. Diese ID wird anschlißend immer als referenz verwendet wenn du mit der Platform interagierst.</Text>
                <Text>Was wir über dich speichern? Alles was du freiwillig angibst: Vorname, Nachname, Land, Email, Telefonnummer, Adresse, Stadt, Postleitzahl</Text>
                <Text>Falls du dich dazu entscheiden solltest die Platform nicht mehr zu nutzen hast du selbstverständlich das
                    Recht auf eine vollständige Löschung deiner Daten, dazu benötigen wir deinen Namen und deine Adresse.
                    Solltest du einen neuen Account erstellen wollen würden wir dir empfehlen die Local Storage zu leeren.
                    Danach können wir deinen Browser nicht mehr zuweisen. Viel Spaß beim verwenden der Cuborr Platform</Text>
            </StyledContainer>
            <Footer />
        </div>
    );
};
