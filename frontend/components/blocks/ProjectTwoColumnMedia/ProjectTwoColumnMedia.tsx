import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	leftImage: string;
	rightImage: string;
	leftVideo: string;
	rightVideo: string;
};

const ProjectTwoColumnMediaWrapper = styled.div`
	padding: ${pxToRem(8)} 0;
`;

const LHS = styled.div`
	grid-column: 1 / 7;
	padding-top: 100%;
	position: relative;
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(16)};
	}
`;

const RHS = styled.div`
	grid-column: 7 / -1;
	padding-top: 100%;
	position: relative;
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Inner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #f3f3f3;

	mux-player,
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const ProjectTwoColumnMedia = (props: Props) => {
	const { leftImage, rightImage, leftVideo, rightVideo } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<ProjectTwoColumnMediaWrapper
			ref={ref}
			className={`view-element-scale-up ${
				inView ? 'view-element-scale-up--in-view' : ''
			}`}
		>
			<LayoutGrid>
				<LHS>
					<Inner>
						{leftImage && (
							<Image
								src={leftImage}
								fill
								style={{ objectFit: 'cover' }}
								alt="Project image"
							/>
						)}
						{leftVideo && (
							<MuxPlayer
								streamType="on-demand"
								playbackId={leftVideo}
								autoPlay="muted"
								loop={true}
								thumbnailTime={1}
								preload="auto"
								muted
								playsInline={true}
							/>
						)}
					</Inner>
				</LHS>
				<RHS>
					<Inner>
						{rightImage && (
							<Image
								src={rightImage}
								fill
								style={{ objectFit: 'cover' }}
								alt="Project image"
							/>
						)}
						{rightVideo && (
							<MuxPlayer
								streamType="on-demand"
								playbackId={rightVideo}
								autoPlay="muted"
								loop={true}
								thumbnailTime={1}
								preload="auto"
								muted
								playsInline={true}
							/>
						)}
					</Inner>
				</RHS>
			</LayoutGrid>
		</ProjectTwoColumnMediaWrapper>
	);
};

export default ProjectTwoColumnMedia;
