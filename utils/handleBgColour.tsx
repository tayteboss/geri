const handleBgColour = (url: string): void => {
	if (url === '/') {
		document.documentElement.style.setProperty('--bg', `var(--colour-black)`);
		document.documentElement.style.setProperty('--fg', `var(--colour-red)`);
	} else if (url === '/projects-index') {
		document.documentElement.style.setProperty('--bg', `var(--colour-red)`);
		document.documentElement.style.setProperty('--fg', `var(--colour-black)`);
	} else if (url === '/information') {
		document.documentElement.style.setProperty('--bg', `var(--colour-white)`);
		document.documentElement.style.setProperty('--fg', `var(--colour-red)`);
	} else {
		document.documentElement.style.setProperty('--bg', `var(--colour-black)`);
		document.documentElement.style.setProperty('--fg', `var(--colour-red)`);
	}
};

export default handleBgColour;