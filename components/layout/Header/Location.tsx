import { useEffect, useState } from 'react';
import styled from 'styled-components';
import startTime from '../../../utils/time';

const options = require('../../../json/siteData.json');

const LocationWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const P = styled.p``;

const Location = () => {
	const [time, setTime] = useState<string>('');

	const {
		location
	} = options;

	useEffect(() => {
		const timeId = setInterval(() => {
			setTime(startTime(location));
		}, 1000);

		return () => {
			clearInterval(timeId);
		}
	}, []);

	return (
		<LocationWrapper>
			<P>{time}</P>
			<P>{location && location}</P>
		</LocationWrapper>
	);
};

export default Location;
