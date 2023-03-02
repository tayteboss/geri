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
		bottom: 16px;
		left: 16px;

		.primary-link {
			font-size: ${pxToRem(24)};
		}
	}

	.primary-link {
		margin-bottom: ${pxToRem(4)};
	}
`;

const Menu = () => {
	const activeLink: string = useActiveLink();

	return (
		<MenuWrapper>
			<PrimaryLink title="Featured" link="/" isActiveLink={activeLink === 'Home'} />
			<PrimaryLink title="Index" link="/index" isActiveLink={activeLink === 'Index'} />
			<PrimaryLink title="Information" link="/information" isActiveLink={activeLink === 'Information'} />
		</MenuWrapper>
	);
};

export default Menu;
