import Link from "next/link";
import { getMetadata } from "../common/Title";

const title = 'Do pobrania'
export const metadata = getMetadata(title)

const listOfFiles = [
    {
        href:'/pliki/Informacja_wychowawcy_o_dziecku.docx',
        title:'Informacja wychowawcy o dziecku (35 KB, DOCX)'
    },
    {
        href:"/pliki/Ściezka_opinia_ze_szkoły.doc",
        title:'Ścieżka - opinia ze szkoły (48 KB, DOC)'
    },
    {
        href:"/pliki/Wniosek_o_wydanie_informacji.doc",
        title:'Wnioski o wydanie informacji (29 KB, DOC)'
    },
    {
        href:"/pliki/Wniosek_o_wydanie_opinii.doc",
        title:'Wnioski o wydanie opinii (34 KB, DOC)'
    },
    {
        href:'/pliki/Wniosek_o_wydanie_orzeczenia.docx',
        title:'Wnioski o wydanie orzeczenia (25 KB, DOCX)'
    },
    {
        href:'/pliki/Zaświadczenie_lekarskie.doc',
        title:'Zaświadczenie lekarskie (15 KB, DOC)'
    },
    {
        href:'/pliki/Zaświadczenie_lekarskie_niedosłuch.pdf',
        title:'Zaświadczenie lekarskie - niedosłuch (593 KB, PDF)'
    },
    {
        href:"/pliki/Zaświadczenie_okulistyczne.pdf",
        title:'Zaświadczenie okulistyczne (221 KB, PDF)'
    },
    {
        href:'/pliki/Zgoda_na_badania.doc',
        title:'Zgoda na badania (42 KB, DOC)'
    }
]

export default function Dopobrania() {
    return <main>
        <h2>{title}</h2>
        <ul>
            {
                listOfFiles.map((f) => <li key={f.title}>
                        <Link
                            href={f.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title='Link otwiera się w nowym oknie przeglądarki'
                        >{f.title}</Link>
                    </li>)
            }
        </ul>
    </main>
}