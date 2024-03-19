import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'education',
    title: 'Education',
    type: 'document',
    fields: [
        defineField({
            name: 'college',
            title: 'College',
            type: 'string',
        }),
        defineField({
            name: 'degree',
            title: 'Degree',
            type: 'text',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
    ],
})
