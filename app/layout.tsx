import { Nunito } from 'next/font/google'
import Head from 'next/head'
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
			<Head>
				<link rel='icon' href='/logo.png' />
			</Head>
			<body>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
