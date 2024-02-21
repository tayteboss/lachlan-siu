import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import ProjectIntroContent from '../../blocks/ProjectIntroContent';
import ProjectThumbnail from '../../blocks/ProjectThumbnail';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import { ProjectType } from '../../../shared/types/types';
import { useEffect, useState } from 'react';
import PageBuilder from '../../blocks/PageBuilder';

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
		thumbnailVideo,
		activeProject,
		setActiveProject,
		index
	} = props;

	const [pageBuilderIsActive, setPageBuilderIsActive] = useState(
		activeProject === index
	);

	useEffect(() => {
		if (pageBuilderIsActive) {
			setActiveProject(index);
		} else {
			setActiveProject(false);
		}
	}, [pageBuilderIsActive]);

	useEffect(() => {
		if (activeProject === index) {
			setPageBuilderIsActive(true);
		} else {
			setPageBuilderIsActive(false);
		}
	}, [activeProject, index]);

	return (
		<ProjectCardWrapper id={`project-${index}`}>
			<LayoutWrapper>
				<Inner
					onClick={() => {
						if (!showContent) return;
						setPageBuilderIsActive(!pageBuilderIsActive);
					}}
				>
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
				<PageBuilder
					isActive={pageBuilderIsActive}
					data={pageBuilder}
					index={index}
				/>
			</LayoutWrapper>
		</ProjectCardWrapper>
	);
};

export default ProjectCard;
