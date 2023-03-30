import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const options = require('../../../json/siteData.json');

const FooterSecondaryWrapper = styled.div`
	grid-column: span 5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Title = styled.p``;

const Link = styled.a`
	text-decoration: none;
	padding: ${pxToRem(2)} ${pxToRem(8)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--fg);
		color: var(--bg);
		border-radius: 100px;
	}
`;

const FooterSecondary = () => {
	const {
		siteVersionNumber
	} = options;

	return (
		<FooterSecondaryWrapper>
			<Title className="type-h1">
				All rights reserved.
			</Title>
			<Title className="type-h1">
				© Geri, {new Date().getFullYear()}
			</Title>
			<Title className="type-h1">
				Built by {" "}
				<Link
					href="https://tayte.co/"
					target="_blank"
					className="type-large cursor-link"
				>
					tayte.co
				</Link>
			</Title>
			{siteVersionNumber && (
				<Title className="type-h1">
					v{siteVersionNumber}
				</Title>
			)}
		</FooterSecondaryWrapper>
	);
};

export default FooterSecondary;
