import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'page',
    title: 'Strona',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Tytuł',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Zawartość strony',
            type: 'blockContent',
        }),
    ],
})
