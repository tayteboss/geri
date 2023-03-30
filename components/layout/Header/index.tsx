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
	left: 0;
	z-index: 100;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		min-height: unset;
		align-items: center;
		position: fixed;
		width: 100%;
		padding: 0.5rem 0 0.5rem 0.5rem;
	}
`;

type propsType = {
	handleCursorUpdate: () => void
}

const Header = ({ handleCursorUpdate }: propsType) => {
	return (
		<HeaderWrapper className="header">
			<Logo />
			<Menu handleCursorUpdate={handleCursorUpdate} />
			<Location />
		</HeaderWrapper>
	)
};

export default Header;
