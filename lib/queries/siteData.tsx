import { mediaFragment, richTextFragment } from "./fragments";

const SITE_DATA_QUERY: string = `
	query Query {
		siteInformation {
			vimeoLink
			title
			subTitle
			siteVersionNumber
			seoImage {
				url
			}
			seoDescription
			phone
			instagramLink
			email
			bio {
				${richTextFragment}
			}
		}
	}
`;

export default SITE_DATA_QUERY;
