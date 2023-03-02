import styled from 'styled-components';
import Header from './Header';
import { ReactNode } from 'react';
import LayoutGrid from '../common/LayoutGrid';

const Main = styled.main`
	grid-column: 3 / -1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
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
