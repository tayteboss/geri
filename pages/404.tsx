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
				<link rel="apple-touch-icon" sizes="180x180" href={`/favicon/black/apple-touch-icon.png`} />
				<link rel="icon" type="image/png" sizes="32x32" href={`/favicon/black/favicon-32x32.png`} />
				<link rel="icon" type="image/png" sizes="16x16" href={`/favicon/black/favicon-16x16.png`} />
				<link rel="manifest" href={`/favicon/black/site.webmanifest`} />
				<link rel="shortcut icon" href={`/favicon/black/favicon.ico`} />
				<meta name="msapplication-config" content={`/favicon/black/browserconfig.xml`} />
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<LayoutWrapper>
				<Title>Sorry, this page doesn't exist</Title>
				<PrimaryLink link="/" title="Go Home" />
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;
