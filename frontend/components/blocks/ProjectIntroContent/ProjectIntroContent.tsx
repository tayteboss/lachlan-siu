import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';

const ProjectIntroContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: ${pxToRem(14)};
`;

const Title = styled.h2`
	font-size: ${pxToRem(18)};
	line-height: ${pxToRem(14)};
	font-family: var(--font-regular);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(15)};
		line-height: ${pxToRem(19)};
	}
`;

const CarouselIndicator = styled.h4`
	font-size: ${pxToRem(18)};
	line-height: ${pxToRem(14)};
	font-family: var(--font-regular);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(15)};
		line-height: ${pxToRem(19)};
	}
`;

type Props = {
	title?: ProjectType['title'];
	activeSlideIndex: number;
	carouselLength: number;
};

const ProjectIntroContent = (props: Props) => {
	const { title, activeSlideIndex, carouselLength } = props;

	return (
		<ProjectIntroContentWrapper>
			{title && <Title>{title}</Title>}
			<CarouselIndicator>
				{activeSlideIndex + 1}/{carouselLength}
			</CarouselIndicator>
		</ProjectIntroContentWrapper>
	);
};

export default ProjectIntroContent;
