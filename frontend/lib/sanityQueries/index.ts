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

export const projectsQueryString = `
	*[_type == 'project'] {
		...,
		"thumbnailVideo": thumbnailVideo.asset->playbackId,
		"thumbnailImage": thumbnailImage.asset->url,
		pageBuilder[]{
			...,
			"image": image.asset->url,
			"leftImage": leftImage.asset->url,
			"leftVideo": leftVideo.asset->url,
			"rightImage": rightImage.asset->url,
			"rightVideo": rightVideo.asset->url,
			"video": video.asset->playbackId,
		},
	}
`;

