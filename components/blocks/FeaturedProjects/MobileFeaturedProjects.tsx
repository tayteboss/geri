import styled from 'styled-components';
import FeaturedProjectCard from './FeaturedProjectCard';
import { FeaturedProjectsType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';

const MobileFeaturedProjectsWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		padding: ${pxToRem(100)} 0 ${pxToRem(140)};
	}
`;

type Props = {
	data: FeaturedProjectsType[];
};

const MobileFeaturedProjects = (props: Props) => {
	const {
		data
	} = props;

	const doubleData = data.concat(data);

	return (
		<MobileFeaturedProjectsWrapper>
			<LayoutWrapper>
				{doubleData.map((item: FeaturedProjectsType, index: number) => (
					<FeaturedProjectCard
						data={item}
						key={index}
					/>
				))}
			</LayoutWrapper>
		</MobileFeaturedProjectsWrapper>
	);
};

export default MobileFeaturedProjects;
