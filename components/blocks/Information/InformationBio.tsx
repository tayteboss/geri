import styled from 'styled-components';
import RichText from '../../common/RichText';
import pxToRem from '../../../utils/pxToRem';

const InformationBioWrapper = styled.div`
	column-count: 2;
	column-gap: ${pxToRem(16)};
	max-width: ${pxToRem(950)};
	margin-bottom: ${pxToRem(32)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		column-count: 1;
	}
`;

type Props = {
	bio: any;
}

const InformationBio = (props: Props) => {
	const {
		bio
	} = props;

	return (
		<InformationBioWrapper>
			<RichText data={bio} />
		</InformationBioWrapper>
	);
};

export default InformationBio;
