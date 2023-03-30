import { useEffect, useState } from 'react';
import styled from 'styled-components';
import startTime from '../../../utils/time';

const LocationWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const P = styled.p``;

const Location = () => {
	const [time, setTime] = useState<string>('')

	useEffect(() => {
		const timeId = setInterval(() => {
			setTime(startTime());
		}, 1000);

		return () => {
			clearInterval(timeId);
		}
	}, []);

	return (
		<LocationWrapper>
			<P>{time}</P>
			<P>London</P>
		</LocationWrapper>
	);
};

export default Location;
