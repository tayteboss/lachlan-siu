import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

type Props = {
	data: any;
};

const HomeIntroWrapper = styled.section`
	position: relative;
	z-index: 1;
`;

const Inner = styled(motion.div)`
	padding: ${pxToRem(120)} 0 ${pxToRem(96)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(24)} 0 ${pxToRem(36)};
	}
`;

const Intro = styled.h1``;

const HomeIntro = (props: Props) => {
	const { data } = props;

	const [viewportHeight, setViewportHeight] = useState(0);

	const { scrollY } = useScroll();

	const translateY = useTransform(scrollY, [0, viewportHeight], [0, 350]);
	const opacity = useTransform(scrollY, [0, viewportHeight * 0.75], [1, 0]);

	useEffect(() => {
		setViewportHeight(window.innerHeight);
		window.addEventListener('resize', () => {
			setViewportHeight(window.innerHeight);
		});
	}, []);

	return (
		<HomeIntroWrapper>
			<LayoutWrapper>
				<Inner style={{ y: translateY, opacity }}>
					<Intro>{data || ''}</Intro>
				</Inner>
			</LayoutWrapper>
		</HomeIntroWrapper>
	);
};

export default HomeIntro;
