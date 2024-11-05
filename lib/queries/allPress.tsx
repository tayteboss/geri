const ALL_PRESS_QUERY: string = `query Query {
	allPresses(first: 100) {
		title
		excerpt
		image {
			url
		}
		date
		buttonTitle
		articleType
		articleUrl
	}
}`;

export default ALL_PRESS_QUERY;
