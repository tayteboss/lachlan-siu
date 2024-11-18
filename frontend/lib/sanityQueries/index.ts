export const siteSettingsQueryString = `
	*[_type == 'siteSettings'][0] {
		...,
	}
`;

export const homePageQueryString = `
	*[_type == 'homePage'][0] {
		...,
	}
`;

export const infoPageQueryString = `
	*[_type == 'infoPage'][0] {
		...,
	}
`;

export const projectsQueryString = `
	*[_type == 'project'] | order(orderRank) [0...100] {
		...,
		"thumbnailVideo": thumbnailVideo.asset->playbackId,
		"thumbnailImage": thumbnailImage.asset->url,
		carousel[]{
			...,
			"image": image.asset->url,
			"video": video.asset->playbackId,
		},
	}
`;
