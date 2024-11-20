import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import HeaderTrigger from '../../elements/HeaderTrigger';
import Logo from '../../elements/Logo';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';

type StyledProps = {
	$isActive?: boolean;
	infoModalIsActive?: boolean;
};

type Props = {
	projectsModalIsActive: boolean;
	infoModalIsActive: boolean;
	isActive: boolean;
	setProjectsModalIsActive: (isActive: boolean) => void;
	setInfoModalIsActive: (isActive: boolean) => void;
};

const HeaderWrapper = styled.header<StyledProps>`
	padding: ${pxToRem(24)} 0;
	background: ${(props) =>
		props.infoModalIsActive
			? 'var(--colour-black)'
			: 'var(--colour-white)'};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	transform: translateY(${(props) => (props.$isActive ? '0' : '-100%')});
	z-index: 100;

	transition: all 500ms var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(16)} 0;
	}

	* {
		color: ${(props) =>
			props.infoModalIsActive
				? 'var(--colour-white)'
				: 'var(--colour-black)'};
	}
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled(motion.div)<StyledProps>`
	text-decoration: ${(props) => props.$isActive && 'underline'};

	transition: all 500ms var(--transition-ease);

	&.type-h3 {
		font-size: ${pxToRem(18)};
		line-height: ${pxToRem(14)};
		font-family: var(--font-regular);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(15)};
			line-height: ${pxToRem(19)};
		}
	}
`;

const DesktopLogo = styled.button`
	transition: all 500ms var(--transition-ease);
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<HeaderWrapper
			className="header"
			$isActive={isActive}
			infoModalIsActive={infoModalIsActive}
		>
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
									$isActive={true}
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
					<DesktopLogo
						onClick={() => {
							setProjectsModalIsActive(false);
							setInfoModalIsActive(false);
							scrollToTop();
						}}
					>
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
									$isActive={true}
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
