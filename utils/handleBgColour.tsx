const handleBgColour = (url: string): void => {
	if (url === '/') {
		document.documentElement.style.setProperty(
			'--bg',
			`var(--colour-black)`
		);
		document.documentElement.style.setProperty(
			'--fg',
			`var(--colour-site-colour)`
		);
	} else if (url === '/projects-index') {
		document.documentElement.style.setProperty(
			'--bg',
			`var(--colour-site-colour)`
		);
		document.documentElement.style.setProperty(
			'--fg',
			`var(--colour-black)`
		);
	} else if (url === '/information') {
		document.documentElement.style.setProperty(
			'--bg',
			`var(--colour-white)`
		);
		document.documentElement.style.setProperty(
			'--fg',
			`var(--colour-site-colour)`
		);
	} else {
		document.documentElement.style.setProperty(
			'--bg',
			`var(--colour-black)`
		);
		document.documentElement.style.setProperty(
			'--fg',
			`var(--colour-site-colour)`
		);
	}
};

export default handleBgColour;
