import styled from 'styled-components';
import { IndexProjectsType } from '../../../shared/types/types';
import IndexClientCard from './IndexClientCard';
import { motion } from 'framer-motion';

const IndexCardWrapper = styled(motion.div)`
	grid-column: span 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		grid-column: span 3;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: span 2;
	}
`;

const Letter = styled.h1`
	margin-bottom: 1rem;
`;

const childVariants = {
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
			ease: 'easeInOut',
			staggerChildren: 0.1
		}
	}
};

const IndexCard = (props: IndexProjectsType) => {
	const {
		letter,
		client
	} = props;

	const hasClients = client.length > 0;

	return (
		<IndexCardWrapper
			variants={childVariants}
		>
			<Letter>{letter || letter}</Letter>
			{hasClients && client.map((item: { client: string; vimeoLink: string }, index) => (
				<IndexClientCard
					name={item?.client}
					link={item?.vimeoLink}
					key={index}
				/>
			))}
			{!hasClients && (
				<IndexClientCard
					name="-"
					key={Math.random() * 10000}
				/>
			)}
		</IndexCardWrapper>
	);
};

export default IndexCard;
