const FEATURED_PROJECTS_QUERY: string = `
	query Query {
		allFeaturedProjects {
			client
			title
			vimeoLink
			media {
				webmVideoFile {
					url
				}
				placeholderImage {
					url
				}
				mp4VideoFile {
					url
				}
			}
		}
	}
`;

export default FEATURED_PROJECTS_QUERY;
