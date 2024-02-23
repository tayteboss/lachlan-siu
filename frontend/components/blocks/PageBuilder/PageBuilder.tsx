import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectFullScreenMedia from '../ProjectFullScreenMedia';
import ProjectRichText from '../ProjectRichText';
import ProjectTwoColumnMedia from '../ProjectTwoColumnMedia';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	isActive: boolean;
	data: [] | undefined;
	index: number;
};

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'afterChildren'
		}
	}
};

const childVariants = {
	hidden: {
		height: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		height: 'auto',
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

const PageBuilderWrapper = styled(motion.div)``;

const Outer = styled(motion.div)``;

const Inner = styled.div`
	padding-bottom: ${pxToRem(62)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-top: ${pxToRem(24)};
	}
`;

const PageBuilder = (props: Props) => {
	const { isActive, data, index } = props;

	const hasData = data && data.length > 0;

	return (
		<AnimatePresence>
			{isActive && (
				<PageBuilderWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					id={`project-${index}-content`}
				>
					<Outer variants={childVariants}>
						<Inner>
							{hasData &&
								data.map((item, i) => {
									if (
										item._type === 'projectFullScreenMedia'
									) {
										return (
											<ProjectFullScreenMedia
												key={i}
												image={item?.image}
												video={item?.video}
											/>
										);
									}

									if (item._type === 'projectRichText') {
										return (
											<ProjectRichText
												key={i}
												content={item?.content}
											/>
										);
									}

									if (
										item._type === 'projectTwoColumnMedia'
									) {
										return (
											<ProjectTwoColumnMedia
												key={i}
												leftImage={item?.leftImage}
												rightImage={item?.rightImage}
												leftVideo={item?.leftVideo}
												rightVideo={item?.rightVideo}
											/>
										);
									}

									return <></>;
								})}
						</Inner>
					</Outer>
				</PageBuilderWrapper>
			)}
		</AnimatePresence>
	);
};

export default PageBuilder;
