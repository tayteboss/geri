import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FeaturedProjectCard from './FeaturedProjectCard';
import { FeaturedProjectsType } from '../../../shared/types/types';
import FeaturedPreviewCard from './FeaturedPreviewCard';
import { useRouter } from 'next/router';

const InfiniteScrollOuter = styled.div`
	position: relative;
	z-index: 2;
	height: 100lvh;
	height: 100vh;
	overflow: hidden;
	mix-blend-mode: lighten;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 1rem;
	}
`;

const InfiniteScrollInner = styled.div`
	&:hover {
		.featured-project-card {
			opacity: 0.2;
		}
	}
`;

const FeaturedProjectCardsWrapper = styled.div``;

type Props = {
	data: FeaturedProjectsType[];
}

const FeaturedProjectsWrapper = ({
	children
}: {
	children: ReactNode;
}): JSX.Element => {
	const router = useRouter();

	const contentRef = useRef<HTMLDivElement | null>(null);
	const scrollRef = useRef<HTMLDivElement | null>(null);
	const [height, setHeight] = useState<number>(0);
	const surroundingBackup = 4;

	const backupHeight = height * surroundingBackup;

	const handleScroll = useCallback(() => {
		if (scrollRef.current) {
			const scroll = scrollRef.current.scrollTop;
			if (scroll < backupHeight || scroll >= backupHeight + height) {
				scrollRef.current.scrollTop = backupHeight + (scroll % height);
			}
		}
	}, [height]);

	useEffect(() => {
		if (!contentRef) return;

		const timer = setTimeout(() => {
			if (contentRef.current) {
				if (!scrollRef.current) return;
				setHeight(contentRef.current.offsetHeight);
				scrollRef.current.scrollTop = backupHeight;
			}
		}, 50);

		return () => {
			clearTimeout(timer);
		};
	}, [router.asPath, contentRef]);

	return (
		<InfiniteScrollOuter className="infinite-scroll-loop-outer">
			<InfiniteScrollInner
				className="infinite-scroll-loop-inner"
				ref={scrollRef}
				style={{
					height,
				}}
				onScroll={handleScroll}
			>
				{Array(surroundingBackup)
					.fill(0)
					.map((index) => (
						<FeaturedProjectCardsWrapper key={Math.floor(Math.random() * 1000)}>{children}</FeaturedProjectCardsWrapper>
					))}
				<FeaturedProjectCardsWrapper ref={contentRef}>{children}</FeaturedProjectCardsWrapper>
				{Array(surroundingBackup)
					.fill(0)
					.map((index) => (
						<FeaturedProjectCardsWrapper key={Math.floor(Math.random() * 1000)}>{children}</FeaturedProjectCardsWrapper>
					))}
			</InfiniteScrollInner>
		</InfiniteScrollOuter>
	);
};

const FeaturedProjects = (props: Props) => {
	const {
		data,
	} = props;

	if (data.length <= 0) return <></>;

	const doubleData = data.concat(data);

	return (
		<>
			<FeaturedProjectsWrapper>
				{doubleData.map((item: FeaturedProjectsType, index: number) => (
					<FeaturedProjectCard
						data={item}
						key={index}
					/>
				))}
			</FeaturedProjectsWrapper>
			<FeaturedPreviewCard />
		</>
	);
};

export default FeaturedProjects;
