import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document(): JSX.Element {
	return (
		<Html lang='ru'>
			<Head>
				<link href='https://fonts.googleapis.com' rel='preconnect' />
				<link href='https://fonts.gstatic.com' rel='preconnect' crossOrigin='anonymous' />
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
					rel='stylesheet'
				/>
				<link href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css' rel='stylesheet' type='text/css' charSet='UTF-8' />
				<link href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css' rel='stylesheet' type='text/css' />

				<Script src='https://www.googletagmanager.com/gtag/js?id=G-F6ZYS1S12T' strategy='afterInteractive' />
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-F6ZYS1S12T');
					`}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
