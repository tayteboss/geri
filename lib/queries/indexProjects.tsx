const INDEX_PROJECTS_QUERY: string = `
	query Query {
		allIndexProjects(first: 100) {
			client
			projects {
				title,
				link
			}
		}
		_allIndexProjectsMeta {
			count
		}
	}
`;

export default INDEX_PROJECTS_QUERY;
