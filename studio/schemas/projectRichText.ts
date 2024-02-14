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
						{title: 'H2', value: 'h2'},
						{title: 'Normal', value: 'normal'},
					],
					lists: [],
				},
			]
		},
	]
}