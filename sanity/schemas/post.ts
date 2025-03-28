import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
            type: 'string',
        }),
        // defineField({
        //     name: 'slug',
        //     title: 'Slug',
        //     type: 'slug',
        //     options: {
        //         source: 'title',
        //         maxLength: 96,
        //     },
        // }),
        // defineField({
        //     name: 'author',
        //     title: 'Author',
        //     type: 'reference',
        //     to: {type: 'author'},
        // }),
        // defineField({
        //     name: 'mainImage',
        //     title: 'Main image',
        //     type: 'image',
        //     options: {
        //         hotspot: true,
        //     },
        //     fields: [
        //         {
        //             name: 'alt',
        //             type: 'string',
        //             title: 'Alternative Text',
        //         }
        //     ]
        // }),
        // defineField({
        //     name: 'categories',
        //     title: 'Categories',
        //     type: 'array',
        //     of: [{type: 'reference', to: {type: 'category'}}],
        // }),
        // defineField({
        //     name: 'body',
        //     title: 'Body',
        //     type: 'blockContent',
        // }),
        defineField({
            name: 'body',
            title: 'Opis',
            type: 'blockContent',
        }),
        // defineField({
        //     title: 'Opublikowano',
        //     type: 'datetime',
        //     readOnly: true
        // }),
        defineField({
            name: 'mainImage',
            title: 'Zdjęcie',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternatywny tekst',
                }
            ]
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection
            return {...selection, subtitle: author && `by ${author}`}
        },
    },
})
