import styled from 'styled-components';
import { FeaturedProjectsType } from '../../../shared/types/types';
import Link from 'next/link';
import pxToRem from '../../../utils/pxToRem';
import { useContext, useEffect, useRef, useState } from 'react';
import { PreviewContext } from '../../../shared/context/previewContext';
import Marquee from 'react-fast-marquee';

type StyledProps = {
	$isMarquee?: boolean;
}

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
	column-gap: ${pxToRem(60)};

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
	overflow: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
		padding-right: ${pxToRem(16)};
	}
`;

const ClientInner = styled.div``;

const Client = styled.div<StyledProps>`
	padding: 0 ${pxToRem(16)};
	overflow: hidden;
	display: ${(props) => props.$isMarquee ? 'inline-block' : 'inline'};
	white-space: nowrap;
	width: 100%;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const TitleWrapper = styled.div`
	overflow: hidden;
`;

const TitleInner = styled.div``;

const Title = styled.div<StyledProps>`
	padding: 0 ${pxToRem(16)};
	display: ${(props) => props.$isMarquee ? 'inline-block' : 'inline'};
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

type Props = {
	data: FeaturedProjectsType;
}

const FeaturedProjectCard = (props: Props) => {
	const {
		data
	} = props;

	const [useMobileMarquee, setUseMobileMarquee] = useState<boolean>(true);
	const [useClientMarquee, setUseClientMarquee] = useState<boolean>(true);
	const [useTitleMarquee, setUseTitleMarquee] = useState<boolean>(true);
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
		setTimeout(() => {
			const mobileTextRef = mobileContainerRef?.current;
			const clientTextRef = clientContainerRef?.current;
			const textRef = titleContainerRef?.current;

			if (!clientTextRef || !textRef || !mobileTextRef) return;

			if (mobileTextRef?.scrollWidth > mobileTextRef?.offsetWidth) {
				setUseMobileMarquee(true);
			}

			if (mobileTextRef?.scrollWidth <= mobileTextRef?.offsetWidth) {
				setUseMobileMarquee(false);
			}

			if (clientTextRef?.scrollWidth > clientTextRef?.offsetWidth) {
				setUseClientMarquee(true);
			}

			if (clientTextRef?.scrollWidth <= clientTextRef?.offsetWidth) {
				setUseClientMarquee(false);
			}

			if (textRef?.scrollWidth > textRef?.offsetWidth) {
				setUseTitleMarquee(true);
			}

			if (textRef?.scrollWidth <= textRef?.offsetWidth) {
				setUseTitleMarquee(false);
			}
		}, 250);

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
														$isMarquee={useClientMarquee}
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
												$isMarquee={useClientMarquee}
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
										$isMarquee={useClientMarquee}
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
														$isMarquee={useTitleMarquee}
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
												$isMarquee={useTitleMarquee}
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
										$isMarquee={useTitleMarquee}
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
								<MobileClient
									className="type-large"ref={mobileContainerRef}>
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
