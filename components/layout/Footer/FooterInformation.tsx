import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const options = require('../../../json/siteData.json');

const FooterInformationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	grid-column: 1 / 5;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(32)};
	}
`;

type StyledProps = {
	$mt?: string;
}

const LinkTag = styled.a<StyledProps>`
	text-decoration: none;
	padding: ${pxToRem(1)} ${pxToRem(4)} 0;
	margin-top: ${(props) => props.$mt};

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--fg);
		color: var(--bg);
		border-radius: 100px;
	}
`;

const FooterInformation = () => {
	const {
		vimeoLink,
		instagramLink,
		email,
		phone
	} = options;
	

	return (
		<FooterInformationWrapper>
			<Link href={`mailto: ${email}`} passHref>
				<LinkTag>
					{email && email}
				</LinkTag>
			</Link>
			<Link href={`tel: ${phone}`} passHref>
				<LinkTag>
					{phone && phone}
				</LinkTag>
			</Link>
			<Link href={instagramLink} passHref>
				<LinkTag $mt="16px" target="_blank">
					@geri______tv
				</LinkTag>
			</Link>
			<Link href={vimeoLink} passHref>
				<LinkTag target="_blank">
					vimeo.com/geritv
				</LinkTag>
			</Link>
		</FooterInformationWrapper>
	);
};

export default FooterInformation;
