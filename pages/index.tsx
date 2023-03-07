import styled from 'styled-components';
import { getSiteData, getFeaturedProjects } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import FeaturedProjects from '../components/blocks/FeaturedProjects';
import { PreviewContextWrapper } from '../shared/context/previewContext';
import { Transitions } from '../shared/types/types';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

type Props = {
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string
		};
	};
	featuredProjects: [];
	pageTransitionVariants: Transitions;
};

const Page = (props: Props) => {
	const {
		siteData,
		featuredProjects,
		pageTransitionVariants
	} = props;

	return (
	<PageWrapper
		variants={pageTransitionVariants}
		initial='hidden'
		animate='visible'
		exit='hidden'
	>
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
		<PreviewContextWrapper>
			<FeaturedProjects data={featuredProjects} />
		</PreviewContextWrapper>
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	const featuredProjects = await getFeaturedProjects();

	featuredProjects.sort((a: { client: string }, b: { client: string }) => a.client.localeCompare(b.client));

	return {
		props: {
			siteData,
			featuredProjects,
		},
	};
}

export default Page;
