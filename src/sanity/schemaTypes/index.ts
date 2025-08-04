import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blogType'
import { workType } from './workType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, workType],
}
