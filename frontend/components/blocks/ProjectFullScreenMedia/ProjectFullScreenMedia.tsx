import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	image?: string;
	video?: string;
};

const ProjectFullScreenMediaWrapper = styled.div`
	padding: ${pxToRem(8)} 0;
`;

const Outer = styled.div`
	padding-top: 56.25%;
	position: relative;
	overflow: hidden;
`;

const Inner = styled.div`
	background: #f3f3f3;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

	mux-player,
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const ProjectFullScreenMedia = (props: Props) => {
	const { image, video } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<ProjectFullScreenMediaWrapper
			ref={ref}
			className={`view-element-scale-up ${
				inView ? 'view-element-scale-up--in-view' : ''
			}`}
		>
			<Outer>
				<Inner>
					{image && (
						<Image
							src={image}
							fill
							style={{ objectFit: 'cover' }}
							alt="Project image"
						/>
					)}
					{video && (
						<MuxPlayer
							streamType="on-demand"
							playbackId={video}
							autoPlay="muted"
							loop={true}
							thumbnailTime={1}
							preload="auto"
							muted
							playsInline={true}
						/>
					)}
				</Inner>
			</Outer>
		</ProjectFullScreenMediaWrapper>
	);
};

export default ProjectFullScreenMedia;
