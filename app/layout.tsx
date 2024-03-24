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
                    <Narzedzia/>
                </div>
                <div className="facebook-link">
                    <Link
                        href='https://www.facebook.com/poradnianr1gorzow'
                        target="_blank"
                        rel="noopener noreferrer"
                    >Facebook</Link>
                </div>
            </body>
        </html>
    );
}
