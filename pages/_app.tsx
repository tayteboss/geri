import React, { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Layout from '../components/layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';
import handleBgColour from '../utils/handleBgColour';
import { Transitions } from '../shared/types/types';
import LoadingCover from '../components/blocks/LoadingCover';

const pageTransitionVariants: Transitions = {
	hidden: { opacity: 0, transition: { duration: 0.2 } },
	visible: { opacity: 1, transition: { duration: 0.2 } },
};

type Props = {
	Component: any; // TO BE UPDATED
	pageProps: {};
};

const App = (props: Props) => {
	const {
		Component,
		pageProps
	} = props;

	const [hasVisited, setHasVisited] = useState<boolean>(false);
	const [appCursorRefresh, setAppCursorRefresh] = useState<number>(0);

	const router= useRouter();
	const routerEvents = router.events;

	const handleExitComplete = (): void => {
		window.scrollTo(0, 0);
	};

	use1vh();

	useEffect(() => {
		routerEvents.on('routeChangeComplete', (url) => {
			handleBgColour(url);
		});
	}, [routerEvents]);

	useEffect(() => {
		handleBgColour(router.asPath);

		const hasCookies = Cookies.get('visited');

		if (hasCookies) {
			setHasVisited(true);
		}

		const timer = setTimeout(() => {
			Cookies.set('visited', 'true', { expires: 1, path: '' });
		}, 5000);

		return () => {
			clearTimeout(timer);
		}
	}, []);

	const handleCursorRefresh = () => {
		setAppCursorRefresh(appCursorRefresh + 1);
	};

	return (
		<>
			<LoadingCover />
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Layout
					appCursorRefresh={appCursorRefresh}
				>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							pageTransitionVariants={pageTransitionVariants}
							handleCursorRefresh={() => handleCursorRefresh()}
						/>
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
