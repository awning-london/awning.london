import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blogType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType],
}
