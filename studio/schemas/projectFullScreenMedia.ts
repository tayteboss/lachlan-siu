import { ImageIcon } from '@sanity/icons';

export default {
	title: 'Full Screen Media',
	name: 'projectFullScreenMedia',
	type: 'document',
	icon: ImageIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Full Screen Media'
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Image Alt Text',
			name: 'imageAltText',
			type: 'string',
		},
	]
}