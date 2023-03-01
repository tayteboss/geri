import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import { ReactNode } from 'react';
import LayoutGrid from '../common/LayoutGrid';

const Main = styled.main`
	grid-column: 3 / -1;
`;

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const {
		children
	} = props;

	return (
		<LayoutGrid>
			<Header />
			<Main>{children}</Main>
		</LayoutGrid>
	);
};

export default Layout;
