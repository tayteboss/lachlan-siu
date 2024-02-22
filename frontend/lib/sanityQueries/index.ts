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
		pageBuilder[]{
			...,
			"image": image.asset->url,
			"leftImage": leftImage.asset->url,
			"leftVideo": leftVideo.asset->playbackId,
			"rightImage": rightImage.asset->url,
			"rightVideo": rightVideo.asset->playbackId,
			"video": video.asset->playbackId,
		},
	}
`;

