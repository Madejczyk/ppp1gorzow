import Link from "next/link";
import { getMetadata } from "../common/Title";
import { sanityFetch } from "@/sanity/lib/client";

const title = 'Do pobrania'
export const metadata = getMetadata(title)

type Doc = {
    title: string,
    file: {
        url: string
    }
}

export default async function Dopobrania() {
    const docs: Doc[] = await sanityFetch({
        query: `*[_type == "toDownload"]{
            title,
            "file": file.asset->{url},
            } | order(title asc)`,
        tags: ["toDownload"],
    });

    return <main>
        <h2>{title}</h2>
        <ul>
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