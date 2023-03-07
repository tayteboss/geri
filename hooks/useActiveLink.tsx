import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useActiveLink = (): string => {
	const [activeLink, setActiveLink] = useState<string>('Home');
	const router = useRouter();

	useEffect(() => {
		if (router.pathname === '/') {
			setActiveLink('Home');
		} else if (router.pathname === '/index') {
			setActiveLink('Index');
		} else if (router.pathname === '/information') {
			setActiveLink('Information');
		} else {
			setActiveLink('');
		}
	}, [router]);

	return activeLink;
};

export default useActiveLink;
