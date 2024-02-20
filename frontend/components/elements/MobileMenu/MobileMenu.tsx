import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	projectsModalIsActive: boolean;
	infoModalIsActive: boolean;
	setProjectsModalIsActive: (isActive: boolean) => void;
	setInfoModalIsActive: (isActive: boolean) => void;
};

const MobileMenuWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		position: fixed;
		width: 100%;
		z-index: 100;
		pointer-events: none;
	}
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	height: calc(100svh - var(--header-h));
	padding-bottom: ${pxToRem(24)};
`;

const MobileMenuTrigger = styled.button`
	background: rgba(255, 255, 255, 0.75);
	backdrop-filter: blur(5px);
	border-radius: 100px;
	padding: ${pxToRem(10)};
	font-size: ${pxToRem(17)};
	pointer-events: all;
`;

const MobileMenu = (props: Props) => {
	const {
		projectsModalIsActive,
		infoModalIsActive,
		setProjectsModalIsActive,
		setInfoModalIsActive
	} = props;

	return (
		<MobileMenuWrapper>
			<LayoutWrapper>
				<Inner>
					<div>
						{!infoModalIsActive && (
							<MobileMenuTrigger
								onClick={() =>
									setProjectsModalIsActive(
										!projectsModalIsActive
									)
								}
							>
								{projectsModalIsActive ? 'Close' : 'Projects'}
							</MobileMenuTrigger>
						)}
					</div>
					<div>
						{!projectsModalIsActive && (
							<MobileMenuTrigger
								onClick={() =>
									setInfoModalIsActive(!infoModalIsActive)
								}
							>
								{infoModalIsActive ? 'Close' : 'Info'}
							</MobileMenuTrigger>
						)}
					</div>
				</Inner>
			</LayoutWrapper>
		</MobileMenuWrapper>
	);
};

export default MobileMenu;
