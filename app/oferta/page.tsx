import Link from "next/link";
import { Header } from "../common/Header";
import { getMetadata } from "../common/Title";
const title = 'Oferta'
export const metadata = getMetadata(title)

export default function Oferta() {
    return <main>
        <Header />
        <h2>{title}</h2>
        <Link
            href="/pliki/Oferta_PPP1_2023-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title='Link otwiera się w nowym oknie przeglądarki'
        >Oferta PPP1 2023-2024 (412 KB, PDF)</Link>
    </main>
}