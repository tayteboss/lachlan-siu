import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import Logo from '../../elements/Logo';

type Props = {
	data: any;
};

const HomeIntroWrapper = styled.section`
	position: relative;
	z-index: 2;
	background: var(--colour-white);
`;

const Inner = styled.div`
	padding: ${pxToRem(120)} 0 ${pxToRem(96)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: calc(var(--header-h) + 80px) 0 ${pxToRem(36)};
	}
`;

const Intro = styled.h1``;

const MobileLogo = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: block;
		margin-bottom: ${pxToRem(24)};
	}
`;

const HomeIntro = (props: Props) => {
	const { data } = props;

	return (
		<HomeIntroWrapper>
			<LayoutWrapper>
				<Inner>
					<MobileLogo>
						<Logo />
					</MobileLogo>
					<Intro>{data || ''}</Intro>
				</Inner>
			</LayoutWrapper>
		</HomeIntroWrapper>
	);
};

export default HomeIntro;
