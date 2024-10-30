import {sanityFetch} from '../../sanity/lib/client'
import type { Image, TypedObject } from "sanity";
import { PortableComponent } from "../common/PortableComponent";
import { getMetadata } from "../common/Title";
import { urlForImage } from '@/sanity/lib/image';

type Post = {
  _id: string
  title?: string
  mainImage?: Image,
  body?: TypedObject | TypedObject[]
  _updatedAt: number
}

const title = 'Aktualności'
export const metadata = getMetadata(title)

export default async function Aktualnosci() {
    const posts: Post[] = await sanityFetch({
        query: `*[_type == "post"] {
        title,
        body,
        mainImage,
        _updatedAt,
        _id,
      } | order(_updatedAt desc)`,
        tags: ["post"],
    });

    return <main>
        <h2>{title}</h2>
        <ul>
            {posts.map((post) => {
                const date = new Date(post?._updatedAt);
                console.log('t')
                return <li key={post._id}>
                    <h3>{post?.title}</h3>
                    <i>{date.toLocaleString('pl-PL')}</i>
                    {
                        post.body && <PortableComponent
                            value={post.body}
                        />
                    }
                    {
                        // eslint-disable-next-line @next/next/no-img-element
                        post.mainImage && <img
                        src={urlForImage(post.mainImage)}
                        // @ts-ignore
                        alt={post.mainImage.alt}
                        style={{
                            maxWidth: '90%'
                        }}
                        />
                    }
                    <hr/>
                </li>
            })}
        </ul>
    </main>
}