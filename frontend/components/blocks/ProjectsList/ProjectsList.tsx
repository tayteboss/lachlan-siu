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
	z-index: 3;
	background: var(--colour-white);
	padding-top: calc(var(--header-h));
`;

const ProjectsList = (props: Props) => {
	const { data, activeProject, setActiveProject } = props;

	return (
		<ProjectsListWrapper>
			{data.map((project, i) => (
				<ProjectCard
					title={project?.title}
					carousel={project?.carousel}
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
