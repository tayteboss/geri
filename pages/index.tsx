import styled from 'styled-components';
import { getPage, getSiteData, getFeaturedProjects, getIndexProjects } from '../lib/datocms';
import { NextSeo } from 'next-seo';

const PageWrapper = styled.div``;

type Props = {
	data: {};
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string
		};
	};
	featuredProjects: {};
};

const Page = (props: Props) => {
	const {
		siteData,
		featuredProjects,
	} = props;

	console.log('siteData', siteData);
	console.log('featuredProjects', featuredProjects);

	return (
	<PageWrapper>
		<NextSeo
			title="Geri Edits Films"
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
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	const featuredProjects = await getFeaturedProjects();

	return {
		props: {
			siteData,
			featuredProjects,
		},
	};
}

export default Page;
