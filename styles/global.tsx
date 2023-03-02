import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-red: ${theme.colours.red};
		--font-default: ${theme.fonts.default};
		--font-light: ${theme.fonts.light};
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
		font-weight: 100;
	}

	::selection {
		background-color: red;
		color: black;
	}

	html {
		scroll-behavior: smooth;
		background: var(--bg);
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
		font-family: var(--font-default);
		color: var(--fg);
		line-height: 1.4;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		color: var(--fg);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	p,
	.type-p,
	a,
	button {
		font-size: ${theme.size.body};
		color: var(--fg);

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.body};
		}
	}

	p,
	.type-p,
	a {
		font-family: var(--font-light);
	}

	h1,
	.type-h1,
	h2,
	.type-h2,
	h3,
	.type-h3,
	h4,
	.type-h4,
	.type-large {
		font-family: var(--font-default);
		font-size: ${theme.size.h1};
		line-height: 3.313rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeMobile.h1};
			line-height: 2.563rem;
		}
	}

	.type-small {
		font-size: ${theme.size.small};
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: opacity ${theme.transitionSpeed.default} ease;

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity ${theme.transitionSpeed.default} cubic-bezier(0.65, 0, 0.35, 1), transform ${theme.transitionSpeed.default} cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity ${theme.transitionSpeed.default} ease, transform ${theme.transitionSpeed.default} ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
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
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
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

	.infinite-scroll-loop {
		&-outer {
			position: relative;

			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				pointer-events: none;
			}
		}

		&-inner {
			overflow-y: scroll;
			scrollbar-width: none;
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}
`;
