import Image from 'next/image';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const ArticleCardWrapper = styled.div`
	margin-bottom: ${pxToRem(80)};
	display: flex;
	gap: ${pxToRem(16)};
	max-width: ${pxToRem(940)};
	padding-right: ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
	}
`;

const ImageWrapper = styled.div`
	flex: 1;
	position: relative;
	overflow: hidden;
	min-height: ${pxToRem(360)};
`;

const ContentWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		gap: ${pxToRem(24)};
	}
`;

const Pill = styled.span`
	border: 1px solid var(--colour-site-colour);
	padding: ${pxToRem(1)} ${pxToRem(6)} 0;
	border-radius: 100px;
	font-family: var(--font-light);
`;

const PillsWrapper = styled.div`
	display: flex;
	gap: ${pxToRem(8)};
	margin-bottom: ${pxToRem(12)};
`;

const TopWrapper = styled.div``;

const Title = styled.h3`
	margin-bottom: ${pxToRem(8)};
`;

const Excerpt = styled.p``;

const Link = styled.a`
	text-decoration: none;
	padding: ${pxToRem(2)} ${pxToRem(8)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(20)};
		color: var(--fg);
		border-radius: 100px;
		border: 1px solid var(--fg);
		padding: 4px 8px 3px;
		line-height: 1;
	}

	&:hover {
		background: var(--fg);
		color: var(--bg);
		border-radius: 100px;
	}
`;

const ArticleCard = (props: any) => {
	const {
		title,
		excerpt,
		image,
		articleUrl,
		articleType,
		date,
		buttonTitle
	} = props;

	return (
		<>
			{articleUrl && (
				<ArticleCardWrapper>
					<ImageWrapper>
						{image?.url && (
							<Image
								src={image.url}
								layout="fill"
								objectFit="cover"
							/>
						)}
					</ImageWrapper>
					<ContentWrapper>
						<TopWrapper>
							<PillsWrapper>
								{date && (
									<Pill className="type-small">{date}</Pill>
								)}
								{articleType && (
									<Pill className="type-small">
										{articleType}
									</Pill>
								)}
							</PillsWrapper>
							{title && <Title>{title}</Title>}
							{excerpt && <Excerpt>{excerpt}</Excerpt>}
						</TopWrapper>
						{buttonTitle && (
							<Link
								href={articleUrl}
								target="_blank"
								className="type-large cursor-link"
							>
								{buttonTitle}
							</Link>
						)}
					</ContentWrapper>
				</ArticleCardWrapper>
			)}
		</>
	);
};

export default ArticleCard;
