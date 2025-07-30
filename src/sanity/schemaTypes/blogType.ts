import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'string',
      title: 'Href',
    }),
    defineField({
      name: 'date',
      type: 'string',
      title: 'Date',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'metaWork',
      type: 'string',
      title: 'Meta Work',
    }),
    defineField({
      name: 'desc',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Heading 1',
    }),
    defineField({
      name: 'desc1',
      type: 'text',
      title: 'Description 1',
    }),
    defineField({
      name: 'image1',
      type: 'image',
      title: 'Image 1',
      options: { hotspot: true },
    }),
    defineField({
      name: 'optionheader',
      type: 'string',
      title: 'Option Header',
    }),
    defineField({
      name: 'optiondesc',
      type: 'array',
      title: 'Option Description',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'heading2',
      type: 'string',
      title: 'Heading 2',
    }),
    defineField({
      name: 'desc2',
      type: 'text',
      title: 'Description 2',
    }),
    defineField({
      name: 'heading3',
      type: 'string',
      title: 'Heading 3',
    }),
    defineField({
      name: 'desc3',
      type: 'text',
      title: 'Description 3',
    }),
    defineField({
      name: 'image2',
      type: 'image',
      title: 'Image 2',
      options: { hotspot: true },
    }),
  ],
})
