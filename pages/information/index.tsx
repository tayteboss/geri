import React from 'react';
import styled from 'styled-components';
import { getSiteData } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import Footer from '../../components/layout/Footer';
import Information from '../../components/blocks/Information';
import { Transitions } from '../../shared/types/types';
import { motion } from 'framer-motion';

const PageWrapper = styled(motion.div)``;

type Props = {
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string
		};
	};
	pageTransitionVariants: Transitions;
};

const Page = (props: Props) => {
	const {
		siteData,
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
