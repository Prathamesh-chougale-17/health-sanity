import { defineType, defineField } from "sanity"

export default defineType({
    name: 'workandexperience',
    title: 'Work and Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'hospital',
            title: 'Hospital',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
        }),
    ],
})
