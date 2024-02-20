import styled from 'styled-components';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	thumbnailImage: string;
	thumbnailVideo: string;
};

const ProjectThumbnailWrapper = styled.div`
	grid-column: 6 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		order: 1;
		margin-bottom: ${pxToRem(28)};
	}
`;

const Inner = styled.div`
	padding-top: 100%;
	position: relative;

	mux-player,
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const MediaWrapper = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
`;

const ProjectThumbnail = (props: Props) => {
	const { thumbnailImage, thumbnailVideo } = props;

	return (
		<ProjectThumbnailWrapper>
			<Inner>
				{thumbnailVideo && (
					<MediaWrapper>
						<MuxPlayer
							streamType="on-demand"
							playbackId={thumbnailVideo}
							autoPlay="muted"
							loop={true}
							thumbnailTime={1}
							preload="auto"
							muted
							playsInline={true}
						/>
					</MediaWrapper>
				)}
				{thumbnailImage && (
					<MediaWrapper>
						<Image
							src={thumbnailImage}
							fill
							style={{ objectFit: 'cover' }}
							alt="Project thumbnail"
						/>
					</MediaWrapper>
				)}
			</Inner>
		</ProjectThumbnailWrapper>
	);
};

export default ProjectThumbnail;
