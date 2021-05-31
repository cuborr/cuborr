import React from 'react';
import styled from 'styled-components';
import { Container, Footer, Navbar } from 'src/components'


const StyledContainer = styled(Container)`
  min-height: 80vh;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-text-light);
  margin-bottom: var(--margin-r);
  margin-top: var(--margin-xl);
  @media (max-width: 650px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.6rem;
  }
`;

const Caption = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--color-text-dark);
    margin-bottom: var(--margin-l);
`

const SectionTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin-bottom: var(--margin-m);
  margin-top: var(--margin-m);
`;

const ArticleTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text-light);
  margin-bottom: var(--margin-m);
`;

const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-text-dark);
    line-height: 1.5rem;
    margin-bottom: var(--margin-l);
    max-width: 80%;
`

const List = styled.ul`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-text-dark);
  line-height: 1.5rem;
  margin-bottom: var(--margin-r);
  max-width: 80%;
  li {
    margin-left: var(--margin-m);
    margin-bottom: var(--margin-r);
  }
`

export const TermsAndConditions = () => {

  return (
    <div>
      <Navbar />
      <StyledContainer>
        <Title>Allgemeine Geschäftsbedingungen</Title>
        <Caption>Datum des Inkrafttretens: 5. April 2021 </Caption>

        <SectionTitle>1. Gegenstand</SectionTitle>
        <Text>CUBORR ist eine Plattform, die über die Website unter der Adresse www.cuborr.com oder in Form einer mobilen Anwendung zugänglich ist und dazu dient, Personen bzw. Haushalte, welche einen 3D-Drucker besitzen und diesen höchstens nur noch unregelmäßig in Gebrauch nehmen, mit Leuten in Kontakt zu bringen, die mit einer konkreten Vorstellung eines für den Eigengebrauch zu druckenden 3D-Modells aufwarten, dieses aber mangels Endgerät nicht selbst produzieren können. Für diese Auftraggeber steht somit ein Tool zur Verfügung, über CUBORR autorisierte Angebote zu nutzen und das gedruckte Modell zugesandt zu bekommen.
          Diese Allgemeinen Geschäftsbedingungen regeln Zugang und Nutzung der Plattform.
          Beachte bitte insbesondere, dass CUBORR zu keinem Zeitpunkt Partei eines Vertrages oder einer sonstigen Vereinbarung wird, die zwischen Mitgliedern geschlossen wird.
          Mit dem Klicken auf „Drucker registrieren“ oder „Jetzt kostenlos Auftrag erstellen“ bestätigst du, diese AGB gelesen und akzeptiert zu haben.
        </Text>

        <SectionTitle>2. Anmeldung auf der Plattform und Anlegen eines Kontos</SectionTitle>
        <ArticleTitle>2.1. Anmeldebedingungen auf der Plattform</ArticleTitle>
        <Text>
          Die Plattform kann von Privatpersonen Vollendung des 18. Lebensjahres genutzt werden. Die Anmeldung eines Minderjährigen auf der Plattform ist strengstens untersagt. Mit dem Zugriff auf die Plattform, ihrer Nutzung oder Registrierung bestätigst du, das 18. Lebensjahr vollendet zu haben.
        </Text>
        <ArticleTitle>2.2. Anlegen eines Kontos</ArticleTitle>
        <Text>
          Auf der Plattform können Mitglieder Anzeigen schalten und sich mit anderen Mitgliedern austauschen, um einen 3D-Druckaufträge zu buchen. Anzeigen sind generell sichtbar, auch für Personen, die nicht auf der Plattform angemeldet sind. Allerdings können nur Personen eine Anzeige schalten oder einen Auftrag buchen, wenn sie zuvor ein Konto angelegt haben und Mitglied geworden sind.
        </Text>
        <Text>
          Zur Anmeldung auf der Plattform musst du diese AGB sowie unsere Datenschutzerklärung gelesen und akzeptiert haben.
          Du bist dazu verpflichtet, auf deinem Profil wahrheitsgemäße Angaben zu machen und diese, während der Vertragsbeziehungen mit CUBORR auf dem neuesten Stand zu halten. Du kannst Ihre Angaben jederzeit im Profil aktualisieren.
        </Text>
        <Text>
          Mit deiner Anmeldung verpflichtest du dich außerdem, dein Passwort geheim zu halten und es an niemanden weiterzugeben. Wenn du dein Passwort verlierst oder sonst einem Dritten offenlegst, verpflichtest du dich, CUBORR unverzüglich zu benachrichtigen. Für die Nutzung deines Kontos durch Dritte bist ausschließlich du verantwortlich, es sei denn, du hast CUBORR ausdrücklich über den Verlust, die betrügerische Nutzung durch einen Dritten oder die Offenlegung deines Passworts gegenüber einem Dritten benachrichtigt.
        </Text>
        <Text>
          Du verpflichtest dich, weder unter deinem eigenen Namen noch mit dem Namen eines Dritten, weitere Konten neben deinem ursprünglich angelegten Konto zu unterhalten.
        </Text>

        <SectionTitle>3. Nutzung der Leistungen</SectionTitle>
        <ArticleTitle>3.1. Schalten von Anzeigen</ArticleTitle>
        <Text>
          Sofern du die nachstehenden Bedingungen erfüllst, kannst du als Mitglied Angebote auf der Plattform erstellen und veröffentlichen, indem du Daten über den von dir genutzten 3D-Drucker eingibst. Eine Anzeige darf nur erstellt und veröffentlicht werden, wenn du alle der nachfolgenden Bedingungen erfüllst:
        </Text>
        <List>
          <li>Du verfügst über einen funktionierenden 3D-Drucker;</li>
          <li>Du bietest nur Angebote für den 3D-Drucker an, der dir gehört oder den du mit der ausdrücklichen Erlaubnis des Besitzers nutzen darfst und zur Nutzung für Ausdrucke für Dritte berechtigt bist;</li>
          <li>Du darfst und kannst in naheliegender Zukunft über den 3D-Drucker verfügen, für den eine Anzeige geschaltet wird;</li>
          <li>Du besitzt ausreichend Druckverbrauchsmaterial, um die 3D-Ausdrucke zu verwirklichen;</li>
          <li>Es besteht für Dich die Möglichkeit, die gedruckte Ware innerhalb kurzer Zeit zu versenden;</li>
          <li>Der 3D-Drucker wird in gutem Betriebszustand benutzt, die den geltenden Gesetzen entsprechen und liefert reproduzierbare qualitativ gute Ergebnisse;</li>
        </List>
        <Text>
          Für den Inhalt des von dir auf der Plattform geschalteten Angebots bist ausschließlich du selbst verantwortlich. Die in der Anzeige enthaltenen Angaben müssen daher der Wahrheit entsprechen und du verpflichtest dich, den Ausdruck bzgl. des Druckmaterials unter den in der Anzeige angegebenen Bedingungen zu bewerkstelligen.
          Zusätzlich gilt, dass die Plattform für die Buchung von 3D-Drucken für Privatpersonen bestimmt ist. Das Anbieten eines 3D-Drucks durch einen nicht im Privatbesitz befindlichen Druckers ist untersagt.
        </Text>
        <Text>
          Sofern deine Anzeige diesen AGB entspricht, wird sie auf der Plattform veröffentlicht und ist damit sowohl für Mitglieder als auch für Nicht-Mitglieder sichtbar, die eine Suche auf der Plattform oder auf der Website durchführen. CUBORR behält sich das Recht vor, in eigenem Ermessen und ohne Vorankündigung eine Anzeige nicht zu veröffentlichen bzw. jederzeit zu entfernen, die nicht den AGB entspricht, oder die sonst für schädlich für das Image der Plattform oder das seiner Leistungen gehalten wird.
        </Text>
        <ArticleTitle>3.2. Buchung eines Auftrags</ArticleTitle>
        <Text>
          CUBORR hat ein System zur Online-Buchung von Aufträgen, die auf der Plattform angeboten werden, eingerichtet.
        </Text>
        <Text>
          Wenn ein Auftraggeber sich für ein Druckangebot interessiert, kann er online eine Buchungsanfrage stellen. Daraufhin treten die Vertragsparteien miteinander in Kontakt und können die Buchung über das System abwickeln. Hierbei einigt man sich ebenfall über Preis und Umfang der zu erbringenden Leistung. Liegen übereinstimmende Verabredungen vor, erhält der Auftragnehmer eine Buchungsbestätigung. 
        </Text>
        <Text>
          Mit der Buchungsbestätigung sendet CUBORR beiden Parteien eine E-Mail, in der die Auftragsdetails aufgeführt sind. Danach bist ausschließlich du selbst für die Erfüllung des verbindlichen Vertrages gegenüber dem anderen Mitglied verantwortlich.
        </Text>
        <ArticleTitle>3.3. Bewertungssystem</ArticleTitle>
        <Text>3.3.1. Funktionsweise</Text>
        <Text>
          CUBORR freut sich, wenn du eine Bewertung über einen Auftragnehmer (wenn du ein Auftraggeber bist) oder über einen Auftraggeber (wenn du ein Auftragnehmer bist) abgibst, mit dem du ein erfolgreiches Geschäft abgeschlossen hast oder ein Geschäft hätte zustande kommen sollen. Allerdings ist es dir nicht erlaubt, eine Bewertung über ein anderes Mitglied zu hinterlassen, wenn du mit diesem keinen Vertrag eingegangen bist.
        </Text>
        <Text>
          Deine Bewertung und die vom anderen Mitglied über dich hinterlassene Bewertung, sofern vorhanden, werden auf der Plattform nach folgendem Zeitraum veröffentlicht: Direkt, nachdem beide Vertragspartner eine Bewertung hinterlassen haben oder (ii) nach 7 Tagen, wenn bis dahin nur eine Bewertung erfolgt ist.
        </Text>
        <Text>
          In besonderen Fällen hast du die Möglichkeit, auf eine Bewertung zu antworten, die ein anderes Mitglied in deinem Profil hinterlassen hat. Die Bewertung und eventuelle Antwort werden in deinem Profil veröffentlicht.
        </Text>
        <Text>3.3.2. Moderation</Text>
        <Text>
          Du bist damit einverstanden, dass CUBORR jede Bewertung bzw. Kommentar nicht veröffentlichen oder löschen kann, wenn der Inhalt gegen die AGB verstößt.
        </Text>
        <Text>3.3.3. Beschränkung</Text>
        <Text>
          CUBORR behält sich das Recht vor, dein Konto vorübergehend zu sperren, sofern du über mehrere Bewertungen hinweg ausschließlich durchschnittliche Rückmeldungen erhalten hast.
        </Text>
        <SectionTitle>4. Finanzielle Konditionen</SectionTitle>
        <Text>
          Der Zugang zur Plattform, die Anmeldung, die Suche, die Ansicht und das Schalten von Anzeigen sind kostenfrei. 
        </Text>
        <Text>
          Der Kostenbeitrag bei einem zustande gekommenen Kauf wird von dir als Auftragnehmer unter deiner alleinigen Verantwortung bestimmt. Es ist allerdings untersagt, die Plattform in irgendeiner Form zu nutzen, um damit auf lange Sicht Gewinne zu erzielen. Du verpflichtest dich damit, den Kostenbeitrag, dessen Zahlung du von deinem Auftraggeber verlangst, auf die Betriebskosten des Druckers, seinem Zubehör, dessen Anschaffungspreis sowie sonstige sich darum drehende von dir erfüllte Leistungen (z.B. Versand) und Kosten zu beschränken, die dir effektiv dadurch entstehen. 
        </Text>
        <Text>
          Du verpflichtest dich somit dazu, die Plattform und Leistungen von CUBORR ausschließlich zur Kontaktaufnahme und nicht zur Gewinnerzielung oder zu gewerblichen Zwecken zu nutzen.
        </Text>
        <Text>
          CUBORR behält sich das Recht vor, dein Konto vorübergehend zu sperren, den Zugriff auf Leistungen zu beschränken oder, in schweren Fällen, deine Mitgliedschaft zu beenden, sofern deine Aktivität auf dieser Plattform aufgrund der Art der angebotenen Aufträge oder der Häufigkeit Grund zur Annahme geben, dass du einen Gewinn erzielen oder einen Gewinn erzielen möchtest.
        </Text>
        <SectionTitle>5. Verhalten von Nutzern der Plattform und Mitgliedern</SectionTitle>
        <Text>
          Du hast die alleinige Verantwortung für die Einhaltung aller Gesetze, Vorschriften und Verpflichtung, die auf deine Nutzung der Plattform Anwendung finden.
        </Text>
        <Text>
          Weiterhin verpflichtest du dich bei der Nutzung der Plattform und im gegenseitigen Austausch zu Folgendem:
        </Text>
        <List>
          <li>die Plattform nicht für berufliche, gewerbliche oder gewinnorientierte Zwecke zu nutzen;</li>
          <li>cuborr (insbesondere beim Anlegen oder Aktualisieren deines Kontos) oder anderen Mitgliedern keine falschen, irreführenden, arglistigen oder betrügerischen Angaben zu kommunizieren;</li>
          <li>sich weder auf eine Weise zu äußern oder zu verhalten oder irgendeinen Inhalt auf der Plattform zu veröffentlichen, der diffamierend, beleidigend, obszön, pornographisch, vulgär, anstößig, aggressiv, unerwünscht, gewalttätig, bedrohlich, belästigend, rassistisch oder ausländerfeindlich ist oder sexuelle Konnotationen beinhaltet, zu Gewalt, Diskriminierung oder Hass aufruft, Aktivitäten im Zusammenhang mit oder dem Konsum von illegalen Substanzen fördert oder der ganz allgemein gegen die Zweckbestimmung der Plattform verstößt, die Rechte von CUBORR oder eines Dritten verletzt oder gegen die guten Sitten verstoßen kann;</li>
          <li>nicht die Rechte von cuborr, insbesondere ihre Bildrechte oder sonst geistige Eigentumsrechte zu verletzen;</li>
          <li>nicht mehr als ein Konto auf der Plattform zu eröffnen und kein Konto auf den Namen eines Dritten zu eröffnen;</li>
          <li>diese AGB und die Datenschutzrichtlinie zu beachten;</li>
        </List>

        <SectionTitle>6. Geistiges Eigentumsrecht</SectionTitle>
        <ArticleTitle>6.1. Von CUBORR veröffentlichter Content</ArticleTitle>
        <Text>
          Vorbehaltlich der von Mitgliedern zur Verfügung gestellten Inhalten ist CUBORR der alleinige Inhaber sämtlicher geistigen Eigentumsrechte in Bezug auf die Leistungen, die Plattform, deren Inhalte (insbesondere Texte, Bilder, Designs, Logos, Töne, Daten, Grafiken) und der seinem Betrieb gewährleistenden Software und Datenbanken.
        </Text>
        <Text>
          CUBORR gewährt dir ein nicht exklusives, persönliches und nicht übertragbares Nutzungsrecht der Plattform und der Leistungen für deinen persönlichen und privaten Gebrauch auf nicht gewerblicher Basis und gemäß den Zweckbestimmungen der Plattform und der Leistungen.
        </Text>
        <Text>
          Jegliche anderweitige Nutzung der Plattform und der Leistungen sowie Nutzung und Verwertung deren Inhalte ohne die vorherige schriftliche Erlaubnis von CUBORR ist untersagt. 
        </Text>
        <ArticleTitle>6.2. Von dir auf der Plattform veröffentlichte Inhalte</ArticleTitle>
        <Text>
          Um die Bereitstellung des Services zu ermöglichen und entsprechend der Zweckbestimmung der Plattform gewährst du CUBORR eine nicht exklusive Nutzungslizenz der Inhalte und Daten, die du im Zusammenhang mit deiner Nutzung des Dienstes bereitgestellt hast (nachstehend bezeichnet als Ihr „Mitglieds-Content“), um CUBORR die Bereitstellung der Inhalte auf der Plattform für die Öffentlichkeit über das digitale Netzwerk und gemäß jedem beliebigen Kommunikationsprotokoll (insbesondere Internet und mobiles Netzwerk) zum Zwecke der Bereitstellung der Plattform und der Leistungen zu ermöglichen. Diese Nutzungslizenz gilt für die Dauer des Bestehens deines Accounts bei cuborr. Du erlaubest CUBORR insbesondere Mitglieds-Content wie folgt zu reproduzieren, darzustellen, anzupassen und zu übersetzen:
        </Text>
        <List>
          <li>
            Du gestattest CUBORR die vollständige oder teilweise Wiedergabe deines Mitglieds-Contents auf jeglichen digitalen bekannten oder derzeitig noch unbekannten Aufzeichnungsmedien und insbesondere auf jeglichem Server, Festplatte, Speicherkarte oder sonstigen äquivalenten Medien, ganz gleich, in welchem Format und durch welchen bekannten oder bisher unbekannten Prozess, soweit dies für einen Speicher-, Backup-, Übertragungs- oder Downloadvorgang notwendig ist, der mit dem Betrieb der Plattform und der Bereitstellung des Dienstes verbunden ist;
          </li>
          <li>
            Du gestattest CUBORR die erforderliche Anpassung und Übersetzung Ihres Mitglieds-Contents und die Wiedergabe dieser Anpassungen auf jedem digitalen aktuellen oder zukünftigen, im obigen Punkt genannten Medium mit der Zielsetzung, die Plattform und die Leistungen insbesondere in verschiedenen Sprachen bereitzustellen. Dieses Recht schließt insbesondere die Option zur Vornahme von Abänderungen an der Formatierung Ihres Mitglieds-Contents in Bezug auf Ihre Urheberpersönlichkeitsrechte für die Einhaltung der graphischen Vorgaben der Plattform und / oder ihrer technischen Kompatibilität mit einer Anzeige ihrer Veröffentlichung über die Plattform ein.
          </li>
        </List>

        <SectionTitle>7. Die Rolle von cuborr</SectionTitle>
        <Text>
          CUBORR ist keine Partei in irgendeiner Vereinbarung zwischen dir und anderen Mitgliedern. CUBORR weist dich darauf hin, dass die Gültigkeit, Richtigkeit oder Gesetzmäßigkeit der Anzeigen, angebotenen Aufträge von CUBORR nicht kontrolliert wird. Die Aufgaben von CUBORR beschränken sich auf die Bereitstellung des Zugangs zur Nutzung der Plattform.
        </Text>
        <Text>
          Die Mitglieder handeln in eigener Verantwortung.
        </Text>
        <Text>
          CUBORR übernimmt in seiner Eigenschaft als Vermittler keinerlei Haftung für die Durchführung eines Druckauftrags. Dies gilt insbesondere für das Vorliegen oder Eintreffen einer der folgenden Fälle:
        </Text>
        <List>
          <li>falschen Angaben, die vom Auftragnehmer in seiner Anzeige oder sonst in Bezug auf den Auftrag und seine Bedingungen gemacht werden;</li>
          <li>Stornierung oder Änderung eines Auftrags durch ein Mitglied</li>
          <li>Zahlungsausfall des Kostenbeitrags seitens eines Auftraggebers;</li>
          <li>des Verhaltens seiner Mitglieder während, vor oder nach den Vertragsverhandlungen.</li>
        </List>
        <SectionTitle>8. Betrieb, Verfügbarkeit und Funktionalitäten der Plattform</SectionTitle>
        <Text>
          CUBORR versucht, soweit wie möglich, den Zugriff auf die Plattform 7 Tage die Woche und 24 Stunden am Tag zu ermöglichen. Nichtsdestotrotz kann es vorübergehend und ohne Vorankündigung aufgrund von technischen Wartungsarbeiten, Migration von Daten, Updates oder sonstigen technischen Begebenheiten unserer Plattform oder allgemein des Netzwerks zu Ausfällen kommen.
        </Text>
        <Text>
          Weiterhin behält sich CUBORR das Recht vor, den Zugriff auf die Plattform oder seine Funktionen in seinem eigenen Ermessen, vorübergehend oder dauerhaft, vollständig oder teilweise; zu ändern oder auszusetzen.
        </Text>

        <SectionTitle>9. Änderung der AGB</SectionTitle>
        <Text>
          Diese AGB und die per ausdrücklicher Bezugnahme darin aufgenommenen Dokumente bilden die vollständige Vereinbarung zwischen dir und CUBORR bezüglich seiner Nutzung der Plattform und der Leistungen. Weitere Dokumente, insbesondere die Hinweise auf der Plattform (FAQ usw.) dienen als Richtlinien und können Regelungen im Einzelnen konkretisieren.
        </Text>
        <Text>
          CUBORR behält sich das Recht vor, diese AGB zu ändern, um sie einer veränderten technologischen oder geschäftlichen Umgebung oder einer geänderten Rechtslage anzupassen. Ist eine solche Änderung erforderlich, werden wir dich darüber per Email und mindestens 14 Tage vor Inkrafttreten der geänderten AGB informieren. Die Änderungen in den AGB werden wirksam, wenn du nicht innerhalb der in der E-Mail genannten Frist (die in jedem Fall mindestens 14 Tage beträgt) nach Erhalt dieser E-Mail ausdrücklich und in Textform der Änderung widersprichst. Auf diese Frist und die Folgen eines Widerspruchs werden wir dich in der E-Mail nochmals hinweisen.
        </Text>

        <SectionTitle>10. Geltendes Recht – Rechtsstreit</SectionTitle>
        <Text>
          Diese AGB sind in deutscher Sprache verfasst und unterliegen dem deutschen Recht unter Ausschluss des UN-Kaufrechts.
        </Text>
        <Text>
          Wir sind nicht verpflichtet und grundsätzlich nicht bereit an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </Text>
        <Text>
          Bei jeglichen Fragen kannst du dich unter Verwendung der auf der Website verfügbaren E-Mail-Adressen an uns wenden. 
        </Text>
      </StyledContainer>
      <Footer />
    </div>
  );
};
