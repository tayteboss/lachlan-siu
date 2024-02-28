import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useMousePosition } from '../../../hooks/useMousePosition';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	cursorRefresh: () => void;
};

type StyledProps = {
	$isHoveringLink?: boolean;
	$isOnDevice?: boolean;
	$isHoveringTextLink?: boolean;
};

const CursorWrapper = styled.div<StyledProps>`
	height: 27px;
	width: 27px;
	z-index: 1000;
	position: fixed;
	display: ${(props) => (props.$isOnDevice ? 'none' : 'block')};

	transition: opacity ${(props) => props.theme.transitionSpeed.default} ease;
	transition-delay: 500ms;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const CursorRing = styled(motion.div)<StyledProps>`
	mix-blend-mode: normal;
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: ${(props) =>
		props.$isHoveringTextLink
			? '-12px'
			: props.$isHoveringLink
			? '-12px'
			: '-6px'};
	left: ${(props) =>
		props.$isHoveringTextLink
			? '-25px'
			: props.$isHoveringLink
			? '-12px'
			: '-6px'};
	height: ${(props) =>
		props.$isHoveringTextLink
			? '24px'
			: props.$isHoveringLink
			? '24px'
			: '12px'};
	width: ${(props) =>
		props.$isHoveringTextLink
			? '50px'
			: props.$isHoveringLink
			? '24px'
			: '12px'};
	background: var(--colour-black);
	border-radius: 100px;
	pointer-events: none;
	text-align: center;
	z-index: 2;
	border: 1px solid var(--colour-white);
	padding: ${pxToRem(2)} ${pxToRem(4)};
	display: flex;
	justify-content: center;
	align-items: center;

	transition: height 300ms ease, width 300ms ease, background 200ms ease,
		top 300ms ease, left 300ms ease, border-radius 300ms ease;
`;

const Text = styled(motion.div)`
	font-size: ${pxToRem(14)};
	line-height: 1;
	color: var(--colour-white);
`;

const Cursor = ({ cursorRefresh }: Props) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [isHoveringTextLink, setIsHoveringTextLink] = useState(false);
	const [isHoveringTextLinkClose, setIsHoveringTextLinkClose] =
		useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);
	const position = useMousePosition();
	const router = useRouter();

	let mouseXPosition = position.x;
	let mouseYPosition = position.y;

	const variantsWrapper = {
		visible: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.01,
				stiffness: 800,
				damping: 20,
				ease: 'linear'
			}
		}
	};

	const clearCursor = () => {
		setIsHoveringLink(false);
		setIsOnDevice(false);
	};

	useEffect(() => {
		const aTags = document.querySelectorAll('a');
		const buttonTags = document.querySelectorAll('button');
		const cursorLinks = document.querySelectorAll('.cursor-link');
		const textLinks = document.querySelectorAll('.text-link');
		const textLinksClose = document.querySelectorAll('.text-link-close');

		aTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		buttonTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		cursorLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		textLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringTextLink(true);
				setIsHoveringTextLinkClose(false);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringTextLink(false);
				setIsHoveringTextLinkClose(false);
			});
			link.addEventListener('click', () => {
				setIsHoveringTextLink(false);
				setIsHoveringTextLinkClose(false);
			});
		});

		textLinksClose.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringTextLinkClose(true);
				setIsHoveringTextLink(false);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringTextLinkClose(false);
				setIsHoveringTextLink(false);
			});
			link.addEventListener('click', () => {
				setIsHoveringTextLinkClose(false);
				setIsHoveringTextLink(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}

		return function cleanUp() {
			setIsHoveringLink(false);
			setIsOnDevice(false);
		};
	}, [cursorRefresh]);

	// reset cursor on page change
	useEffect(() => {
		clearCursor();
	}, [router.pathname, router.asPath, router.query.slug, cursorRefresh]);

	return (
		<>
			<CursorWrapper $isOnDevice={isOnDevice} className="cursor-wrapper">
				<CursorRing
					$isHoveringLink={isHoveringLink}
					$isHoveringTextLink={
						isHoveringTextLink || isHoveringTextLinkClose
					}
					variants={variantsWrapper}
					animate="visible"
					layout
				>
					<AnimatePresence>
						{isHoveringTextLink && <Text key={1}>More</Text>}
						{isHoveringTextLinkClose && <Text key={2}>Less</Text>}
					</AnimatePresence>
				</CursorRing>
			</CursorWrapper>
		</>
	);
};

export default Cursor;
