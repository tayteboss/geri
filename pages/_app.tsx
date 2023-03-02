import { useEffect, useState } from 'react';
import '../styles/fonts.css';
import { ThemeProvider } from 'styled-components';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import Cookies from 'js-cookie';
import Layout from '../components/layout';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/global';
import use1vh from '../hooks/use1vh';

type Transitions = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay: number
		}
	}
};

const pageTransitionVariants: Transitions = {
	hidden: { opacity: 0, transition: { duration: 0.3 } },
	visible: { opacity: 1, transition: { duration: 0.3, delay: 0.25 } },
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

	const router= useRouter();
	const routerEvents = router.events;

	const handleBgColour = (url: string): void => {
		if (url === '/') {
			document.documentElement.style.setProperty('--bg', `var(--colour-black)`);
			document.documentElement.style.setProperty('--fg', `var(--colour-red)`);
		}
		if (url === '/index') {
			document.documentElement.style.setProperty('--bg', `var(--colour-red)`);
			document.documentElement.style.setProperty('--fg', `var(--colour-black)`);
		}
	}

	const handleExitComplete = (): void => {
		window.scrollTo(0, 0);
	};

	use1vh();

	useEffect(() => {
		routerEvents.on('routeChangeStart', (url) => {
			handleBgColour(url);
		});
	}, [routerEvents]);

	useEffect(() => {
		handleBgColour(router.asPath);

		console.log('router', router);
		

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

	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Layout>
					<AnimatePresence
						mode="wait"
						onExitComplete={() => handleExitComplete()}
					>
						<Component
							{...pageProps}
							key={router.asPath}
							pageTransitionVariants={pageTransitionVariants}
						/>
					</AnimatePresence>
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default App;
