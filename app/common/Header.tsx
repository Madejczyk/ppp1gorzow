import Link from 'next/link'
import {Narzedzia} from './Narzedzia'

export const Header = () => {
    return <div className='header'>
        <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            <img
                src="/logo.png"
                width={250}
                height={150}
                alt="Logo - chłopiec stojący przy trzech literach P. Symbolizująch skrót: Poradni psychologiczno pedagogicznej"
            />
            <h1>PPP 1<br/>GORZÓW</h1>
        </div>
        <div>
            <div style={{display: 'flex', justifyContent:'flex-end', gap: '1rem', alignItems: 'center', flexWrap: 'wrap'}}>
                <Narzedzia/>
                <div style={{display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                    <Link
                        title="https://www.powiatgorzowski.pl/ - Otwiera się w nowym oknie przeglądarki"
                        href='https://www.powiatgorzowski.pl/'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/powiat-gorzowski.png"
                            width={50}
                            height={47}
                            alt="Logo - powiatu gorzowskiego"
                        />
                    </Link>
                    <Link
                        title="https://bip.wrota.lubuskie.pl/ppp1 - Otwiera się w nowym oknie przeglądarki"
                        href='https://bip.wrota.lubuskie.pl/ppp1'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            style={{backgroundColor: 'white'}}
                            src="/bip.svg"
                            width={50}
                            height={47}
                            alt="Logo - biuletyn informacji publicznej"
                        />
                    </Link>
                    <Link
                        title="https://www.facebook.com/poradnianr1gorzow - Otwiera się w nowym oknie przeglądarki"
                        href='https://www.facebook.com/poradnianr1gorzow'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/facebook.png"
                            width={50}
                            height={47}
                            alt="Logo - facebook"
                        />
                    </Link>
                </div>
            </div>
            <nav style={{textTransform: 'uppercase'}}>
                <Link href="/#">Strona Główna</Link>
                <Link href="/aktualnosci">Aktualności</Link>
                <Link href="/organizacja">Organizacja</Link>
                <Link href="/oferta">Oferta</Link>
                <Link href="/dopobrania">Do pobrania</Link>
                <Link href="/linki">Linki</Link>
                <Link href="/kontakt">Kontakt</Link>
            </nav>
        </div>
    </div>
}