const robotsPolicy = [{ userAgent: '*', allow: '/' }];

module.exports = {
	siteUrl: process.env.SITE_URL || 'https://localhost:3000',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: robotsPolicy,
	},
};
