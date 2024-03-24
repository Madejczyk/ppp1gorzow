import Link from "next/link";
import { Header } from "../common/Header";

export default function Organizacja() {
    return <main>
        <Header />
        <h2>{"Organizacja"}</h2>
        <Link href="/kadra">Kadra</Link>
        <Link
            href="/pliki/Koncepcja_PPP1.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Koncepcja</Link>
        <Link
            href="/pliki/Statut_PPP1.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Statut</Link>
        <Link
            href="/pliki/Plan_pracy_PPP1 2023-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Plan pracy</Link>
        <Link
            href="/pliki/Wersja_skrócona_standardy_PPP1.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Standardy ochrony małoletnich - wersja skrócona</Link>
        <Link
            href="/pliki/Standardy_ochrony_małoletnich.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Standardy ochrony małoletnich</Link>
    </main>
}