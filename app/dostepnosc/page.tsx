import { Header } from "../common/Header";

export default function Dostepnosc() {
    return <main>
        <Header />
        <h2>{"Dostępność"}</h2>
        <p id='a11y-wstep'>
        <span id='a11y-podmiot'>Poradnia Psychologiczno-Pedagogiczna numer 1 w Gorzowie Wielkopolskim</span> zobowiązuje się zapewnić dostępność swojej strony internetowej zgodnie z przepisami ustawy z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
        </p>
        <p>Deklaracja dostępności dotyczy strony internetowej <a id="a11y-url" href='https://ppp1gorzow.pl/'></a>http://ppp1gorzow.pl/</p>
        <p>Data publikacji strony internetowej: <span id='a11y-data-publikacja'>2024-XX-XX</span>.</p>
        <p>Data ostatniej istotnej aktualizacji: <span id='a11y-data-aktualizacja'>2024-XX-XX</span>.</p>
        <h3>Stan dostępności cyfrowej</h3>
        <p id='a11y-status'>
           Strona internetowa jest <strong>częściowo zgodna</strong> z ustawą z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych z powodu niezgodności lub wyłączeń wymienionych poniżej.
        </p>
        <h4>Niedostępne elementy i treści</h4>
        <h3>Przygotowanie deklaracji dostępności</h3>
        <p>Data sporządzenia deklaracji: <span id='a11y-data-sporzadzenie'>2024-XX-XX</span>.</p>
        <p>Data ostatniego przeglądu deklaracji:<span id='a11y-data-przeglad'>2024-XX-XX</span>.</p>
        <p>Deklarację sporządzono na podstawie samooceny przeprowadzonej przez podmiot publiczny.</p>
        <h3>Skróty klawiaturowe</h3>
        <p>Na tej stronie internetowej można korzystać ze standardowych skrótów klawiaturowych.</p>
        <h3 id='a11y-kontakt'>Informacje zwrotne i dane kontaktowe</h3>
        <p>Na tej stronie internetowej są problemy, które wynikają z niespełnienia wymogów dostępności cyfrowej? Zgłoś to do{' '}
        <span id="a11y-osoba">Magdalena Madejczyk</span>, e-mailowo — <a href="mailto:sekretariat@ppp1gorzow.pl" id="a11y-email">sekretariat@ppp1gorzow.pl</a>&nbsp;lub telefonicznie — <span id="a11y-telefon">574-535-707</span>.</p>
        <p>W zgłoszeniu podaj:</p>
        <ul>
            <li>swoje imię i nazwisko;</li>
            <li>swoje&nbsp;dane kontaktowe (np. numer telefonu, e-mail);</li>
            <li>dokładny adres strony internetowej, na której jest niedostępny element lub treść;&nbsp;</li>
            <li>opis, na czym polega problem i jaki sposób jego rozwiązania&nbsp;byłby dla Ciebie najwygodniejszy.</li>
        </ul>
        <p id="a11y-procedura"><span><strong>Obsługa wniosków i skarg związanych z dostępnością&nbsp;</strong></span></p>
        <p>Na Twoje zgłoszenie odpowiemy najszybciej jak to możliwe, nie później niż w ciągu 7 dni od jego otrzymania.</p>
        <p>Jeżeli ten termin będzie dla nas zbyt krótki, poinformujemy Cię o tym. W tej informacji podamy nowy termin, do którego poprawimy zgłoszone przez Ciebie błędy lub przygotujemy informacje w alternatywny sposób. Ten nowy termin nie będzie dłuższy niż 2 miesiące.</p>
        <p>Jeżeli nie będziemy w stanie zapewnić dostępności cyfrowej strony internetowej lub treści według&nbsp;Twojego zgłoszenia, zaproponujemy Ci dostęp do nich w alternatywny sposób.</p>
        <p>Jeżeli nadal będziesz mieć uwagi do naszych działań związane z dostępnością cyfrową, możesz zgłosić je do&nbsp;<a href="https://bip.brpo.gov.pl/pl/content/zlozenie-wniosku-do-rzecznika-praw-obywatelskich">Rzecznika Praw Obywatelskich</a>.</p>
        <h3 id="”a11y-architektura”">Dostępność architektoniczna</h3>
        <p><strong>Poradnia Psychologiczno-Pedagogiczna numer 1 w Gorzowie Wielkopolskim, ul. Józefa Pankiewicza 5-7 66-400 Gorzów Wlkp.</strong></p>
        <p>Budynek: Powiat Gorzowski w Gorzowie Wlkp.</p>
        <p>Do budynku prowadzi 2 wejścia od ul. Pankiewicza 5-7</p>
        <p>Do wejścia prowadzą: chodnik.</p>
        <p>Nad wejściem nie ma głośników systemu naprowadzającego dźwiękowo osoby niewidome i
        słabowidzące.</p>
        <p>Wejście nie jest zabezpieczone bramkami.</p>
        <p>W budynku jest winda.</p>
        <p>Dla osób na wózkach dostępne są korytarze i pomieszczenia na parterze oraz na piętrach
        1,2,3.</p>
        <p>Toaleta dla osób niepełnosprawnych znajduje się na każdej kondygnacji.</p>
        <p>Przed budynkiem wyznaczono 2 miejsca parkingowe dla osób niepełnosprawnych.
        Do budynku i wszystkich jego pomieszczeń można wejść z psem asystującym i psem
        przewodnikiem.</p>
        <p>W budynku nie ma pętli indukcyjnych.</p>
        <p>W budynku nie ma oznaczeń w alfabecie brajla ani oznaczeń kontrastowych lub w druku
        powiększonym dla osób niewidomych i słabowidzących.</p>
        <p>
        Istnieje możliwość skorzystania z bezpłatnych usług tłumacza migowego w godzinach pracy
        urzędu, tj.</p>
        <p>poniedziałek 7.30 - 17.00</p>
        <p>wtorek-czwartek 7.30 - 15.30</p>
        <p>piątek 7.30 - 14.00</p>
        <p>Kontakt: 95 7 330 400 - PUNKT OBSŁUGI INTERESANTA - Parter</p>
    </main>
}