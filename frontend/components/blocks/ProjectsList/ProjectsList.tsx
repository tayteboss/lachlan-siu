import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';

type Props = {
	data: ProjectType[];
};

const ProjectsListWrapper = styled.section`
	position: relative;
	z-index: 2;
	background: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(2px);
`;

const ProjectsList = (props: Props) => {
	const { data } = props;

	return (
		<ProjectsListWrapper>
			{data.map((project, i) => (
				<ProjectCard
					title={project?.title}
					pageBuilder={project?.pageBuilder}
					scope={project?.scope}
					studio={project?.studio}
					excerpt={project?.excerpt}
					showContent={project?.showContent}
					studioLink={project?.studioLink}
					thumbnailImage={project?.thumbnailImage}
					thumbnailVideo={project?.thumbnailVideo}
					key={i}
				/>
			))}
		</ProjectsListWrapper>
	);
};

export default ProjectsList;
