export default {
	title: "Site Settings",
	name: "siteSettings",
	type: "document",
	fields: [
		{
			title: 'Title',
			name: 'referenceTitle',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Site Settings'
		},
		{
			title: "Email",
			name: "email",
			type: "email"
		},
		{
			title: "Instagram URL",
			name: "instagramUrl",
			type: "url"
		},
		{
			title: "LinkedIn URL",
			name: "linkedInUrl",
			type: "url"
		},
		{
			title: "Acknowledgement Of Country",
			name: "acknowledgementOfCountry",
			type: "string"
		}
	]
}