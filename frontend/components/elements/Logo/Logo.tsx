import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const LogoWrapper = styled.div`
	flex: 1;
	text-align: center;

	transition: all 500ms var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: left;

		&.type-h3 {
			font-size: ${pxToRem(25)};
		}
	}
`;

const Logo = () => {
	return <LogoWrapper className="type-h3">Lachlan Siu</LogoWrapper>;
};

export default Logo;
