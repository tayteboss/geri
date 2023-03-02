import styled from 'styled-components';
import { getSiteData, getIndexProjects } from '../../lib/datocms';
import { NextSeo } from 'next-seo';

const PageWrapper = styled.div`
	background: var(--colour-red);
`;

type Props = {
	siteData: {
		seoDescription: string;
		seoImage: {
			url: string
		};
	};
	indexProjects: [];
};

const Page = (props: Props) => {
	const {
		siteData,
		indexProjects,
	} = props;

	console.log('siteData', siteData);
	console.log('featuredProjects', indexProjects);

	return (
	<PageWrapper>
		<NextSeo
			title="Geri Edits Films - Index"
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
		Index
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	const rawIndexProjects = await getIndexProjects();

	let indexProjects = {};

	rawIndexProjects.forEach((item: { client: string }) => {
		const client = item.client;
		const arrName = client.split(' ');
		const firstLetter = arrName[arrName.length - 1].charAt(0);

		if (!indexProjects[firstLetter]) {
			indexProjects[firstLetter] = {
				letter: firstLetter,
				people: []
			};
		}

		indexProjects[firstLetter].people.push({ ...item });
	});

	return {
		props: {
			siteData,
			indexProjects,
		},
	};
}

export default Page;
