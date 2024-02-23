import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import ScopeIntroContent from './ScopeIntroContent';
import StudioIntroContent from './StudioIntroContent';
import PageBuilderTrigger from '../../elements/PageBuilderTrigger';
import pxToRem from '../../../utils/pxToRem';

const ProjectIntroContentWrapper = styled.div`
	grid-column: 1 / 7;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	margin-bottom: ${pxToRem(32)};
	padding-left: ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(16)};
		grid-column: 1 / -1;
		order: 2;
	}
`;

const ContentWrapper = styled.div``;

const Title = styled.h2`
	margin-bottom: ${pxToRem(28)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(17)};
		line-height: ${pxToRem(23)};
		margin-bottom: ${pxToRem(16)};
		font-family: var(--font-medium);
	}
`;

const Excerpt = styled.h3`
	margin-bottom: ${pxToRem(22)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(16)};
	}
`;

const TriggerWrapper = styled.div``;

const ProjectIntroContent = (props: ProjectType) => {
	const {
		title,
		scope,
		studio,
		excerpt,
		showContent,
		studioLink,
		pageBuilderIsActive,
		setPageBuilderIsActive
	} = props;

	return (
		<ProjectIntroContentWrapper>
			<ContentWrapper>
				{title && <Title>{title}</Title>}
				{excerpt && <Excerpt>{excerpt}</Excerpt>}
				<StudioIntroContent studio={studio} link={studioLink} />
				<ScopeIntroContent scope={scope} />
			</ContentWrapper>
			{showContent && (
				<TriggerWrapper>
					<PageBuilderTrigger
						isActive={pageBuilderIsActive}
						setPageBuilderIsActive={setPageBuilderIsActive}
					/>
				</TriggerWrapper>
			)}
		</ProjectIntroContentWrapper>
	);
};

export default ProjectIntroContent;
