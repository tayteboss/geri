import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import PrimaryLink from '../components/elements/PrimaryLink';
import pxToRem from '../utils/pxToRem';
import Head from 'next/head';

const PageWrapper = styled.div`
	padding: ${pxToRem(48)} 0 0 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(120)} ${pxToRem(8)} 0;
	}
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(16)};
`;

const Page = () => {
	return (
		<PageWrapper>
			<Head>
				<link
					rel="icon"
					type="image/png"
					href="favicon/favicon-96x96.png"
					sizes="96x96"
				/>
				<link
					rel="icon"
					type="image/svg+xml"
					href="favicon/favicon.svg"
				/>
				<link rel="shortcut icon" href="favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="favicon/apple-touch-icon.png"
				/>
				<link rel="manifest" href="favicon/site.webmanifest" />
			</Head>
			<LayoutWrapper>
				<Title>Sorry, this page doesn't exist</Title>
				<PrimaryLink link="/" title="Go Home" />
			</LayoutWrapper>
		</PageWrapper>
	);
};

export default Page;
