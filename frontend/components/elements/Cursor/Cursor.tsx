import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { useMousePosition } from '../../../hooks/useMousePosition';
import pxToRem from '../../../utils/pxToRem';
import Arrow from '../../icons/Arrow';

type Props = {
	cursorRefresh: () => void;
};

type StyledProps = {
	$isHoveringLink?: boolean;
	$isOnDevice?: boolean;
	$isHoveringTextLink?: boolean;
	$isHoveringArrow?: boolean;
	$isMouseDown?: boolean;
};

const CursorWrapper = styled.div<StyledProps>`
	height: 27px;
	width: 27px;
	z-index: 1000;
	position: fixed;
	display: ${(props) => (props.$isOnDevice ? 'none' : 'block')};
	mix-blend-mode: difference;

	transition: opacity ${(props) => props.theme.transitionSpeed.default} ease;
	transition-delay: 500ms;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const CursorRing = styled(motion.div)<StyledProps>`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: ${(props) =>
		props.$isHoveringArrow
			? '-12px'
			: props.$isHoveringTextLink
			? '-12px'
			: props.$isHoveringLink
			? '-12px'
			: '-6px'};
	left: ${(props) =>
		props.$isMouseDown
			? '-21px'
			: props.$isHoveringArrow
			? '-18px'
			: props.$isHoveringTextLink
			? '-25px'
			: props.$isHoveringLink
			? '-12px'
			: '-6px'};
	height: ${(props) =>
		props.$isHoveringArrow
			? '24px'
			: props.$isHoveringTextLink
			? '24px'
			: props.$isHoveringLink
			? '24px'
			: '12px'};
	width: ${(props) =>
		props.$isMouseDown
			? '42px'
			: props.$isHoveringArrow
			? '36px'
			: props.$isHoveringTextLink
			? '50px'
			: props.$isHoveringLink
			? '24px'
			: '12px'};
	background: var(--colour-white);
	border-radius: 100px;
	pointer-events: none;
	text-align: center;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: height 300ms ease, width 300ms ease, background 200ms ease,
		top 300ms ease, left 300ms ease, border-radius 300ms ease;
`;

const Text = styled(motion.div)`
	font-size: ${pxToRem(14)};
	line-height: 1;
	color: var(--colour-black);
`;

const IconWrapper = styled.div<{ $isNext: boolean }>`
	padding: ${pxToRem(5)} ${pxToRem(10)};
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		transform: scale(${(props) => (props.$isNext ? 1 : -1)});
	}
`;

const Cursor = ({ cursorRefresh }: Props) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [isHoveringTextLink, setIsHoveringTextLink] = useState(false);
	const [isHoveringTextLinkClose, setIsHoveringTextLinkClose] =
		useState(false);
	const [isHoveringNext, setIsHoveringNext] = useState(false);
	const [isHoveringPrev, setIsHoveringPrev] = useState(false);
	const [isMouseDown, setIsMouseDown] = useState(false);
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
		const prevLinks = document.querySelectorAll('.cursor-prev');
		const nextLinks = document.querySelectorAll('.cursor-next');

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

		prevLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringPrev(true);
				setIsHoveringNext(false);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringPrev(false);
				setIsHoveringNext(false);
			});
			link.addEventListener('mousedown', () => {
				setIsMouseDown(true);
			});
			link.addEventListener('mouseup', () => {
				setIsMouseDown(false);
			});
		});

		nextLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringNext(true);
				setIsHoveringPrev(false);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringNext(false);
				setIsHoveringPrev(false);
			});
			link.addEventListener('mousedown', () => {
				setIsMouseDown(true);
			});
			link.addEventListener('mouseup', () => {
				setIsMouseDown(false);
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
					$isHoveringArrow={isHoveringNext || isHoveringPrev}
					$isMouseDown={isMouseDown}
					variants={variantsWrapper}
					animate="visible"
					layout
				>
					<AnimatePresence>
						{isHoveringTextLink && <Text key={1}>More</Text>}
						{isHoveringTextLinkClose && <Text key={2}>Less</Text>}
						{isHoveringNext && (
							<IconWrapper key={3} $isNext={true}>
								<Arrow />
							</IconWrapper>
						)}
						{isHoveringPrev && (
							<IconWrapper key={3} $isNext={false}>
								<Arrow />
							</IconWrapper>
						)}
					</AnimatePresence>
				</CursorRing>
			</CursorWrapper>
		</>
	);
};

export default Cursor;
