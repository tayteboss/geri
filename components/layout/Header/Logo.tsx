import styled from 'styled-components';
import LogoSvg from '../../svg/Logo';
import Link from 'next/link';

const LogoWrapper = styled.a``;

const Logo = () => {
	return (
		<Link href="/" passHref>
			<LogoWrapper>
				<LogoSvg />
			</LogoWrapper>
		</Link>
	);
};

export default Logo;
