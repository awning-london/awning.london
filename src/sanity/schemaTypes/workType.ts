import { defineField, defineType } from 'sanity'

export const workType = defineType({
  name: 'work',
  title: 'Work / Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      type: 'string',
      title: 'ID',
      validation: rule => rule.required(),
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
      title: 'Meta Description',
    }),
    defineField({
      name: 'overview',
      type: 'text',
      title: 'Overview',
    }),
    defineField({
      name: 'benefit',
      type: 'array',
      title: 'Key Benefits',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      type: 'array',
      title: 'Featured Story Points',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'imgurl',
      type: 'array',
      title: 'Gallery Images',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'reviewTitle',
      type: 'string',
      title: 'Review Title',
    }),
    defineField({
      name: 'reviewDesc',
      type: 'text',
      title: 'Review Description',
    }),
    defineField({
      name: 'from',
      type: 'string',
      title: 'Reviewer Name',
    }),
    defineField({
      name: 'score',
      type: 'string',
      title: 'Rating',
    }),
    defineField({
      name: 'reviewImg',
      type: 'image',
      title: 'Reviewer Image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Reviewer Email',
    }),
  ],
})
