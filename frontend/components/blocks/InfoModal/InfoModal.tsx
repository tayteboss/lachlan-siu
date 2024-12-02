import styled from 'styled-components';
import { AnimatePresence, delay, motion } from 'framer-motion';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import ClientList from '../ClientList';
import pxToRem from '../../../utils/pxToRem';
import { ClientType, SiteSettingsType } from '../../../shared/types/types';

const InfoModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--colour-black);
	z-index: 90;
	pointer-events: all;
	overflow: auto;

	&::-webkit-scrollbar {
		width: 0;
	}
	-ms-overflow-style: none;
	scrollbar-width: 0;

	* {
		color: var(--colour-white);
	}
`;

const Inner = styled.div`
	padding-bottom: ${pxToRem(24)};
`;

const IntroWrapper = styled.div`
	padding: ${pxToRem(120)} 0 ${pxToRem(64)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: calc(var(--header-h) + 80px) 0 ${pxToRem(36)};
	}
`;

const Intro = styled.h1`
	color: var(--colour-white);
	font-family: var(--font-medium) !important;
	letter-spacing: 0.02em;
`;

const SocialWrapper = styled.div`
	margin-bottom: ${pxToRem(72)};
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(32)};
	}
`;

const SocialLink = styled.a`
	font-size: ${pxToRem(28)};
	line-height: ${pxToRem(35)};
	text-decoration: none;
	font-family: var(--font-regular);
	color: var(--colour-white);

	&:hover {
		text-decoration: underline;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-family: var(--font-medium);
		font-size: ${pxToRem(25)};
		line-height: ${pxToRem(32)};
	}
`;

const EmailWrapper = styled.div`
	grid-column: 1 / 7;
	order: 1;
	color: var(--colour-white);
	align-self: end;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		order: 2;
		grid-column: 1 / -1;
	}
`;

const Email = styled.a`
	text-decoration: none;
	color: var(--colour-white);

	&:hover {
		text-decoration: underline;
	}
`;

const AOCWrapper = styled.div`
	grid-column: 7 / -1;
	order: 2;
	padding-top: ${pxToRem(240)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		order: 1;
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(20)};
		padding-top: ${pxToRem(80)};
	}
`;

const AOC = styled.p``;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut'
		}
	}
};

type Props = {
	isActive: boolean;
	instagramUrl: string;
	linkedInUrl: string;
	clientList: ClientType[];
	pastList: ClientType[];
	introContent: string;
	email: string;
	acknowledgementOfCountry: SiteSettingsType['acknowledgementOfCountry'];
};

const InfoModal = (props: Props) => {
	const {
		isActive,
		instagramUrl,
		linkedInUrl,
		clientList,
		pastList,
		introContent,
		email,
		acknowledgementOfCountry
	} = props;

	return (
		<AnimatePresence>
			{isActive && (
				<InfoModalWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
					data-lenis-prevent
				>
					<LayoutWrapper>
						<Inner>
							{introContent && (
								<IntroWrapper>
									<Intro>{introContent}</Intro>
								</IntroWrapper>
							)}
							<SocialWrapper>
								{instagramUrl && (
									<SocialLink
										href={instagramUrl}
										target="_blank"
									>
										Instagram
									</SocialLink>
								)}
								{linkedInUrl && (
									<SocialLink
										href={linkedInUrl}
										target="_blank"
									>
										LinkedIn
									</SocialLink>
								)}
								{email && (
									<SocialLink href={`mailto:${email}`}>
										{email}
									</SocialLink>
								)}
							</SocialWrapper>
							<LayoutGrid>
								<ClientList
									title="Past Experience:"
									list={pastList}
								/>
								<ClientList
									title="Selected Clients:"
									list={clientList}
								/>
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
				</InfoModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default InfoModal;
