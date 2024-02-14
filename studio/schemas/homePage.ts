import { HomeIcon } from '@sanity/icons';

export default {
	title: "Home Page",
	name: "homePage",
	type: "document",
	icon: HomeIcon,
	fields: [
		{
			title: 'Title',
			name: 'referenceTitle',
			type: 'string',
			description: 'This is an internal reference title.',
			initialValue: 'Home Page'
		},
		{
			title: "Intro Content",
			name: "introContent",
			type: "string"
		},
	]
}