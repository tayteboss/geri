import styled from 'styled-components';
import Header from './Header';
import { ReactNode, useEffect, useState } from 'react';
import LayoutGrid from '../common/LayoutGrid';
import Cursor from '../elements/Cursor';
import { useRouter } from 'next/router';

const Main = styled.main`
	grid-column: 3 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

type Props = {
	children: ReactNode;
	appCursorRefresh: number;
};

const Layout = (props: Props) => {
	const {
		children,
		appCursorRefresh
	} = props;

	const [cursorRefresh, setCursorRefresh] = useState<number>(1);

	const router = useRouter();
	const routerEvents = router.events;

	const handleRouteChangeComplete = () => {
		setCursorRefresh(cursorRefresh + 1);

		setTimeout(() => {
			setCursorRefresh(cursorRefresh + 1);
		}, 500);
	};

	useEffect(() => {
		routerEvents.on('routeChangeComplete', handleRouteChangeComplete);
		routerEvents.on('routeChangeStart', handleRouteChangeComplete);

		return () => {
			routerEvents.off('routeChangeComplete', handleRouteChangeComplete);
			routerEvents.off('routeChangeStart', handleRouteChangeComplete);
		};
	}, []);

	return (
		<LayoutGrid>
			<Header
				handleCursorUpdate={
					() => setCursorRefresh(cursorRefresh + 1)
				}
			/>
			<Main>{children}</Main>
			<Cursor cursorRefresh={cursorRefresh} />
		</LayoutGrid>
	);
};

export default Layout;
