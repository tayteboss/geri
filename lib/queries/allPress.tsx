const ALL_PRESS_QUERY: string = `query Query {
	allPresses {
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
