import styled from 'styled-components';
import MuxPlayer from '@mux/mux-player-react';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

const ProjectCarouselWrapper = styled.div`
	margin-bottom: ${pxToRem(14)};
`;

const Inner = styled.div`
	padding-top: 66.66%;
	position: relative;

	mux-player,
	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
`;

const PrevSlideTrigger = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 50%;
	height: 100%;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const NextSlideTrigger = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 50%;
	height: 100%;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MediaWrapper = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
`;

const Embla = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const EmblaContainer = styled.div`
	height: 100%;
	width: 100%;
`;

const EmblaSlide = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

type Props = {
	thumbnailImage: string | undefined;
	thumbnailVideo: string | undefined;
	carousel: [] | undefined;
	setActiveSlideIndex: (value: number) => void;
	setCarouselLength: (value: number) => void;
};

const ProjectCarousel = (props: Props) => {
	const {
		thumbnailImage,
		thumbnailVideo,
		carousel,
		setActiveSlideIndex,
		setCarouselLength
	} = props;

	const newCarousel = [
		...(thumbnailImage ? [{ image: thumbnailImage }] : []),
		...(thumbnailVideo ? [{ video: thumbnailVideo }] : []),
		...(carousel || [])
	];
	const hasSlides = newCarousel.length > 0;
	const hasCarousel = newCarousel.length > 1;

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		skipSnaps: true
	});

	const handlePreviousSlide = () => {
		if (emblaApi) emblaApi.scrollPrev();
		setActiveSlideIndex(emblaApi?.selectedScrollSnap());
	};
	const handleNextSlide = () => {
		if (emblaApi) emblaApi.scrollNext();
		setActiveSlideIndex(emblaApi?.selectedScrollSnap());
	};

	useEffect(() => {
		setCarouselLength(newCarousel.length);
	}, [newCarousel]);

	return (
		<ProjectCarouselWrapper>
			<Inner>
				<PrevSlideTrigger
					className={`${hasCarousel ? 'cursor-prev' : ''}`}
					onClick={() => handlePreviousSlide()}
				/>
				<NextSlideTrigger
					className={`${hasCarousel ? 'cursor-next' : ''}`}
					onClick={() => handleNextSlide()}
				/>
				<Embla className="embla" ref={emblaRef}>
					<EmblaContainer className="embla__container">
						{hasSlides &&
							newCarousel.map((slide: any, i: number) => {
								const useImage = !slide?.video && slide?.image;

								return (
									<EmblaSlide
										key={i}
										className="embla__slide"
									>
										{!useImage && (
											<MediaWrapper>
												<MuxPlayer
													streamType="on-demand"
													playbackId={
														slide?.video || ''
													}
													autoPlay="muted"
													loop={true}
													thumbnailTime={1}
													preload="auto"
													muted
													playsInline={true}
												/>
											</MediaWrapper>
										)}
										{useImage && (
											<MediaWrapper>
												<Image
													src={slide?.image || ''}
													fill
													style={{
														objectFit: 'cover'
													}}
													alt="Project thumbnail"
												/>
											</MediaWrapper>
										)}
									</EmblaSlide>
								);
							})}
					</EmblaContainer>
				</Embla>
			</Inner>
		</ProjectCarouselWrapper>
	);
};

export default ProjectCarousel;
