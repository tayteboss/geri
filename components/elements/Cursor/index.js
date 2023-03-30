import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useMousePosition } from '../../../hooks/useMousePosition';

const CursorWrapper = styled.div`
	mix-blend-mode: difference;
	height: 27px;
	width: 27px;
	z-index: 1000;
	position: fixed;
	display: ${(props) => (props.isOnDevice ? 'none' : 'block')};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: none;
	}
`;

const CursorRing = styled(motion.div)`
	position: fixed;
	display: flex;
	flex-flow: row;
	align-content: center;
	justify-content: center;
	top: ${(props) => (props.$isHoveringLink ? '-15px' : '-10px')};
	left: ${(props) => (props.$isHoveringLink ? '-15px' : '-10px')};
	height: ${(props) => (props.$isHoveringLink ? '30px' : '20px')};
	width: ${(props) => (props.$isHoveringLink ? '30px' : '20px')};
	background-image: url('/icons/heart.svg');
	background-size: ${(props) => (props.$isHoveringLink ? '30px' : '20px')};
	background-repeat: no-repeat;
	pointer-events: none;
	z-index: 2;

	transition: height 150ms ease, width 150ms ease, background 150ms ease, background-size 150ms ease,
		top 150ms ease, left 150ms ease, border-radius 150ms ease;
`;

const Cursor = ({ cursorRefresh }) => {
	const [isHoveringLink, setIsHoveringLink] = useState(false);
	const [hideCursor, setHideCursor] = useState(false);
	const [isOnDevice, setIsOnDevice] = useState(false);
	const position = useMousePosition();
	const router = useRouter();

	const mouseXPosition = position.x;
	const mouseYPosition = position.y;

	const variantsWrapper = {
		visible: {
			x: mouseXPosition,
			y: mouseYPosition,
			transition: {
				type: 'spring',
				mass: 0.05,
				stiffness: 1000,
				damping: 40,
				ease: 'linear',
			},
		},
	};

	useEffect(() => {
		const aTags = document.querySelectorAll('a');
		const buttonTags = document.querySelectorAll('button');
		const altLinks = document.querySelectorAll('.cursor-link');
		const hideLinks = document.querySelectorAll('.cursor-hide');

		aTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		buttonTags.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		altLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setIsHoveringLink(true);
			});
			link.addEventListener('mouseleave', () => {
				setIsHoveringLink(false);
			});
		});

		hideLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => {
				setHideCursor(true);
			});
			link.addEventListener('mouseleave', () => {
				setHideCursor(false);
			});
		});

		// checking if on a device
		const ua = navigator.userAgent;
		if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
			setIsOnDevice(true);
		} else if (
			/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		) {
			setIsOnDevice(true);
		}
	}, [cursorRefresh]);

	useEffect(() => {
		setIsHoveringLink(false);
		setHideCursor(false);
	}, [router.asPath, cursorRefresh]);

	return (
		<CursorWrapper isOnDevice={isOnDevice}>
			<CursorRing
				$isHoveringLink={isHoveringLink}
				$hideCursor={hideCursor}
				animate="visible"
				variants={variantsWrapper}
			/>
		</CursorWrapper>
	);
};

export default Cursor;
