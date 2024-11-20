import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const LogoWrapper = styled.div`
	flex: 1;
	text-align: center;

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

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-align: left;
	}
`;

const Logo = () => {
	return <LogoWrapper className="type-h3">Lachlan Siu</LogoWrapper>;
};

export default Logo;
