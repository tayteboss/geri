const INDEX_PROJECTS_QUERY: string = `
	query Query {
		allIndexProjects(first: 100) {
			client
			vimeoLink
		}
		_allIndexProjectsMeta {
			count
		}
	}
`;

export default INDEX_PROJECTS_QUERY;
