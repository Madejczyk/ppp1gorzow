import { Informacja } from "../common/Informacja";
import Map from "../common/mapa";
import { getMetadata } from "../common/Title";
const title = 'Kontakt'
export const metadata = getMetadata(title)

export default function Kontakt() {
    return <main>
        <h2>{title}</h2>
        <Informacja/>
        <Map/>
    </main>
}