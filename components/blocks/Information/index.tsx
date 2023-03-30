import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';
import InformationBio from './InformationBio';
import Image from 'next/image';

const options = require('../../../json/siteData.json');

const InformationWrapper = styled.div`
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
	margin-bottom: ${pxToRem(32)};
`;

const Subtitle = styled.h2`
	max-width: ${pxToRem(950)};
	margin-bottom: ${pxToRem(32)};
`;

const ContactWrapper = styled.div`
	margin-top: ${pxToRem(32)};
`;

const GridWrapper = styled.div`
	grid-column: span 5;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.tabletLandscape} {
		grid-column: 1 / -1;
	}
`;

const Link = styled.a`
	text-decoration: none;
	padding: ${pxToRem(2)} ${pxToRem(8)};

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0;
	}

	&:hover {
		background: var(--fg);
		color: var(--bg);
		border-radius: 100px;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	height: calc(${pxToRem(950)} / 2);
	width: calc(${pxToRem(950)} / 2);
	margin: ${pxToRem(32)} 0;
	background-color: var(--fg);
	position: relative;

	img {
		mix-blend-mode: lighten;

		&:hover {
			mix-blend-mode: normal;
		}

		transition: all ${props => props.theme.transitionSpeed.default} ease;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
		padding-top: 100%;
	}
`;

const Information = () => {
	const {
		vimeoLink,
		instagramLink,
		email,
		phone,
		bio,
		bioImage,
		title,
		subTitle
	} = options;
	return (
		<InformationWrapper>
			{title && (
				<Title className="type-h1">
					{title}
				</Title>
			)}
			{subTitle && (
				<Subtitle className="type-h1">
					{subTitle}
				</Subtitle>
			)}
			<InformationBio bio={bio} />
			<ContactWrapper>
				<LayoutGrid>
					<GridWrapper>
						{email && (
							<Link
								href={`mailto: ${email}`}
								className="type-large cursor-link"
							>
								{email}
							</Link>
						)}
						{phone && (
							<Link
								href={`tel: ${phone}`}
								className="type-large cursor-link"
							>
								{phone}
							</Link>
						)}
					</GridWrapper>
					<GridWrapper>
						{instagramLink && (
							<Link
								className="type-large cursor-link"
								href={instagramLink}
								target="_blank"
							>
								@geri______tv
							</Link>
						)}
						{vimeoLink && (
							<Link
								className="type-large cursor-link"
								href={vimeoLink}
								target="_blank"
							>
								vimeo.com/geritv
							</Link>
						)}
					</GridWrapper>
				</LayoutGrid>
			</ContactWrapper>
			{bioImage?.url && (
				<ImageWrapper>
					<Image
						src={bioImage.url}
						layout="fill"
						objectFit="cover"
						priority
					/>
				</ImageWrapper>
			)}
		</InformationWrapper>
	);
};

export default Information;
