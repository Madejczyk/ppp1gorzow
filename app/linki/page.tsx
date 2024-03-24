import { TypedObject } from "sanity";
import { sanityFetch } from "../../../sanity/lib/client";
import { Header } from "../common/Header";
import { PortableComponent } from "../common/PortableComponent";

type Page = {
    body?: TypedObject | TypedObject[]
}

export default async function Linki() {
    const pages: Page[] = await sanityFetch({
        query: `*[_type == "page" && title == "Linki"] {
        body,
      }`,
        tags: ["page"],
    });

    return <main>
        <Header />
        <h2>{"Linki"}</h2>
        {
            pages?.[0] && pages[0].body && <PortableComponent
                value={pages[0].body}
            />
        }
    </main>
}