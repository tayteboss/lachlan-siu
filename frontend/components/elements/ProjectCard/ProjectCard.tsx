import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import ProjectIntroContent from '../../blocks/ProjectIntroContent';
import ProjectThumbnail from '../../blocks/ProjectThumbnail';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import { ProjectType } from '../../../shared/types/types';
import { useState } from 'react';

const ProjectCardWrapper = styled.div`
	border-bottom: 1px solid var(--colour-black);
`;

const Inner = styled.div`
	padding: ${pxToRem(24)} 0;
`;

const ProjectCard = (props: ProjectType) => {
	const {
		title,
		pageBuilder,
		scope,
		studio,
		excerpt,
		showContent,
		studioLink,
		thumbnailImage,
		thumbnailVideo
	} = props;

	const [pageBuilderIsActive, setPageBuilderIsActive] = useState(false);

	return (
		<ProjectCardWrapper>
			<LayoutWrapper>
				<Inner>
					<LayoutGrid>
						<ProjectIntroContent
							title={title}
							scope={scope}
							studio={studio}
							excerpt={excerpt}
							showContent={showContent}
							studioLink={studioLink}
							pageBuilderIsActive={pageBuilderIsActive}
							setPageBuilderIsActive={setPageBuilderIsActive}
						/>
						<ProjectThumbnail
							thumbnailImage={thumbnailImage}
							thumbnailVideo={thumbnailVideo}
						/>
					</LayoutGrid>
				</Inner>
			</LayoutWrapper>
		</ProjectCardWrapper>
	);
};

export default ProjectCard;
