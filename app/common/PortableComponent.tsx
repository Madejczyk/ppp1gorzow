import { PortableText, PortableTextComponents, type PortableTextTypeComponentProps } from "@portabletext/react"
import urlBuilder from "@sanity/image-url"
import { type TypedObject } from "sanity"
import {getImageDimensions} from '@sanity/asset-utils'
import Image from "next/image";

const ImageComponent = ({value, isInline}: PortableTextTypeComponentProps<any>) => {
    const {width, height} = getImageDimensions(value)
    return (
        <Image
            src={urlBuilder()
                .image(value)
                .width(isInline ? 100 : 800)
                .fit('max')
                .auto('format')
                .url()}
            alt={value.alt || ' '}
            width={width}
            height={height}
            loading="lazy"
            style={{
                // Display alongside text if image appears inside a block text span
                display: isInline ? 'inline-block' : 'block',

                // Avoid jumping around with aspect-ratio CSS property
                aspectRatio: width / height,
            }}
        />
    )
}

const components: PortableTextComponents = {
    types: {
        image: ImageComponent,
    },
}

type PortableComponentProps = {
    value: TypedObject | TypedObject[]
}

export const PortableComponent = ({value}: PortableComponentProps) => {
    return <PortableText
        value={value}
        components={components}
    />
}