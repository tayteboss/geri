import styled from 'styled-components';
import { IndexProjectsType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import IndexCard from './IndexCard';
import LayoutGrid from '../../common/LayoutGrid';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const IndexProjectsWrapper = styled(motion.section)`
	padding: ${pxToRem(48)} 0 0 0;
	margin-bottom: ${pxToRem(120)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(120)} ${pxToRem(16)} 0;
	}

	.grid {
		grid-template-columns: repeat(10, minmax(0, 1fr));
		row-gap: ${pxToRem(64)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(32)};
`;

const wrapperVariants: {} = {
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
			staggerChildren: 0.05,
		}
	}
};

type Props = {
	data: IndexProjectsType[];
}

const IndexProjects = (props: Props) => {
	const {
		data
	} = props;

	if (data.length <= 0) return <></>;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '100px'
	});

	return (
		<IndexProjectsWrapper
			variants={wrapperVariants}
			initial='hidden'
			animate={inView ? 'visible' : 'hidden'}
			ref={ref}
		>
			<Title>Index:</Title>
			<LayoutGrid>
				{data.map((item, index) => (
					<IndexCard
						letter={item?.letter}
						client={item?.client}
						key={index}
					/>
				))}
			</LayoutGrid>
		</IndexProjectsWrapper>
	);
};

export default IndexProjects;
