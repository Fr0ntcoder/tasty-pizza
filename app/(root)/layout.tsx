import type { Metadata } from 'next'

import Header from '@/components/shared/header'

import styles from './Layout.module.scss'

export const metadata: Metadata = {
	title: 'Tasty Pizza',
	description: ''
}

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className={styles.main}>
			<Header />
			{children}
		</main>
	)
}
