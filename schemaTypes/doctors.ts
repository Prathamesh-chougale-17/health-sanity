import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'doctor',
    title: 'Doctor',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            // required: true,
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'email',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'specialty',
            title: 'Specialty',
            type: 'reference',
            to: { type: 'specialty' },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'pastExperience',
            title: 'Past Experience',
            type: 'reference',
            to: { type: 'workandexperience' },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'education',
            title: 'Education',
            type: 'reference',
            to: { type: 'education' },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'certifications',
            title: 'Certifications',
            type: 'array',
            of: [{ type: 'file' }],
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'degreeProof',
            title: 'Degree Proof',
            type: 'file',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'timing',
            title: 'Timing ',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (Rule: any) => Rule.required()
        }),
    ],
})
