import React from 'react';
import "./legal.scss";

// Szablon regulaminu świadczenia usług — treść do weryfikacji przez prawnika.
const Terms = () => {
    return (
        <div className="legal">
            <title>Regulamin – Easy Przeprowadzki</title>
            <meta name="robots" content="noindex, follow"/>
            <h1>Regulamin świadczenia usług</h1>
            <p className="legal_updated">Ostatnia aktualizacja: 3 lipca 2026</p>

            <h2>1. Postanowienia ogólne</h2>
            <p>
                Niniejszy regulamin określa zasady świadczenia usług przeprowadzkowych przez
                Easy Przeprowadzki, ul. Złota 75A/7, 00-819 Warszawa, NIP: 5273166825
                (dalej: „Usługodawca").
            </p>

            <h2>2. Zakres usług</h2>
            <ul>
                <li>przeprowadzki mieszkań, domów i biur na terenie Warszawy i okolic;</li>
                <li>transport rzeczy wraz z załadunkiem i rozładunkiem;</li>
                <li>pakowanie i zabezpieczanie rzeczy (usługa dodatkowa);</li>
                <li>montaż i demontaż mebli (usługa dodatkowa).</li>
            </ul>

            <h2>3. Wycena i płatność</h2>
            <p>
                Ceny usług naliczane są według stawki godzinowej wskazanej w cenniku na stronie.
                Podane kwoty dotyczą pierwszej godziny pracy; każda kolejna godzina rozliczana jest
                zgodnie z cennikiem. Ostateczna wycena zależy od ilości rzeczy, odległości oraz
                warunków (piętro, winda, dostęp dla pojazdu).
            </p>

            <h2>4. Rezerwacja i odwołanie</h2>
            <p>
                Rezerwacji terminu można dokonać telefonicznie lub przez formularz kontaktowy.
                Odwołanie rezerwacji jest bezpłatne najpóźniej 24 godziny przed umówionym terminem.
            </p>

            <h2>5. Odpowiedzialność</h2>
            <p>
                Usługodawca ponosi odpowiedzialność za powierzone rzeczy w trakcie transportu
                zgodnie z obowiązującymi przepisami prawa. Rzeczy szczególnie wartościowe
                prosimy zgłaszać przed rozpoczęciem przeprowadzki.
            </p>

            <h2>6. Reklamacje</h2>
            <p>
                Reklamacje można składać na adres
                <a href="mailto:easyprzeprowadzka@gmail.com"> easyprzeprowadzka@gmail.com</a> w terminie
                14 dni od wykonania usługi. Reklamacje rozpatrujemy w ciągu 14 dni roboczych.
            </p>

            <h2>7. Postanowienia końcowe</h2>
            <p>
                W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy
                Kodeksu cywilnego. Zasady przetwarzania danych osobowych określa
                <a href="/privacy-policy"> Polityka Prywatności</a>.
            </p>
        </div>
    );
};

export default Terms;
