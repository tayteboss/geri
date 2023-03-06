import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type StyledProps = {
	$isHovered: boolean;
}

const PrimaryButtonWrapper = styled.button<StyledProps>`
	padding: 0 ${pxToRem(5)};
	background: ${(props) => props.$isHovered ? 'var(--fg)' : 'var(--bg)'};
	color: ${(props) => props.$isHovered ? 'var(--bg)' : 'var(--fg)'};
	border: 1px solid var(--fg);
	border-radius: 100px;
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

type Props = {
	title: string;
	handleClick: () => void
};

const PrimaryButton = (props: Props) => {
	const {
		title,
		handleClick
	} = props;

	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<PrimaryButtonWrapper
			$isHovered={isHovered}
			className="primary-link"
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
			onClick={() => handleClick()}
		>
			{title && title}
		</PrimaryButtonWrapper>
	);
};

export default PrimaryButton;
