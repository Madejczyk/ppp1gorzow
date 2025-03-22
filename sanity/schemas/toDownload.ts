import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'toDownload',
  title: 'Do pobrania',
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