import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';

type StyledProps = {
	$isHovered: boolean;
	$isActiveLink: boolean
}

const PrimaryLinkWrapper = styled.a<StyledProps>`
	padding: 0 8px;
	background: ${(props) => props.$isActiveLink ? 'var(--fg)' : props.$isHovered ? 'var(--fg)' : 'var(--bg)'};
	color: ${(props) => props.$isActiveLink ? 'var(--bg)' : props.$isHovered ? 'var(--bg)' : 'var(--fg)'};
	border: 1px solid var(--fg);
	border-radius: 100px;
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
	title: string;
	link: string;
	isActiveLink?: boolean
};

const PrimaryLink = (props: Props) => {
	const {
		title,
		link,
		isActiveLink = false
	} = props;

	if (!title || !link) return <></>;

	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<Link href={link} passHref>
			<PrimaryLinkWrapper
				$isHovered={isHovered}
				$isActiveLink={isActiveLink}
				className="primary-link"
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
			>
				{title && title}
			</PrimaryLinkWrapper>
		</Link>
	);
};

export default PrimaryLink;
