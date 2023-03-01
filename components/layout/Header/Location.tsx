import { useEffect, useState } from 'react';
import styled from 'styled-components';
import startTime from '../../../utils/time';

const LocationWrapper = styled.div``;

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
			<P>Naarm [Melbourne]</P>
		</LocationWrapper>
	);
};

export default Location;
