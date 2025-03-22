import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'offer',
  title: 'Oferta',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Tytuł',
        type: 'string',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
    defineField({
      name: 'kolejnosc',
      title: 'Kolejność',
      type: 'number',
    }),
  ],
})