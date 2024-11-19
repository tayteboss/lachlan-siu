import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import { AnimatePresence, delay, motion } from 'framer-motion';
import ProjectModalCard from '../../elements/ProjectModalCard';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import Link from 'next/link';

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			staggerChildren: 0.05,
			staggerDirection: -1
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			staggerChildren: 0.05,
			delayChildren: 0.3
		}
	}
};

const ProjectsModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 90;
	pointer-events: all;
	overflow: auto;
	padding-top: calc(var(--header-h) + 60px);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const ProjectsListInner = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(24)};
	min-width: ${pxToRem(224)};
	width: 20vw;
	padding-bottom: ${pxToRem(120)};
	grid-column: 1 / 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: ${pxToRem(32)};
		grid-column: 1 / -1;
	}
`;

const ProjectsCtaWrapper = styled(motion.div)`
	position: fixed;
	bottom: ${pxToRem(16)};
	right: ${pxToRem(24)};
	width: ${pxToRem(348)};
	z-index: 95;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		position: relative;
	}
`;

const ProjectsCtaTitle = styled.p`
	margin-bottom: ${pxToRem(40)};
	color: var(--colour-black);
	max-width: ${pxToRem(530)};
`;

const ProjectsCtaLink = styled.p`
	a {
		transition: all var(--transition-speed-default) var(--transition-ease);

		&:hover {
			opacity: 0.5;
		}
	}
`;

type Props = {
	isActive: boolean;
	data: ProjectType[];
	activeProject: boolean | number;
	scrollToProject: number;
	projectsModalCTA: string;
	email: string;
	setScrollToProject: (value: number) => void;
	setActiveProject: (value: boolean | number) => void;
	setProjectsModalIsActive: (value: boolean) => void;
};

const ProjectsModal = (props: Props) => {
	const {
		isActive,
		data,
		activeProject,
		scrollToProject,
		projectsModalCTA,
		email,
		setScrollToProject,
		setActiveProject,
		setProjectsModalIsActive
	} = props;

	const hasData = data.length > 0;

	return (
		<AnimatePresence>
			{isActive && (
				<>
					<ProjectsModalWrapper
						variants={wrapperVariants}
						initial="hidden"
						animate="visible"
						exit="hidden"
						key={1}
						data-lenis-prevent
					>
						<LayoutWrapper>
							<LayoutGrid>
								<ProjectsListInner>
									{hasData &&
										data.map((item, i) => (
											<ProjectModalCard
												thumbnailImage={
													item?.thumbnailImage
												}
												thumbnailVideo={
													item?.thumbnailVideo
												}
												title={item?.title}
												key={i}
												index={i}
												activeProject={activeProject}
												scrollToProject={
													scrollToProject
												}
												setScrollToProject={
													setScrollToProject
												}
												setActiveProject={
													setActiveProject
												}
												setProjectsModalIsActive={
													setProjectsModalIsActive
												}
											/>
										))}
								</ProjectsListInner>
							</LayoutGrid>
						</LayoutWrapper>
					</ProjectsModalWrapper>
					{projectsModalCTA && (
						<ProjectsCtaWrapper
							variants={wrapperVariants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							key={1}
						>
							<ProjectsCtaTitle>
								{projectsModalCTA}
							</ProjectsCtaTitle>
							<ProjectsCtaLink>
								Email:{' '}
								<Link href={`mailto:${email}`}>{email}</Link>
							</ProjectsCtaLink>
						</ProjectsCtaWrapper>
					)}
				</>
			)}
		</AnimatePresence>
	);
};

export default ProjectsModal;
