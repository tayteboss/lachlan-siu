export type TransitionsType = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		};
	};
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number;
		};
	};
};

export type HomePageType = {
	introContent: string;
};

export type ClientType = {
	title: string;
	url: string;
};

export type InfoPageType = {
	clientList: ClientType[];
	introContent: string;
	pastList: ClientType[];
};

export type SiteSettingsType = {
	acknowledgementOfCountry: string;
	email: string;
	instagramUrl: string;
	linkedInUrl: string;
	siteDescription: string;
	siteTitle: string;
};

export type ImageType = {
	asset: {
		url: string;
	};
};

export type MuxVideoType = {
	asset: {
		playbackId: string;
	};
};

export type ProjectType = {
	title?: string;
	pageBuilder?: [];
	scope?: string;
	thumbnailImage?: string;
	thumbnailVideo?: string;
	studio?: string;
	excerpt?: string;
	showContent?: boolean;
	studioLink?: string;
	pageBuilderIsActive?: boolean;
	setPageBuilderIsActive: (isActive: boolean) => void;
};
