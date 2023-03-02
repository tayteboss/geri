import styled from 'styled-components';

const options = require('../../../json/siteData.json');

const FooterSecondaryWrapper = styled.div`
	grid-column: 5 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Title = styled.p``;

const Link = styled.a`
	text-decoration: none;

	&:hover {
		text-decoration: underline;
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
					className="type-large"
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
