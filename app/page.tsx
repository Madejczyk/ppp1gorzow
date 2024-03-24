import { Header } from "./common/Header";
import Map from "./common/mapa";
import { Informacja } from './common/Informacja';

export default function Home() {

    return <main>
        <Header />
        <img
            src="/logo.png"
            width={268}
            height={173}
            alt="Logo - chłopiec stojący przy trzech literach P. Symbolizująch skrót: Poradni psychologiczno pedagogicznej"
        />
        <h2>
  Przyjmujemy bezpłatnie i bez skierowań:
        </h2>
        <ul>
            <li>Dzieci oraz młodzież uczęszczające do szkół i przedszkoli znajdujących się na terenie pięciu gmin powiatu gorzowskiego: Bogdaniec, Deszczno, Kłodawa, Lubiszyn, Santok.</li>
            <li>Dzieci w wieku 0-6 lat zamieszkałe na obszarze wyżej wymienionych gmin (nieobjęte opieką placówek oświatowych).</li>
        </ul>

        <Informacja/>
        <Map/>
    </main>
}
