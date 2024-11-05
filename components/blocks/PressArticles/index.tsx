import styled from 'styled-components';
import Footer from '../../layout/Footer';
import pxToRem from '../../../utils/pxToRem';
import ArticleCard from './ArticleCard';

const PressArticlesWrapper = styled.section``;

const PressWrapper = styled.div`
	padding: ${pxToRem(48)} 0 0 0;
	margin-bottom: ${pxToRem(160)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(120)} ${pxToRem(8)} 0;
	}

	.grid {
		grid-template-columns: repeat(10, minmax(0, 1fr));

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}
`;

const Title = styled.h1`
	max-width: ${pxToRem(950)};
	margin-bottom: ${pxToRem(80)};
`;

const PressArticles = (props: any) => {
	const { data } = props;

	const hasData = data?.length > 0;

	return (
		<PressArticlesWrapper>
			<PressWrapper>
				<Title className="type-h1">Latest Press & Interviews</Title>
				{hasData &&
					data.map((item: any, i: number) => (
						<ArticleCard
							title={item?.title}
							excerpt={item?.excerpt}
							image={item?.image}
							articleUrl={item?.articleUrl}
							articleType={item?.articleType}
							buttonTitle={item?.buttonTitle}
							date={item?.date}
							key={i}
						/>
					))}
			</PressWrapper>
			<Footer showInfo={false} />
		</PressArticlesWrapper>
	);
};

export default PressArticles;
