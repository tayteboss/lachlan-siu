import styled from 'styled-components';
import { AnimatePresence, delay, motion } from 'framer-motion';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import ClientList from '../ClientList';
import pxToRem from '../../../utils/pxToRem';
import { ClientType } from '../../../shared/types/types';

type Props = {
	isActive: boolean;
	instagramUrl: string;
	linkedInUrl: string;
	clientList: ClientType[];
	pastList: ClientType[];
	introContent: string;
	email: string;
};

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
			ease: 'easeInOut',
			delay: 0.3
		}
	}
};

const InfoModalWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	z-index: 90;
	pointer-events: all;
	overflow: auto;
`;

const Inner = styled.div`
	padding-bottom: ${pxToRem(120)};
`;

const IntroWrapper = styled.div`
	padding: ${pxToRem(120)} 0 ${pxToRem(64)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: calc(var(--header-h) + 24px) 0 ${pxToRem(36)};
	}
`;

const Intro = styled.h1``;

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

	&:hover {
		text-decoration: underline;
	}
`;

const InfoModal = (props: Props) => {
	const {
		isActive,
		instagramUrl,
		linkedInUrl,
		clientList,
		pastList,
		introContent,
		email
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
								<ClientList title="Past:" list={pastList} />
								<ClientList
									title="Clients:"
									list={clientList}
								/>
							</LayoutGrid>
						</Inner>
					</LayoutWrapper>
				</InfoModalWrapper>
			)}
		</AnimatePresence>
	);
};

export default InfoModal;
