import type { Metadata } from 'next'
import { ReactNode } from 'react'

import Header from '@/shared/components/shared/header'

import styles from './Layout.module.scss'

export const metadata: Metadata = {
	title: 'Tasty Pizza',
	description: ''
}

export default function RootLayout({
	children,
	modal
}: Readonly<{
	children: ReactNode
	modal: ReactNode
}>) {
	return (
		<main className={styles.main}>
			<Header />
			{children}
			{modal}
		</main>
	)
}
