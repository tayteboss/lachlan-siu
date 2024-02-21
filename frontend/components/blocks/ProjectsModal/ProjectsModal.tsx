import styled from 'styled-components';
import { ProjectType } from '../../../shared/types/types';
import { AnimatePresence, delay, motion } from 'framer-motion';
import ProjectModalCard from '../../elements/ProjectModalCard';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';

type Props = {
	isActive: boolean;
	data: ProjectType[];
	setActiveProject: (value: boolean | number) => void;
	setProjectsModalIsActive: (value: boolean) => void;
};

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
	z-index: 90;
	pointer-events: all;
	overflow: auto;
`;

const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(24)};
	padding-top: calc(var(--header-h) + 60px);
	min-width: ${pxToRem(224)};
	width: 20%;
	padding-bottom: ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: ${pxToRem(32)};
	}
`;

const ProjectsModal = (props: Props) => {
	const { isActive, data, setActiveProject, setProjectsModalIsActive } =
		props;

	const hasData = data.length > 0;

	return (
		<AnimatePresence>
			{isActive && (
				<ProjectsModalWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					data-lenis-prevent
				>
					<LayoutWrapper>
						<Inner>
							{hasData &&
								data.map((item, i) => (
									<ProjectModalCard
										thumbnailImage={item?.thumbnailImage}
										thumbnailVideo={item?.thumbnailVideo}
										title={item?.title}
										key={i}
										index={i}
										setActiveProject={setActiveProject}
										setProjectsModalIsActive={
											setProjectsModalIsActive
										}
									/>
								))}
						</Inner>
					</LayoutWrapper>
				</ProjectsModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default ProjectsModal;
