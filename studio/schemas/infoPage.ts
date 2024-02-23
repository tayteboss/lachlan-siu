export default {
	title: "Info Page",
	name: "infoPage",
	type: "document",
	fields: [
		{
			title: 'Title',
			name: 'referenceTitle',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Info Page'
		},
		{
			title: "Past List",
			name: "pastList",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							title: "Title",
							name: "title",
							type: "string"
						},
						{
							title: "Url",
							name: "url",
							type: "url"
						}
					]
				}
			]
		},
		{
			title: "Client List",
			name: "clientList",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							title: "Title",
							name: "title",
							type: "string"
						},
						{
							title: "Url",
							name: "url",
							type: "url"
						}
					]
				}
			]
		},
	]
}