import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import HeaderTrigger from '../../elements/HeaderTrigger';
import Logo from '../../elements/Logo';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';

type StyledProps = {
	isActive?: boolean;
};

type Props = {
	projectsModalIsActive: boolean;
	infoModalIsActive: boolean;
	isActive: boolean;
	setProjectsModalIsActive: (isActive: boolean) => void;
	setInfoModalIsActive: (isActive: boolean) => void;
};

const HeaderWrapper = styled.header<StyledProps>`
	padding: ${pxToRem(15)} 0;
	background: var(--colour-white);
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	transform: translateY(${(props) => (props.$isActive ? '0' : '-100%')});
	z-index: 100;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled(motion.div)<StyledProps>`
	text-decoration: ${(props) => props.isActive && 'underline'};

	&.type-h3 {
		font-size: ${pxToRem(25)};
	}
`;

const DesktopLogo = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: 'easeInOut'
		}
	}
};

const Header = (props: Props) => {
	const {
		projectsModalIsActive,
		infoModalIsActive,
		isActive,
		setProjectsModalIsActive,
		setInfoModalIsActive
	} = props;

	return (
		<HeaderWrapper className="header" $isActive={isActive}>
			<LayoutWrapper>
				<Inner>
					<HeaderTrigger
						align="left"
						handleClick={() => {
							setProjectsModalIsActive(!projectsModalIsActive);
							setInfoModalIsActive(false);
						}}
					>
						<AnimatePresence mode="wait">
							{projectsModalIsActive ? (
								<Title
									variants={wrapperVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
									key={1}
									isActive
									className="type-h3"
								>
									Close
								</Title>
							) : (
								<Title
									variants={wrapperVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
									key={2}
									className="type-h3"
								>
									Projects
								</Title>
							)}
						</AnimatePresence>
					</HeaderTrigger>
					<DesktopLogo>
						<Logo />
					</DesktopLogo>
					<HeaderTrigger
						align="right"
						handleClick={() => {
							setInfoModalIsActive(!infoModalIsActive);
							setProjectsModalIsActive(false);
						}}
					>
						<AnimatePresence mode="wait">
							{infoModalIsActive ? (
								<Title
									variants={wrapperVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
									isActive
									key={3}
									className="type-h3"
								>
									Close
								</Title>
							) : (
								<Title
									variants={wrapperVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
									key={4}
									className="type-h3"
								>
									Info
								</Title>
							)}
						</AnimatePresence>
					</HeaderTrigger>
				</Inner>
			</LayoutWrapper>
		</HeaderWrapper>
	);
};

export default Header;
