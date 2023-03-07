import { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${(props) => props.theme.layout.innerWrapper};
	padding-left: 1rem;
	padding-right: 1rem;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
`;

const LayoutWrapper = (props: Props) => (
	<Wrapper className="inner-wrapper">{props.children}</Wrapper>
);

export default LayoutWrapper;
