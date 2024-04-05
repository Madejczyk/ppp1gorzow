import { TypedObject } from "sanity";
import { sanityFetch } from "../../sanity/lib/client";
import { PortableComponent } from "../common/PortableComponent";
import { getMetadata } from "../common/Title";
const title = 'Kadra'
export const metadata = getMetadata(title)

type Page = {
    body?: TypedObject | TypedObject[]
}


export default async function Kadra() {
    const pages: Page[] = await sanityFetch({
        query: `*[_type == "page" && title == "Kadra"] {
        body,
      }`,
        tags: ["page"],
    });

    return <main>
        <h2>{title}</h2>
        {
            pages?.[0] && pages[0].body && <PortableComponent
                value={pages[0].body}
            />
        }
    </main>
}