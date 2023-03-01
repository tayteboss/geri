import styled from 'styled-components';
import { FeaturedProjectsType } from '../../../shared/types/types';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';
import { useContext, useEffect, useRef, useState } from 'react';
import { PreviewContext } from '../../../shared/context/previewContext';
import Marquee from 'react-fast-marquee';

const DesktopCheck = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileCheck = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const DesktopFeaturedProjectCardWrapper = styled.a`
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
	min-width: 40%;
	padding-right: ${pxToRem(60)};
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
		padding-right: ${pxToRem(16)};
	}
`;

const ClientInner = styled.div``;

const Client = styled.div`
	padding: 0 ${pxToRem(16)};
	overflow: hidden;
	display: inline-block;
	white-space: nowrap;
	width: 100%;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const TitleWrapper = styled.div`
	overflow: hidden;
`;

const TitleInner = styled.div``;

const Title = styled.div`
	padding: 0 ${pxToRem(16)};
	display: inline-block;
	overflow: hidden;
	white-space: nowrap;
	width: 100%;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const MobileFeaturedProjectCardWrapper = styled.a`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		text-decoration: none;
		display: flex;

		&:hover, &:active {
			opacity: 1 !important;
	
			.featured-client,
			.featured-title {
				background: var(--colour-red);
				color: var(--colour-black);
				border-radius: 100px;
			}
		}
	}
`;

const MobileTitleWrapper = styled.div`
	width: 100%;
`;

const MobileClient = styled.div`
	white-space: nowrap;
	width: 100%;
	overflow: hidden;
	margin-right: ${pxToRem(16)};
`;

const MobileTitle = styled.span`
	opacity: 0;
`;

type Props = {
	data: FeaturedProjectsType;
}

const FeaturedProjectCard = (props: Props) => {
	const {
		data
	} = props;

	const [useMobileMarquee, setUseMobileMarquee] = useState<boolean>(false);
	const [useClientMarquee, setUseClientMarquee] = useState<boolean>(false);
	const [useTitleMarquee, setUseTitleMarquee] = useState<boolean>(false);
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [outerHover, setOuterHover] = useState<boolean>(false);

	const { setPreviewData } = useContext(PreviewContext);

	const titleContainerRef = useRef<HTMLDivElement>(null);
	const clientContainerRef = useRef<HTMLDivElement>(null);
	const mobileContainerRef = useRef<HTMLDivElement>(null);

	const handleOuterMouseOver = () => {
		setPreviewData(data?.media);
		setOuterHover(true);
	};

	const handleOuterMouseOut = () => {
		setPreviewData(false);
		setOuterHover(false);
	};

	useEffect(() => {
		const mobileTextRef = mobileContainerRef?.current;
		const clientTextRef = clientContainerRef?.current;
		const textRef = titleContainerRef?.current;

		console.log('mobileContainerRef', mobileContainerRef);

		if (!clientTextRef || !textRef || !mobileTextRef) return;

		if (mobileTextRef?.scrollWidth > mobileTextRef?.offsetWidth) {
			setUseMobileMarquee(true);
		}

		if (clientTextRef?.scrollWidth > clientTextRef?.offsetWidth) {
			setUseClientMarquee(true);
		}

		if (textRef?.scrollWidth > textRef?.offsetWidth) {
			setUseTitleMarquee(true);
		}
	}, []);

	return (
		<>
			<DesktopCheck>
				<Link href={data?.vimeoLink} passHref>
					<DesktopFeaturedProjectCardWrapper
						className="featured-project-card"
						target="_blank"
						onMouseOver={() => handleOuterMouseOver()}
						onMouseOut={() => handleOuterMouseOut()}
					>
						{useClientMarquee && (
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
														ref={clientContainerRef}
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
												ref={clientContainerRef}
											>
												{data?.client}
											</Client>
										)}
									</ClientWrapper>
								)}
							</>
						)}
						{!useClientMarquee && (
							<ClientWrapper>
								{data?.client && (
									<Client
										className="type-large featured-client"
										ref={clientContainerRef}
									>
										{data?.client}
									</Client>
								)}
							</ClientWrapper>
						)}
						{useTitleMarquee && (
							<>
								{outerHover && (
									<TitleWrapper
										onMouseOver={() => setIsHovered(true)}
										onMouseOut={() => setIsHovered(false)}
									>
										<TitleInner className="featured-title">
											{data?.title && (
												<Marquee
													gradient={false}
													speed={75}
													play={isHovered}
												>
													<Title
														className="type-large"
														ref={titleContainerRef}
													>
														{data?.title}
													</Title>
												</Marquee>
											)}
										</TitleInner>
									</TitleWrapper>
								)}
								{!outerHover && (
									<TitleWrapper>
										{data?.title && (
											<Title
												className="type-large featured-title"
												ref={titleContainerRef}
											>
												{data?.title}
											</Title>
										)}
									</TitleWrapper>
								)}
							</>
						)}
						{!useTitleMarquee && (
							<TitleWrapper>
								{data?.title && (
									<Title
										className="type-large featured-title"
										ref={titleContainerRef}
									>
										{data?.title}
									</Title>
								)}
							</TitleWrapper>
						)}
					</DesktopFeaturedProjectCardWrapper>
				</Link>
			</DesktopCheck>
			<MobileCheck>
				<Link href={data?.vimeoLink} passHref>
					<MobileFeaturedProjectCardWrapper target="_blank">
						<MobileTitleWrapper>
							{useMobileMarquee && (
								<Marquee
									gradient={false}
									speed={30}
								>
									<MobileClient
										className="type-large"
										ref={mobileContainerRef}
									>
										{data?.client}
									</MobileClient>
								</Marquee>
							)}
							{!useMobileMarquee && (
								<MobileClient className="type-large" ref={mobileContainerRef}>
									{data?.client}
								</MobileClient>
							)}
						</MobileTitleWrapper>
					</MobileFeaturedProjectCardWrapper>
				</Link>
			</MobileCheck>
		</>
	);
};

export default FeaturedProjectCard;
