import styled from 'styled-components';
import LogoSvg from '../../svg/Logo';
import Link from 'next/link';

const LogoWrapper = styled.a`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		svg {
			width: 140px;
		}
	}
`;

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
