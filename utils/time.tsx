const startTime = (): string => {
	let date = new Date();
	let h: string | number = date.getHours(); // 0 - 23
	let m: string | number = date.getMinutes(); // 0 - 59
	let s: string | number = date.getSeconds(); // 0 - 59
	let session = "AM";
	
	if(h == 0){
		h = 12;
	}
	
	if(h > 12){
		h = h - 12;
		session = "PM";
	}
	
	h = (h < 10) ? "0" + h : h;
	m = (m < 10) ? "0" + m : m;
	s = (s < 10) ? "0" + s : s;
	
	let time = h + ":" + m + ":" + s + " " + session;

	return time;
};

export default startTime;
