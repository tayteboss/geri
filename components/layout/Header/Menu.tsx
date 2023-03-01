import styled from 'styled-components';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';

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
	return (
		<MenuWrapper>
			<PrimaryLink title="Featured" link="/" isActiveLink={true} />
			<PrimaryLink title="Index" link="/index" isActiveLink={false} />
			<PrimaryLink title="Information" link="/information" isActiveLink={false} />
		</MenuWrapper>
	);
};

export default Menu;
