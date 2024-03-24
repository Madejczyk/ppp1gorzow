import { Header } from "../common/Header";
import { Informacja } from "../common/Informacja";
import Map from "../common/mapa";

export default function Kontakt() {
    return <main>
        <Header />
        <h2>{"Kontakt"}</h2>
        <Informacja/>
        <Map/>
    </main>
}