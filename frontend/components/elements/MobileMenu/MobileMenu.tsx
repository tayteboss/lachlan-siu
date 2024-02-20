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
	background: #f2f2f2;
	/* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1); */
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
