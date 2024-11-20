import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import Header from '@/components/shared/header'

import styles from './Layout.module.scss'
import './styles/globals.scss'

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
	title: 'Tasty Pizza',
	description: ''
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${nunito.variable} ${nunito.variable}`}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</body>
		</html>
	)
}
