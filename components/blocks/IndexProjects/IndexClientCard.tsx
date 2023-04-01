import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
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

	&:hover {
		cursor: pointer;
	}

	&.active {
		opacity: ${(props) => props.$isActive ? 1 : 0.4} !important;
	}
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
		background: var(--colour-red);
		font-size: ${(props) => props.theme.size.small};
		position: relative;
		z-index: 2;

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

	useEffect(() => {
		const cards = document.querySelectorAll('.index-client-card');

		if (isActive) {
			cards.forEach(card => {
				card.classList.add('active');
			});
		} else {
			cards.forEach(card => {
				card.classList.remove('active');
			});
		}
	}, [isActive]);
	

	return (
		<IndexClientCardWrapper
			variants={cardVariants}
			onClick={() => setIsActive(true)}
			$hasProjects={hasProjects}
			$isActive={isActive}
			ref={ref}
			className="cursor-link index-client-card"
		>
			<ClientStaticWrapper>
				<ClientStatic className="type-small cursor-link">
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
									<PrimaryLink title={item.title} link={item.link} target="_blank" key={i} />
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
