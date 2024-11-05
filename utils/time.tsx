import moment from 'moment-timezone';

const startTime = (location: string): string => {
	let h: string | number = 0;
	let m: string | number = 0;
	let s: string | number = 0;
	let session = 'AM';

	let date = new Date();

	h = date.getHours(); // 0 - 23
	m = date.getMinutes(); // 0 - 59
	s = date.getSeconds(); // 0 - 59

	session = h >= 12 ? 'PM' : 'AM';

	if (h == 0) {
		h = 12;
	}

	if (h > 12) {
		h = h - 12;
	}

	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;

	let time = h + ':' + m + ':' + s + ' ' + session;

	return time;
};

export default startTime;
