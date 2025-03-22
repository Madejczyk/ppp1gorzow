import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
// import category from './schemas/category'
import post from './schemas/post'
// import author from './schemas/author'
import page from './schemas/page'
import offer from './schemas/offer'
import organization from './schemas/organization'
import toDownload from './schemas/toDownload'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, page, blockContent, organization, offer, toDownload],
}
