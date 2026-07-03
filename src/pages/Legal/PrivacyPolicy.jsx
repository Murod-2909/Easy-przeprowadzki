import React from 'react';
import "./legal.scss";

// RODO/GDPR: szablon polityki prywatności — treść do weryfikacji przez prawnika.
const PrivacyPolicy = () => {
    return (
        <div className="legal">
            <title>Polityka Prywatności – Easy Przeprowadzki</title>
            <meta name="robots" content="noindex, follow"/>
            <h1>Polityka Prywatności</h1>
            <p className="legal_updated">Ostatnia aktualizacja: 3 lipca 2026</p>

            <h2>1. Administrator danych</h2>
            <p>
                Administratorem Państwa danych osobowych jest Easy Przeprowadzki z siedzibą przy
                ul. Złota 75A/7, 00-819 Warszawa, NIP: 5273166825 (dalej: „Administrator").
                Kontakt: <a href="mailto:easyprzeprowadzka@gmail.com">easyprzeprowadzka@gmail.com</a>,
                tel. <a href="tel:+48509931555">+48 509 931 555</a>.
            </p>

            <h2>2. Jakie dane zbieramy</h2>
            <ul>
                <li>dane podane w formularzu kontaktowym: imię, numer telefonu, adres e-mail, temat i treść wiadomości;</li>
                <li>dane zbierane automatycznie: adres IP, typ przeglądarki, dane o korzystaniu z serwisu
                    (pliki cookies, Google Analytics/Tag Manager, Microsoft Clarity).</li>
            </ul>

            <h2>3. Cele i podstawy przetwarzania</h2>
            <ul>
                <li>obsługa zapytań i przygotowanie wyceny przeprowadzki — art. 6 ust. 1 lit. b RODO;</li>
                <li>analiza ruchu na stronie i poprawa jakości usług — art. 6 ust. 1 lit. f RODO
                    (prawnie uzasadniony interes Administratora);</li>
                <li>marketing własnych usług — art. 6 ust. 1 lit. a RODO (zgoda).</li>
            </ul>

            <h2>4. Okres przechowywania danych</h2>
            <p>
                Dane z formularza kontaktowego przechowujemy przez okres niezbędny do obsługi zapytania,
                nie dłużej niż 12 miesięcy od ostatniego kontaktu. Dane analityczne przechowywane są
                zgodnie z ustawieniami narzędzi analitycznych (maks. 26 miesięcy).
            </p>

            <h2>5. Odbiorcy danych</h2>
            <p>
                Dane mogą być powierzane podmiotom świadczącym dla nas usługi hostingowe i analityczne
                (Google LLC, Microsoft Corporation) na podstawie umów powierzenia, z zachowaniem wymogów RODO.
            </p>

            <h2>6. Pliki cookies</h2>
            <p>
                Serwis wykorzystuje pliki cookies w celach funkcjonalnych i analitycznych
                (Google Tag Manager, Microsoft Clarity). Mogą Państwo zarządzać plikami cookies
                w ustawieniach przeglądarki. Korzystanie z serwisu bez zmiany ustawień oznacza
                zgodę na ich zapisywanie.
            </p>

            <h2>7. Państwa prawa</h2>
            <ul>
                <li>prawo dostępu do danych oraz otrzymania ich kopii;</li>
                <li>prawo do sprostowania, usunięcia lub ograniczenia przetwarzania danych;</li>
                <li>prawo do wniesienia sprzeciwu wobec przetwarzania;</li>
                <li>prawo do przenoszenia danych;</li>
                <li>prawo do cofnięcia zgody w dowolnym momencie;</li>
                <li>prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).</li>
            </ul>

            <h2>8. Kontakt w sprawie danych osobowych</h2>
            <p>
                W sprawach związanych z ochroną danych osobowych prosimy o kontakt:
                <a href="mailto:easyprzeprowadzka@gmail.com"> easyprzeprowadzka@gmail.com</a>.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
