import Link from "next/link";
import { Header } from "../common/Header";
import { getMetadata } from "../common/Title";
const title = 'Organizacja'
export const metadata = getMetadata(title)

export default function Organizacja() {
    return <main>
        <Header />
        <h2>{title}</h2>
        <ul>
        <li><Link href="/kadra">Kadra</Link></li>
        <li><Link
            href="/pliki/Koncepcja_PPP1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title='Link otwiera się w nowym oknie przeglądarki'
        >Koncepcja (280 KB, PDF)</Link></li>
        <li><Link
            href="/pliki/Statut_PPP1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title='Link otwiera się w nowym oknie przeglądarki'
        >Statut (270 KB, PDF)</Link></li>
        <li><Link
            href="/pliki/Plan_pracy_PPP1 2023-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title='Link otwiera się w nowym oknie przeglądarki'
        >Plan pracy (471 KB, PDF)</Link></li>
        <li><Link
            href="/pliki/Wersja_skrócona_standardy_PPP1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title='Link otwiera się w nowym oknie przeglądarki'
        >Standardy ochrony małoletnich - wersja skrócona (179 KB, PDF)</Link></li>
        <li><Link
            href="/pliki/Standardy_ochrony_małoletnich.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title='Link otwiera się w nowym oknie przeglądarki'
        >Standardy ochrony małoletnich (1048 KB, PDF)</Link></li>
        </ul>
    </main>
}