import { defineType, defineField } from "sanity"

export default defineType({
    name: 'workandexperience',
    title: 'Work and Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'work',
            title: 'Work and Experience',
            type: 'string',
        }),
        defineField({
            name: 'hospital',
            title: 'Hospital',
            type: 'text',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
    ],
})
