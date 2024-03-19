import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'doctoraccess',
    title: 'Doctor Access',
    type: 'document',
    fields: [
        defineField({
            name: 'doctor',
            title: 'Doctor',
            type: 'reference',
            to: { type: 'doctor' },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'accessid',
            title: 'Access ID',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
    ],
})
