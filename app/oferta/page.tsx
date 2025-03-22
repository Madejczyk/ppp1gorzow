import Link from "next/link";
import { getMetadata } from "../common/Title";
import { sanityFetch } from "@/sanity/lib/client";
const title = 'Oferta'
export const metadata = getMetadata(title)

type Doc = {
    title: string,
    file: {
        url: string
    }
}

export default async function Oferta() {
    const docs: Doc[] = await sanityFetch({
        query: `*[_type == "offer"]{
            title,
            "file": file.asset->{url},
            } | order(kolejnosc asc)`,
        tags: ["offer"],
    });

    return <main>
        <h2>{title}</h2>
        {
            docs.map(({file, title}) => <Link
                key={title}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                title='Link otwiera się w nowym oknie przeglądarki'
            >{title}</Link>)
        }
    </main>
}