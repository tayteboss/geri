import styled from 'styled-components';
import LayoutGrid from '../../common/LayoutGrid';
import FooterSecondary from './FooterSecondary';
import FooterInformation from './FooterInformation';
import pxToRem from '../../../utils/pxToRem';

const FooterWrapper = styled.footer`
	margin-bottom: ${pxToRem(160)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(16)};
	}

	.grid {
		grid-template-columns: repeat(10, minmax(0, 1fr));
	}
`;

type Props = {
	showInfo: boolean;
}

const Footer = (props: Props) => {
	const {
		showInfo
	} = props;

	return (
		<FooterWrapper>
			<LayoutGrid>
				{showInfo && (
					<FooterInformation />
				)}
				<FooterSecondary />
			</LayoutGrid>
		</FooterWrapper>
	)
};

export default Footer;