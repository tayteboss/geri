import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';

const IndexClientCardWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const ClientLink = styled.a`
	text-decoration: none;
	margin-bottom: ${pxToRem(4)};
	padding: ${pxToRem(1)} ${pxToRem(4)} 0;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--fg);
		color: var(--bg);
		border-radius: 100px;
	}
`;

const ClientStatic = styled.p`
	margin-bottom: ${pxToRem(4)};
	padding: ${pxToRem(1)} ${pxToRem(4)} 0;
`;

const cardVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1,
			ease: 'easeInOut'
		}
	}
};

type Props = {
	name: string;
	link?: string
};

const IndexClientCard = (props: Props) => {
	const {
		name,
		link
	} = props;

	return (
		<IndexClientCardWrapper
			variants={cardVariants}
		>
			{link && (
				<Link href={link} passHref>
					<ClientLink
						target="_blank"
						className="type-small"
					>
						{name && name}
					</ClientLink>
				</Link>
			)}
			{!link && (
				<ClientStatic className="type-small">
					{name && name}
				</ClientStatic>
			)}
		</IndexClientCardWrapper>
	);
};

export default IndexClientCard;
