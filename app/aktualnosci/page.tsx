import { Header } from "../common/Header";
import {sanityFetch} from '../../sanity/lib/client'
import type { TypedObject } from "sanity";
import { PortableComponent } from "../common/PortableComponent";

type Post = {
  _id: string
  title?: string
  body?: TypedObject | TypedObject[]
  _updatedAt: number
}

export default async function Aktualnosci() {
    const posts: Post[] = await sanityFetch({
        query: `*[_type == "post"] {
        title,
        body,
        _updatedAt,
        _id,
      } | order(_updatedAt desc)`,
        tags: ["post"],
    });

    return <main>
        <Header />
        <h2>{"Aktualności"}</h2>
        <ul>
            {posts.map((post) => {
                const date = new Date(post?._updatedAt);
                return <li key={post._id}>
                    <h3>{post?.title}</h3>
                    <i>{date.toLocaleString('pl-PL')}</i>
                    {
                        post.body && <PortableComponent
                            value={post.body}
                        />
                    }
                    <hr/>
                </li>
            })}
        </ul>
    </main>
}