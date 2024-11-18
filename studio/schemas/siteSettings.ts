export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'referenceTitle',
      type: 'string',
      description: 'This is an internal reference title.',
      initialValue: 'Site Settings',
    },
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
    },
    {
      title: 'Site Description',
      name: 'siteDescription',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      title: 'Instagram URL',
      name: 'instagramUrl',
      type: 'url',
    },
    {
      title: 'LinkedIn URL',
      name: 'linkedInUrl',
      type: 'url',
    },
    {
      title: 'Acknowledgement Of Country',
      name: 'acknowledgementOfCountry',
      type: 'string',
    },
    {
      title: 'Projects Modal CTA',
      name: 'projectsModalCTA',
      type: 'string',
    },
  ],
}
