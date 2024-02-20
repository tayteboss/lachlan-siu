import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	title: 'Project',
	name: 'project',
	type: 'document',
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "project" }),
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Show Content',
			name: 'showContent',
			type: 'boolean',
		},
		{
			title: 'Excerpt',
			name: 'excerpt',
			type: 'string',
		},
		{
			title: 'Studio',
			name: 'studio',
			type: 'string',
		},
		{
			title: 'Studio Link',
			name: 'studioLink',
			type: 'url',
		},
		{
			title: 'Scope',
			name: 'scope',
			type: 'string',
			description: 'e.g. Naming, Brand Direction, Art Direction'
		},
		{
			title: 'Thumbnail Image',
			name: 'thumbnailImage',
			type: 'image',
			description: 'Please only use an image or video thumbnail. Use 1:1 ratio for the best result.'
		},
		{
			title: 'Thumbnail Video',
			name: 'thumbnailVideo',
			type: 'mux.video',
			description: 'Please only use an image or video thumbnail. Use 1:1 ratio for the best result.'
		},
		{
			title: 'Page Builder',
			name: 'pageBuilder',
			type: 'array',
			of: [
				{type: 'projectFullScreenMedia'},
				{type: 'projectRichText'},
				{type: 'projectTwoColumnMedia'},
			]
		},
	]
}