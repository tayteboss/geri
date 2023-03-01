import styled from 'styled-components';
import PrimaryLink from '../../elements/PrimaryLink';
import pxToRem from '../../../utils/pxToRem';

const MenuWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

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
