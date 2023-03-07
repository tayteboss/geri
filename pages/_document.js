import { NextSeo } from 'next-seo';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { useRouter } from 'next/router';

export default class CustomDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<NextSeo
					openGraph={{
						images: [
							{
								url: '/file-path.jpg',
								width: 1200,
								height: 627,
							},
						],
					}}
				/>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
