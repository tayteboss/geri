import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingCoverWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	height: 100lvh;
	width: 100%;
	background: var(--fg);
	pointer-events: none;
	z-index: 500;
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
			delay: 0.5,
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
			delay: 0.5,
		}
	}
};

const LoadingCover = () => {
	return (
		<LoadingCoverWrapper
			variants={wrapperVariants}
			initial='visible'
			animate='hidden'
		/>
	);
};

export default LoadingCover;
