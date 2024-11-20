import styled from 'styled-components';
import ProjectIntroContent from '../../blocks/ProjectIntroContent';
import pxToRem from '../../../utils/pxToRem';
import { ProjectType } from '../../../shared/types/types';
import ProjectCarousel from '../../blocks/ProjectCarousel';
import { useState } from 'react';
import LayoutWrapper from '../../common/LayoutWrapper';

const ProjectCardWrapper = styled.div`
	margin-bottom: ${pxToRem(80)};
`;

const Inner = styled.div``;

const ProjectCard = (props: ProjectType) => {
	const { title, thumbnailImage, thumbnailVideo, carousel, index } = props;

	const [activeSlideIndex, setActiveSlideIndex] = useState(0);
	const [carouselLength, setCarouselLength] = useState(1);

	return (
		<ProjectCardWrapper id={`project-${index}`}>
			<LayoutWrapper>
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
			</LayoutWrapper>
		</ProjectCardWrapper>
	);
};

export default ProjectCard;
