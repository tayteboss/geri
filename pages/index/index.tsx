import styled from 'styled-components';
import { getSiteData, getIndexProjects } from '../../lib/datocms';
import { NextSeo } from 'next-seo';
import IndexProjects from '../../components/blocks/IndexProjects';
import Footer from '../../components/layout/Footer';

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
		<IndexProjects data={indexProjects} />
		<Footer showInfo />
	</PageWrapper>
	);
};

export async function getStaticProps() {
	const siteData = await getSiteData();
	const rawIndexProjects = await getIndexProjects();

	let indexProjects: any = {
		A: { letter: 'A', client: [] },
		B: { letter: 'B', client: [] },
		C: { letter: 'C', client: [] },
		D: { letter: 'D', client: [] },
		E: { letter: 'E', client: [] },
		F: { letter: 'F', client: [] },
		G: { letter: 'G', client: [] },
		H: { letter: 'H', client: [] },
		I: { letter: 'I', client: [] },
		J: { letter: 'J', client: [] },
		K: { letter: 'K', client: [] },
		L: { letter: 'L', client: [] },
		M: { letter: 'M', client: [] },
		N: { letter: 'N', client: [] },
		O: { letter: 'O', client: [] },
		P: { letter: 'P', client: [] },
		Q: { letter: 'Q', client: [] },
		R: { letter: 'R', client: [] },
		S: { letter: 'S', client: [] },
		T: { letter: 'T', client: [] },
		U: { letter: 'U', client: [] },
		V: { letter: 'V', client: [] },
		W: { letter: 'W', client: [] },
		X: { letter: 'X', client: [] },
		Y: { letter: 'Y', client: [] },
		Z: { letter: 'Z', client: [] },
	};

	rawIndexProjects.forEach((item: { client: string }) => {
		const client = item.client;
		const arrName = client.split(' ');
		const firstLetter = arrName[arrName.length - 1].charAt(0);

		if (!indexProjects[firstLetter]) {
			indexProjects[firstLetter] = {
				letter: firstLetter,
				client: []
			};
		}

		indexProjects[firstLetter].client.push({ ...item });
	});

	indexProjects = Object.values(indexProjects);

	return {
		props: {
			siteData,
			indexProjects,
		},
	};
}

export default Page;
