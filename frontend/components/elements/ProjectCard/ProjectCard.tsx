import styled from 'styled-components';
import ProjectIntroContent from '../../blocks/ProjectIntroContent';
import pxToRem from '../../../utils/pxToRem';
import { ProjectType } from '../../../shared/types/types';
import ProjectCarousel from '../../blocks/ProjectCarousel';
import { useState } from 'react';

const ProjectCardWrapper = styled.div`
	margin-bottom: ${pxToRem(80)};
`;

const Inner = styled.div`
	padding: 0 ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(16)};
	}
`;

const ProjectCard = (props: ProjectType) => {
	const { title, thumbnailImage, thumbnailVideo, carousel, index } = props;

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const [carouselLength, setCarouselLength] = useState(1);

	return (
		<ProjectCardWrapper id={`project-${index}`}>
			<Inner className="project-inner">
				<ProjectCarousel
					thumbnailImage={thumbnailImage}
					thumbnailVideo={thumbnailVideo}
					carousel={carousel}
					setActiveSlideIndex={setActiveSlideIndex}
					setCarouselLength={setCarouselLength}
				/>
				<ProjectIntroContent
					title={title}
					activeSlideIndex={activeSlideIndex}
					carouselLength={carouselLength}
				/>
			</Inner>
		</ProjectCardWrapper>
	);
};

export default ProjectCard;
