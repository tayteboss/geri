import styled from 'styled-components';
import { getSiteData } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import Footer from '../../components/layout/Footer';
import Information from '../../components/blocks/Information';

const PageWrapper = styled.div``;

type Props = {
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string
		};
	};
};

const Page = (props: Props) => {
	const {
		siteData
	} = props;

	return (
	<PageWrapper>
		<NextSeo
			title="Geri Edits Films - Information"
			description={siteData?.seoDescription}
			openGraph={{
				images: [
					{
						url: siteData?.seoImage?.url,
						width: 1200,
						height: 630,
					},
				],
			}}
		/>
		<Information />
		<Footer showInfo={false} />
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();

	return {
		props: {
			siteData,
		},
	};
}

export default Page;
