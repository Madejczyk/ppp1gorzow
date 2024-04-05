import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/app/common/Header";

const inter = Nunito({ subsets: ["latin"]});

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
                <Header/>
                <hr/>
                {children}
            </body>
        </html>
    );
}
