import Link from "next/link";
import { Header } from "../common/Header";

export default function Oferta() {
    return <main>
        <Header />
        <h2>{"Oferta"}</h2>
        <Link
            href="/pliki/Oferta_PPP1_2023-2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >Oferta PPP1 2023-2024</Link>
    </main>
}