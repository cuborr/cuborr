import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Container, Footer, Navbar } from 'src/components'


const StyledContainer = styled(Container)`
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-bottom: var(--margin-xl);
  margin-top: var(--margin-xl);
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
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
            <Navbar />
            <StyledContainer>
                <Title>Datenschutzerklärung</Title>
                <Text>Dieses Projekt ist Open-Source. Welche Daten wie genau gespeichert werden, kannst du dir auf GitHub ansehen.</Text>
                <Text>Wir verwenden keine Cookies, solange du keinen Auftrag erstellst und keinen Drucker registrierst, dann liegen uns keine Informationen zu dir vor. Wenn du jedoch diese Funktionen verwendest, speichern wir in der Local Storage auf deinem Browser eine automatisch generierte ID für dich ab. Diese ID wird anschließend immer als Referenz verwendet, wenn du mit der Plattform interagierst.</Text>
                <Text>Was wir über dich speichern? Alles, was du freiwillig angibst: Vorname, Nachname, Land, Email, Telefonnummer, Adresse, Stadt, Postleitzahl</Text>
                <Text>Falls du dich dazu entscheiden solltest, die Plattform nicht mehr zu nutzen, hast du selbstverständlich das Recht auf eine vollständige Löschung deiner Daten. Dazu benötigen wir deinen Namen und deine Adresse. Solltest du einen neuen Account erstellen wollen würden wir dir empfehlen die Local Storage zu leeren. Möchtest du lediglich einen neuen Account erstellen, empfehlen wir dir, die Local Storage zu leeren. Danach können wir deinen Browser nicht mehr zuweisen. Viel Spaß beim Verwenden der Cuborr-Plattform.</Text>
            </StyledContainer>
            <Footer />
        </div>
    );
};
