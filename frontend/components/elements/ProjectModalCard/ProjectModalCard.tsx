import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';
import { useLenis } from '@studio-freight/react-lenis';

type Props = {
	thumbnailImage?: string;
	thumbnailVideo?: string;
	title?: string;
	index: number;
	activeProject: boolean | number;
	scrollToProject: number;
	setScrollToProject: (value: number) => void;
	setActiveProject: (value: boolean | number) => void;
	setProjectsModalIsActive: (value: boolean) => void;
};

const ProjectModalCardWrapper = styled(motion.div)`
	width: 100%;
`;

const Inner = styled.div`
	padding-top: 100%;
	position: relative;
	margin-bottom: ${pxToRem(8)};

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

const Title = styled.h3`
	font-size: ${pxToRem(20)};
	line-height: ${pxToRem(26)};
`;

const ProjectModalCard = (props: Props) => {
	const {
		thumbnailVideo,
		thumbnailImage,
		title,
		index,
		activeProject,
		scrollToProject,
		setScrollToProject,
		setActiveProject,
		setProjectsModalIsActive
	} = props;

	const childVariants = {
		hidden: {
			opacity: 0,
			x: -100,
			transition: {
				duration: 0.4,
				ease: 'easeInOut'
			}
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
				ease: 'easeInOut'
			}
		}
	};

	const handleClick = () => {
		setProjectsModalIsActive(false);
		setActiveProject(index);
		setScrollToProject(scrollToProject + 1);
	};

	return (
		<ProjectModalCardWrapper
			onClick={() => handleClick()}
			variants={childVariants}
		>
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
			{title && <Title>{title}</Title>}
		</ProjectModalCardWrapper>
	);
};

export default ProjectModalCard;
