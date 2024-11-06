import React from 'react';
import styled from 'styled-components';
import { getSiteData } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import Footer from '../../components/layout/Footer';
import Information from '../../components/blocks/Information';
import { Transitions } from '../../shared/types/types';
import { motion } from 'framer-motion';
import Head from 'next/head';

const PageWrapper = styled(motion.div)``;

type Props = {
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string;
		};
	};
	pageTransitionVariants: Transitions;
};

const Page = (props: Props) => {
	const { siteData, pageTransitionVariants } = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title="Geri Edits Films - Information"
				description={siteData?.seoDescription}
				openGraph={{
					images: [
						{
							url: siteData?.seoImage?.url,
							width: 1200,
							height: 630
						}
					]
				}}
			/>
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
			<Information />
			<Footer showInfo={false} />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();

	return {
		props: {
			siteData
		}
	};
}

export default Page;
