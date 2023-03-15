import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import PrimaryButton from '../../elements/PrimaryButton';
import { useState } from 'react';
import LayoutGrid from '../../common/LayoutGrid';
import InformationBio from './InformationBio';

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

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
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

const Information = () => {
	const {
		vimeoLink,
		instagramLink,
		email,
		phone,
		bio,
		title,
		subTitle
	} = options;

	const [showBio, setShowBio] = useState(false);

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
								className="type-large"
							>
								{email}
							</Link>
						)}
						{phone && (
							<Link
								href={`tel: ${phone}`}
								className="type-large"
							>
								{phone}
							</Link>
						)}
					</GridWrapper>
					<GridWrapper>
						{instagramLink && (
							<Link
								className="type-large"
								href={instagramLink}
								target="_blank"
							>
								@geri______tv
							</Link>
						)}
						{vimeoLink && (
							<Link
								className="type-large"
								href={vimeoLink}
								target="_blank"
							>
								vimeo.com/geritv
							</Link>
						)}
					</GridWrapper>
				</LayoutGrid>
			</ContactWrapper>
		</InformationWrapper>
	);
};

export default Information;
