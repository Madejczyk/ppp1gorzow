import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Narzedzia } from "./Narzedzia";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Poradnia Psychologiczno-Pedagogiczna nr 1 w Gorzowie Wlkp.",
    description: "Poradnia Psychologiczno-Pedagogiczna numer 1 w Gorzowie Wielkopolskim",
    icons: {
        shortcut: ['/logo.png'],
    }

};

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body className={inter.className}>
                {children}
                <div className='accesibility-menu'>
                </div>
                <div className="linki">
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
                    <Narzedzia/>
                </div>
            </body>
        </html>
    );
}
