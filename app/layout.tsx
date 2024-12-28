
import { Nunito } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.scss'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html className={nunito.className} lang='ru'>
			<head>
				<link data-rh='true' rel='icon' href='/logo.png' />
			</head>
			<body>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
