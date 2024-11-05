import styled from 'styled-components';
import { getSiteData, getAllPress } from '../lib/datocms';
import { NextSeo } from 'next-seo';
import { Transitions } from '../shared/types/types';
import { motion } from 'framer-motion';
import Head from 'next/head';
import PressArticles from '../components/blocks/PressArticles';

const PageWrapper = styled(motion.div)``;

type Props = {
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string;
		};
	};
	featuredProjects: [];
	pageTransitionVariants: Transitions;
};

const Page = (props: Props) => {
	const { siteData, pressArticles, pageTransitionVariants } = props;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title="Geri Edits Films - Press & Interviews"
				description="Latest press, interviews and articles from Geri"
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
					rel="apple-touch-icon"
					sizes="180x180"
					href={`/favicon/black/apple-touch-icon.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href={`/favicon/black/favicon-32x32.png`}
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href={`/favicon/black/favicon-16x16.png`}
				/>
				<link rel="manifest" href={`/favicon/black/site.webmanifest`} />
				<link rel="shortcut icon" href={`/favicon/black/favicon.ico`} />
				<meta
					name="msapplication-config"
					content={`/favicon/black/browserconfig.xml`}
				/>
				<meta name="theme-color" content="#ffffff" />
			</Head>
			<PressArticles data={pressArticles} />
		</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	const pressArticles = await getAllPress();

	return {
		props: {
			siteData,
			pressArticles
		}
	};
}

export default Page;
