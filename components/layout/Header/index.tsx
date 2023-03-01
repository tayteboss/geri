import styled from 'styled-components';
import Logo from './Logo';
import Menu from './Menu';
import Location from './Location';

const HeaderWrapper = styled.header`
	grid-column: 1 / 3;
	padding: 1rem 0 1rem 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	min-height: 100lvh;
	min-height: 100vh;
	position: sticky;
	top: 0;
`;

const Header = () => {
	return (
		<HeaderWrapper className="header">
			<Logo />
			<Menu />
			<Location />
		</HeaderWrapper>
	)
};

export default Header;
