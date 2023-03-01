import styled from 'styled-components';
import { FeaturedProjectsType } from '../../../shared/types/types';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';
import { useContext, useEffect, useRef, useState } from 'react';
import { PreviewContext } from '../../../shared/context/previewContext';
import Marquee from 'react-fast-marquee';

const FeaturedProjectCardWrapper = styled.a`
	text-decoration: none;
	display: flex;
	height: 60px;

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

const ClientInner = styled.div``;

const Client = styled.div`
	padding: 0 ${pxToRem(16)};
	overflow: hidden;
	display: inline-block;
	transition: all var(--transition-speed-default) var(--transition-ease);
	white-space: nowrap;
	width: 100%;
`;

const TitleWrapper = styled.div``;

const Title = styled.div`
	padding: 0 ${pxToRem(16)};
	display: inline-block;
	transition: all var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
	data: FeaturedProjectsType;
}

const FeaturedProjectCard = (props: Props) => {
	const {
		data
	} = props;

	const [useMarquee, setUseMarquee] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [outerHover, setOuterHover] = useState<boolean>(false);

	const { setPreviewData } = useContext(PreviewContext);

	const containerRef = useRef<HTMLDivElement>(null);

	const handleOuterMouseOver = () => {
		setPreviewData(data?.media);
		setOuterHover(true);
	};

	const handleOuterMouseOut = () => {
		setPreviewData(false);
		setOuterHover(false);
	};

	useEffect(() => {
		const textRef = containerRef?.current;

		if (!textRef) return;

		if (textRef?.scrollWidth > textRef?.offsetWidth) {
			setUseMarquee(true);
		}
	}, []);

	return (
		<Link href={data?.vimeoLink} passHref>
			<FeaturedProjectCardWrapper
				className="featured-project-card"
				target="_blank"
				onMouseOver={() => handleOuterMouseOver()}
				onMouseOut={() => handleOuterMouseOut()}
			>
				{useMarquee && (
					<>
						{outerHover && (
							<ClientWrapper
								onMouseOver={() => setIsHovered(true)}
								onMouseOut={() => setIsHovered(false)}
							>
								<ClientInner className="featured-client">
									{data?.client && (
										<Marquee
											gradient={false}
											speed={75}
											play={isHovered}
										>
											<Client
												className="type-large"
												ref={containerRef}
											>
												{data?.client}
											</Client>
										</Marquee>
									)}
								</ClientInner>
							</ClientWrapper>
						)}
						{!outerHover && (
							<ClientWrapper>
								{data?.client && (
									<Client
										className="type-large featured-client"
										ref={containerRef}
									>
										{data?.client}
									</Client>
								)}
							</ClientWrapper>
						)}
					</>
				)}
				{!useMarquee && (
					<ClientWrapper>
						{data?.client && (
							<Client
								className="type-large featured-client"
								ref={containerRef}
							>
								{data?.client}
							</Client>
						)}
					</ClientWrapper>
				)}
				<TitleWrapper>
					{data?.title && (
						<Title
							className="type-large featured-title"
						>
							{data?.title}
						</Title>
					)}
				</TitleWrapper>
			</FeaturedProjectCardWrapper>
		</Link>
	);
};

export default FeaturedProjectCard;
