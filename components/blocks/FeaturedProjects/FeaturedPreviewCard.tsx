import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { PreviewContext } from '../../../shared/context/previewContext';

const FeaturedPreviewCardWrapper = styled(motion.div)`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	pointer-events: none;
	width: 50%;
`;

const VideoComponentWrapper = styled.div`
	position: relative;
`;

const Video = styled.video`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const LoadingWrapper = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--colour-black);
	z-index: 2;
	pointer-events: none;
`;

const Loader = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 16px;
	height: 16px;
	background: var(--colour-white);
	border-radius: 100%;
`;

const wrapperVariants: {} = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
			ease: 'easeInOut'
		}
	}
};

const childVariants: {} = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.1,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: [1, 0],
		transition: {
			duration: 0.6,
			ease: 'easeInOut',
			repeat: 'Infinity',
			repeatType: 'mirror'
		}
	}
};

const FeaturedPreviewCard = () => {
	const { previewData } = useContext(PreviewContext);

	const [isLoading, setIsLoading] = useState(true);

	const videoRef = useRef<HTMLVideoElement>(null);

	if (!previewData) return <></>;

	return (
		<AnimatePresence>
			{previewData && (
				<FeaturedPreviewCardWrapper
					variants={wrapperVariants}
					initial="hidden"
					animate="visible"
					exit="hidden"
				>
					<VideoComponentWrapper className="video-component-wrapper">
						{previewData && (
							<>
								<AnimatePresence>
									{isLoading && (
										<LoadingWrapper
											variants={wrapperVariants}
											initial="hidden"
											animate="visible"
											exit="hidden"
										>
											<Loader
												variants={childVariants}
												initial="hidden"
												animate="visible"
												exit="hidden"
											/>
										</LoadingWrapper>
									)}
								</AnimatePresence>
								<Video
									autoPlay
									muted
									playsInline
									loop
									ref={videoRef}
									preload="auto"
									onLoadedData={() => setIsLoading(false)}
									poster={
										previewData[0].placeholderImage?.url
									}
									key={previewData[0].placeholderImage?.url}
								>
									<source
										src={previewData[0].mp4VideoFile?.url}
										type="video/mp4"
									/>
								</Video>
							</>
						)}
					</VideoComponentWrapper>
				</FeaturedPreviewCardWrapper>
			)}
		</AnimatePresence>
	);
};

export default FeaturedPreviewCard;
