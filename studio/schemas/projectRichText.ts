import { BlockContentIcon } from '@sanity/icons';

export default {
	title: 'Rich Text',
	name: 'projectRichText',
	type: 'document',
	icon: BlockContentIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Rich Text'
		},
		{
			title: "Rich Text Content",
			name: "content",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{title: 'Normal', value: 'normal'},
						{title: 'H1', value: 'h1'},
						{title: 'H2', value: 'h2'},
						{title: 'H3', value: 'h3'},
					],
					lists: [],
				},
			]
		},
	]
}