import styled from 'styled-components';
import { FeaturedProjectsType } from '../../../shared/types/types';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';
import { useContext } from 'react';
import { PreviewContext } from '../../../shared/context/previewContext';

const FeaturedProjectCardWrapper = styled.a`
	text-decoration: none;
	display: flex;
	margin-bottom: ${pxToRem(4)};

	&:hover {
		opacity: 1 !important;

		.featured-client,
		.featured-title {
			background: var(--colour-red);
			color: var(--colour-black);
			border-radius: 100px;
		}
	}
`;

const ClientWrapper = styled.div`
	width: 40%;
	padding-right: ${pxToRem(60)};
	overflow: hidden;
`;

const Client = styled.div`
	padding: 0 ${pxToRem(16)};
	overflow: hidden;
	display: inline;
	transition: all var(--transition-speed-default) var(--transition-ease);
	white-space: nowrap;
`;

const TitleWrapper = styled.div``;

const Title = styled.div`
	padding: 0 ${pxToRem(16)};
	display: inline;
	transition: all var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
	data: FeaturedProjectsType;
}

const FeaturedProjectCard = (props: Props) => {
	const {
		data
	} = props;

	const { previewData, setPreviewData } = useContext(PreviewContext);

	return (
		<Link href={data?.vimeoLink} passHref>
			<FeaturedProjectCardWrapper
				className="featured-project-card"
				target="_blank"
				onMouseOver={() => setPreviewData(data?.media)}
				onMouseOut={() => setPreviewData(false)}
			>
				<ClientWrapper>
					{data?.client && (
						<Client className="type-large featured-client">{data?.client}</Client>
					)}
				</ClientWrapper>
				<TitleWrapper>
					{data?.title && (
						<Title className="type-large featured-title">{data?.title}</Title>
					)}
				</TitleWrapper>
			</FeaturedProjectCardWrapper>
		</Link>
	);
};

export default FeaturedProjectCard;
