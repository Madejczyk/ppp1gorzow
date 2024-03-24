import Link from 'next/link'

export const Header = () => {
    return <>
        <h1>{'PORADNIA PSYCHOLOGICZNO-PEDAGOGICZNA NR 1 W GORZOWIE WLKP.'}</h1>
        <nav>
            <Link href="/#">Strona Główna</Link>
            <Link href="/aktualnosci">Aktualności</Link>
            <Link href="/organizacja">Organizacja</Link>
            <Link href="/oferta">Oferta</Link>
            <Link href="/dopobrania">Do pobrania</Link>
            <Link href="/linki">Linki</Link>
            <Link href="/kontakt">Kontakt</Link>
        </nav>
    </>
}