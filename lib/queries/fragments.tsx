export const richTextFragment = `
	blocks
	links
	value
`;

export const linkFragment = `
	useInternalLink
	internalLink {
		... on HomePageRecord {
			slug
		}
		... on ContactPageRecord {
			slug
		}
		... on CateringPageRecord {
			slug
		}
		... on GalleryPageRecord {
			slug
		}
		... on PageRecord {
			slug
		}
	}
	externalLink
	linkTitle
`;

export const mediaFragment = `
	useVideo
	image {
		url
		alt
		height
		width
		alt
	}
	video {
		url
	}
`;
