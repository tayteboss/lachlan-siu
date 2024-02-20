import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	email: string;
	acknowledgementOfCountry: string;
};

const FooterWrapper = styled.footer`
	position: relative;
	z-index: 2;

	.layout-grid {
		align-items: end;
	}
`;

const Inner = styled.div`
	background: var(--colour-white);
	padding: ${pxToRem(240)} 0 ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(190)} 0 ${pxToRem(80)};
	}
`;

const EmailWrapper = styled.div`
	grid-column: 1 / 7;
	order: 1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		order: 2;
		grid-column: 1 / -1;
	}
`;

const Email = styled.a`
	text-decoration: none;
	color: var(--colour-black);

	&:hover {
		text-decoration: underline;
	}
`;

const AOCWrapper = styled.div`
	grid-column: 7 / -1;
	order: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		order: 1;
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(20)};
	}
`;

const AOC = styled.p``;

const Footer = (props: Props) => {
	const { email, acknowledgementOfCountry } = props;

	return (
		<FooterWrapper>
			<LayoutWrapper>
				<Inner>
					<LayoutGrid>
						<EmailWrapper>
							{email && (
								<Email
									className="type-h3"
									href={`mailto: ${email}`}
								>
									{email}
								</Email>
							)}
						</EmailWrapper>
						<AOCWrapper>
							{acknowledgementOfCountry && (
								<AOC className="type-h3">
									{acknowledgementOfCountry}
								</AOC>
							)}
						</AOCWrapper>
					</LayoutGrid>
				</Inner>
			</LayoutWrapper>
		</FooterWrapper>
	);
};

export default Footer;
