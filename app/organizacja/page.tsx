import Link from "next/link";
import { getMetadata } from "../common/Title";
import { sanityFetch } from "@/sanity/lib/client";
const title = 'Organizacja'
export const metadata = getMetadata(title)

type Doc = {
    title: string,
    file: {
        url: string
    }
}

export default async function Organizacja() {
    const docs: Doc[] = await sanityFetch({
        query: `*[_type == "organization"]{
            title,
            "file": file.asset->{url},
            } | order(title asc)`,
        tags: ["organization"],
    });

    return <main>
        <h2>{title}</h2>
        <ul>
        <li><Link href="/kadra">Kadra</Link></li>
        {
            docs.map(({file, title}) => <li key={title}><Link
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                title='Link otwiera się w nowym oknie przeglądarki'
            >{title}</Link></li>)
        }
        </ul>
    </main>
}