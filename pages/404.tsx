import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import PrimaryLink from '../components/elements/PrimaryLink';
import pxToRem from '../utils/pxToRem';

const PageWrapper = styled.div`
	padding: ${pxToRem(48)} 0 0 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(120)} ${pxToRem(8)} 0;
	}
`;

const Title = styled.h1`
	margin-bottom: ${pxToRem(16)};
`;

const Page = () => {
	return (
		<PageWrapper>
			<LayoutWrapper>
				<Title>Sorry, this page doesn't exist</Title>
				<PrimaryLink link="/" title="Go Home" />
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;
