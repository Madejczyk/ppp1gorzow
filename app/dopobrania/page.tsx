import Link from "next/link";
import { Header } from "../common/Header";

export default function Dopobrania() {
    return <main>
        <Header />
        <h2>{"Do pobrania"}</h2>
        <Link
            href="/pliki/Informacja_wychowawcy_o_dziecku.docx"
            target="_blank"
            rel="noopener noreferrer"
        >Informacja wychowawcy o dziecku</Link>
        <Link
            href="/pliki/Ściezka_opinia_ze_szkoły.doc"
            target="_blank"
            rel="noopener noreferrer"
        >Ścieżka - opinia ze szkoły</Link>
        <Link
            href="/pliki/Wniosek_o_wydanie_informacji.doc"
            target="_blank"
            rel="noopener noreferrer"
        >Wnioski o wydanie informacji</Link>
        <Link
            href="/pliki/Wniosek_o_wydanie_opinii.doc"
            target="_blank"
            rel="noopener noreferrer"
        >Wnioski o wydanie opinii</Link>
        <Link
            href="/pliki/Wniosek_o_wydanie_orzeczenia.docx"
            target="_blank"
            rel="noopener noreferrer"
        >Wnioski o wydanie orzeczenia</Link>
        <Link
            href="/pliki/Zaświadczenie_lekarskie.doc"
            target="_blank"
            rel="noopener noreferrer"
        >Zaświadczenie lekarskie</Link>
        <Link
            href="/pliki/Zaświadczenie_lekarskie_niedosłuch.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Zaświadczenie lekarskie - niedosłuch</Link>
        <Link
            href="/pliki/Zaświadczenie_okulistyczne.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Zaświadczenie okulistyczne</Link>
        <Link
            href="/pliki/Zgoda_na_badania.doc"
            target="_blank"
            rel="noopener noreferrer"
        >Zgoda na badania</Link>
    </main>
}