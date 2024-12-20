import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--font-regular: ${theme.fonts.regular};
		--font-medium: ${theme.fonts.medium};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		cursor: none !important;
	}

	::selection {
		background-color: white;
		color: grey;
	}

	html {
		background: var(--colour-white);
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-regular);
		color: var(--colour-black);
		line-height: normal;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: underline;
		color: var(--colour-black);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${pxToRem(65)};
		line-height: ${pxToRem(74)};
		font-family: var(--font-regular);
		font-weight: 300;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-family: var(--font-regular);
			font-size: ${pxToRem(25)};
			line-height: ${pxToRem(32)};
		}
	}

	h2,
	.type-h2 {
		font-size: ${pxToRem(28)};
		line-height: ${pxToRem(35)};
		font-family: var(--font-regular);
		font-weight: 300;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-family: var(--font-regular);
		}
	}

	h3,
	.type-h3 {
		font-size: ${pxToRem(25)};
		line-height: ${pxToRem(33)};
		font-family: var(--font-regular);
		font-weight: 300;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(17)};
			line-height: ${pxToRem(23)};
			font-family: var(--font-regular);
		}
	}

	h4,
	.type-h4,
	p,
	.type-p,
	a,
	button,
	div {
		font-size: ${pxToRem(18)};
		line-height: ${pxToRem(24)};
		font-family: var(--font-regular);
		font-weight: 300;

		@media ${theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(13)};
			line-height: ${pxToRem(19)};
		}
	}

	mux-player {
		--media-object-fit: contain;
		--media-object-position: center;
		--controls: none;
		--media-object-fit: cover;
		--media-object-position: center;
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity var(--transition-speed-default) ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1), transform var(--transition-speed-default) cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		img,
		mux-player {
			transform: scale(1.05);
			opacity: 0;

			transition: opacity 300ms ease, transform 3000ms ease-in-out;
		}


		&--in-view
		{
			img,
			mux-player {
				opacity: 1;
				transform: scale(1);
			}
		}
	}

	.rich-text {
		* {
			text-align: center;
		}

		h1,
		h2,
		h3,
		h4 {
			font-size: ${pxToRem(20)};
			line-height: ${pxToRem(24)};
			font-weight: 300;

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				font-size: ${pxToRem(17)};
				font-family: var(--font-regular);
			}
		}

		p {
			font-size: ${pxToRem(18)};
			line-height: ${pxToRem(24)};

			&:not(:last-child) {
				margin-bottom: 16px;

				@media ${theme.mediaBreakpoints.tabletPortrait} {
					margin-bottom: 8px;
				}
			}

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				font-size: ${pxToRem(17)};
			}
		}

		h1,
		h2,
		h3,
		h4
		{
			margin-bottom: 16px;

			@media ${theme.mediaBreakpoints.tabletPortrait} {
				margin-bottom: 8px;
			}
		}
	}

	.embla {
		overflow: hidden;
	}

	.embla__container {
		display: flex;
	}

	.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
	}

	.performance {
		-webkit-transform: translateZ(0);
		backface-visibility: hidden;
		perspective: 1000;
		transform: translate3d(0,0,0);
		transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${pxToRem(16)};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 5rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}

	html.lenis {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-scrolling iframe {
  pointer-events: none;
}
`;
