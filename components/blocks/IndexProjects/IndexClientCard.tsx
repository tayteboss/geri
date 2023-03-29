import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import PrimaryLink from '../../elements/PrimaryLink';
import { useClickOutside } from '../../../hooks/useClickOutside';

type StyledProps = {
	$hasProjects: boolean
}

const IndexClientCardWrapper = styled(motion.div)<StyledProps>`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	width: 100%;
	cursor: ${(props) => props.$hasProjects ? 'pointer' : 'initial'};
`;

const ClientStaticWrapper = styled.div`
	margin-bottom: ${pxToRem(4)};
	position: relative;
`;

const ClientStatic = styled.p``;

const ClientProjectsWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	z-index: 2;

	& > div {
		&:first-child {
			margin-top: ${pxToRem(6)} !important;
		}

		&:last-child {
			margin-bottom: ${pxToRem(2)} !important;
		}
	}

	.primary-link {
		display: block;
		white-space: nowrap;
		margin-bottom: ${pxToRem(4)};
		/* margin-left: ${pxToRem(8)}; */
		background: var(--colour-red);
		font-size: ${(props) => props.theme.size.small};

		&:hover {
			background: var(--colour-black);
		}
	}
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

const wrapperVariants = {
	hidden: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.1,
			ease: 'easeInOut',
			staggerChildren: 0.05,
			when: 'afterChildren',
			staggerDirection: -1
		}
	},
	visible: {
		opacity: 1,
		height: 'auto',
		transition: {
			duration: 0.1,
			ease: 'easeInOut',
			staggerChildren: 0.05,
			when: 'beforeChildren',
			staggerDirection: 1
		}
	}
};

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
			ease: 'easeInOut'
		}
	}
};

type Props = {
	name: string;
	projects?: []
};

const IndexClientCard = (props: Props) => {
	const {
		name,
		projects
	} = props;

	const [isActive, setIsActive] = useState<boolean>(false);

	const hasProjects = projects?.length;

	const ref = useRef<HTMLDivElement>(null!);
	useClickOutside(ref, () => {
		setIsActive(false);
	});

	return (
		<IndexClientCardWrapper
			variants={cardVariants}
			onClick={() => setIsActive(true)}
			$hasProjects={hasProjects}
			ref={ref}
		>
			<ClientStaticWrapper>
				<ClientStatic className="type-small">
					{name && name}
				</ClientStatic>
				<AnimatePresence>
					{(isActive && hasProjects) && (
						<ClientProjectsWrapper
							variants={wrapperVariants}
							initial='hidden'
							animate='visible'
							exit='hidden'
						>
							{hasProjects && projects.map((item: {title: string; link: string}, i: number) => (
								<motion.div
									variants={childVariants}
								>
									<PrimaryLink title={item.title} link={item.link} key={i} />
								</motion.div>
							))}
						</ClientProjectsWrapper>
					)}
				</AnimatePresence>
			</ClientStaticWrapper>
		</IndexClientCardWrapper>
	);
};

export default IndexClientCard;
