import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import ProjectCard from '../../elements/ProjectCard';

type Props = {
	data: ProjectType[];
	activeProject: boolean | number;
	setActiveProject: (value: boolean | number) => void;
};

const ProjectsListWrapper = styled.section`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
`;

const ProjectsList = (props: Props) => {
	const { data, activeProject, setActiveProject } = props;

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
					activeProject={activeProject}
					setActiveProject={setActiveProject}
					index={i}
					key={i}
				/>
			))}
		</ProjectsListWrapper>
	);
};

export default ProjectsList;
