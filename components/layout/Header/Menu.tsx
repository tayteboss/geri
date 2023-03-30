import styled from 'styled-components';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';
import useActiveLink from '../../../hooks/useActiveLink';

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		position: fixed;
		bottom: ${pxToRem(8)};
		left: ${pxToRem(8)};

		.primary-link {
			font-size: ${pxToRem(24)};
		}
	}

	.primary-link {
		margin-bottom: ${pxToRem(4)};
	}
`;

type propsType = {
	handleCursorUpdate: () => void
}

const Menu = ({ handleCursorUpdate }: propsType) => {
	const activeLink: string = useActiveLink();

	const handleClick = () => {
		handleCursorUpdate();

		setTimeout(() => {
			handleCursorUpdate();
		}, 500);
	}

	return (
		<MenuWrapper onClick={() => handleClick()}>
			<PrimaryLink
				title="Featured"
				link="/"
				isActiveLink={activeLink === 'Home'}
			/>
			<PrimaryLink
				title="Index"
				link="/projects-index"
				isActiveLink={activeLink === 'Index'}
			/>
			<PrimaryLink
				title="Information"
				link="/information"
				isActiveLink={activeLink === 'Information'}
			/>
		</MenuWrapper>
	);
};

export default Menu;
