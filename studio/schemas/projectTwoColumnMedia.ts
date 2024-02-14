import { ImageIcon } from '@sanity/icons';

export default {
	title: 'Two Column Media',
	name: 'projectTwoColumnMedia',
	type: 'document',
	icon: ImageIcon,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Two Column Media'
		},
		{
			title: "Use Video on Left Block",
			name: "useVideoOnLeftBlock",
			type: "boolean",
		},
		{
			title: "Use Video on Right Block",
			name: "useVideoOnRightBlock",
			type: "boolean",
		},
		{
			title: 'Left Image',
			name: 'leftImage',
			type: 'image',
			hidden: ({document}) => document?.useVideoOnLeftBlock,
		},
		{
			title: 'Left Video',
			name: 'leftVideo',
			type: 'mux.video',
			hidden: ({document}) => !document?.useVideoOnLeftBlock,
		},
		{
			title: 'Left Image Alt Text',
			name: 'leftImageAltText',
			type: 'string',
			hidden: ({document}) => document?.useVideoOnLeftBlock,
		},
		{
			title: 'Right Image',
			name: 'rightImage',
			type: 'image',
			hidden: ({document}) => document?.useVideoOnRightBlock,
		},
		{
			title: 'Right Image Alt Text',
			name: 'rightImageAltText',
			type: 'string',
			hidden: ({document}) => document?.useVideoOnRightBlock,
		},
	]
}